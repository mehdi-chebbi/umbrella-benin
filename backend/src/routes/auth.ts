import { Router, Request, Response } from "express";
import bcrypt from "bcryptjs";
import pool from "../db/pool.js";
import { generateToken } from "../utils/jwt.js";
import { authenticate } from "../middleware/auth.js";

const router = Router();

// POST /api/auth/login — Authenticate admin and return JWT
router.post("/login", async (req: Request, res: Response): Promise<void> => {
  const { username, password } = req.body;

  // Validate required fields
  if (!username || !password) {
    res.status(400).json({ error: "Nom d'utilisateur et mot de passe requis" });
    return;
  }

  try {
    // Look up admin by username
    const result = await pool.query(
      "SELECT id, username, password FROM admins WHERE username = $1",
      [username]
    );

    const admin = result.rows[0];

    if (!admin) {
      res.status(401).json({ error: "Identifiants invalides" });
      return;
    }

    // Compare password with stored bcrypt hash
    const isMatch = await bcrypt.compare(password, admin.password);

    if (!isMatch) {
      res.status(401).json({ error: "Identifiants invalides" });
      return;
    }

    // Generate and return JWT token
    const token = generateToken(
      { id: admin.id, username: admin.username },
      "24h"
    );

    res.json({
      token,
      user: {
        id: admin.id,
        username: admin.username,
      },
    });
  } catch (error) {
    console.error("[Auth] Erreur de connexion :", error);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
});

// GET /api/auth/me — Return current authenticated admin info
router.get(
  "/me",
  authenticate,
  async (req: Request, res: Response): Promise<void> => {
    try {
      const result = await pool.query(
        "SELECT id, username, created_at FROM admins WHERE id = $1",
        [req.user!.id]
      );

      const admin = result.rows[0];

      if (!admin) {
        res.status(404).json({ error: "Administrateur non trouvé" });
        return;
      }

      res.json(admin);
    } catch (error) {
      console.error("[Auth] Erreur récupération profil :", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }
);

// POST /api/auth/change-password — Update admin password (protected)
router.post(
  "/change-password",
  authenticate,
  async (req: Request, res: Response): Promise<void> => {
    const { currentPassword, newPassword } = req.body;

    // Validate required fields
    if (!currentPassword || !newPassword) {
      res
        .status(400)
        .json({
          error: "Mot de passe actuel et nouveau mot de passe requis",
        });
      return;
    }

    // Validate new password length
    if (newPassword.length < 6) {
      res
        .status(400)
        .json({ error: "Le nouveau mot de passe doit contenir au moins 6 caractères" });
      return;
    }

    try {
      // Fetch current admin with password hash
      const result = await pool.query(
        "SELECT id, password FROM admins WHERE id = $1",
        [req.user!.id]
      );

      const admin = result.rows[0];

      if (!admin) {
        res.status(404).json({ error: "Administrateur non trouvé" });
        return;
      }

      // Verify current password
      const isMatch = await bcrypt.compare(currentPassword, admin.password);

      if (!isMatch) {
        res
          .status(401)
          .json({ error: "Mot de passe actuel incorrect" });
        return;
      }

      // Hash new password and update
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(newPassword, salt);

      await pool.query("UPDATE admins SET password = $1 WHERE id = $2", [
        hashedPassword,
        admin.id,
      ]);

      res.json({ message: "Mot de passe mis à jour avec succès" });
    } catch (error) {
      console.error("[Auth] Erreur changement mot de passe :", error);
      res.status(500).json({ error: "Erreur interne du serveur" });
    }
  }
);

export default router;
