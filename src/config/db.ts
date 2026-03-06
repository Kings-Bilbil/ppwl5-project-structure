import { Database } from "bun:sqlite";

// 1. Inisialisasi koneksi database
// Ini akan otomatis membuat file 'database.sqlite' di root folder jika belum ada[cite: 215].
export const db = new Database("database.sqlite", { create: true });

// 2. Fungsi untuk membuat tabel (dipanggil di server.ts)
export const initDB = () => {
  try {
    db.run(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        role TEXT NOT NULL
      )
    `);
    console.log("📦 Database & Table 'users' initialized successfully!");
  } catch (error) {
    console.error("❌ Failed to initialize database:", error);
  }
};