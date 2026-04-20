import jwt, { type SignOptions } from "jsonwebtoken";

// JWT secret from environment, with a default for development only
export const JWT_SECRET: string =
  process.env.JWT_SECRET || "umbrella-jwt-secret-change-in-production";

// Generate a signed JWT token
export function generateToken(
  payload: object,
  expiresIn: string = "24h"
): string {
  const options: SignOptions = { expiresIn: expiresIn as any };
  return jwt.sign(payload, JWT_SECRET, options);
}

// Verify and decode a JWT token
export function verifyToken(token: string): jwt.JwtPayload {
  return jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;
}
