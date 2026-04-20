import express from "express";
import cors from "cors";
import pool, { initDatabase } from "./db/pool.js";
import authRoutes from "./routes/auth.js";

const app = express();
const PORT = parseInt(process.env.PORT || "4000", 10);

// ─── Middleware ────────────────────────────────────────────────
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost",
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use(express.json());

// ─── Routes ────────────────────────────────────────────────────
app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
});

app.use("/api/auth", authRoutes);

// ─── 404 fallback ─────────────────────────────────────────────
app.use((_req, res) => {
  res.status(404).json({ error: "Route non trouvée" });
});

// ─── Global error handler ─────────────────────────────────────
app.use(
  (
    err: Error,
    _req: express.Request,
    res: express.Response,
    _next: express.NextFunction
  ) => {
    console.error("[Server] Erreur non gérée :", err);
    res.status(500).json({ error: "Erreur interne du serveur" });
  }
);

// ─── Start server ─────────────────────────────────────────────
async function start() {
  try {
    await initDatabase();
    app.listen(PORT, () => {
      console.log(`[Server] Projet UMBRELLA — Backend démarré sur le port ${PORT}`);
    });
  } catch (error) {
    console.error("[Server] Impossible de démarrer le serveur :", error);
    process.exit(1);
  }
}

start();
