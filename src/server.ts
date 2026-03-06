import { app } from "./app";
import { initDB } from "./config/db";
import { env } from "./config/env"; // Asumsi Anda memiliki file konfigurasi environment

// 1. Inisialisasi Database
initDB();

// 2. Jalankan Server
app.listen(env.PORT, () => {
  console.log(`🚀 Server running at http://localhost:${env.PORT}`);
});