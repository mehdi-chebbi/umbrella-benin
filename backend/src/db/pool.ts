import pg from "pg";

const { Pool } = pg;

// Create PostgreSQL connection pool from environment variables
const pool = new Pool({
  host: process.env.DB_HOST || "localhost",
  port: parseInt(process.env.DB_PORT || "5432", 10),
  database: process.env.DB_NAME || "umbrella",
  user: process.env.DB_USER || "umbrella",
  password: process.env.DB_PASSWORD || "umbrella",
});

// Test the database connection and initialize tables
export async function initDatabase(): Promise<void> {
  try {
    const res = await pool.query("SELECT NOW() as current_time");
    console.log(
      `[DB] Connexion réussie à PostgreSQL — ${res.rows[0].current_time}`
    );
  } catch (error) {
    console.error("[DB] Erreur de connexion à PostgreSQL :", error);
    throw error;
  }

  // Auto-create tables if they don't exist
  await pool.query(`
    CREATE TABLE IF NOT EXISTS admins (
      id SERIAL PRIMARY KEY,
      username VARCHAR(50) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
    )
  `);
  console.log("[DB] Table 'admins' vérifiée.");

  // Insert default admin if not exists
  await pool.query(`
    INSERT INTO admins (username, password)
    VALUES ('admin', '$2a$12$J.MdSYTM8J3vv5Zam5pjb.1c/JMOy6Qkleg9iGK8A1BzmNSQnlfQS')
    ON CONFLICT (username) DO NOTHING
  `);
  console.log("[DB] Administrateur par défaut vérifié.");
}

export default pool;
