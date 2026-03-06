import { Elysia } from "elysia";
import { staticPlugin } from "@elysiajs/static";
import { userRoutes } from "./routes/user.route";

export const app = new Elysia()
  .use(
    // Plugin agar file CSS dari folder public dapat diakses untuk SSR
    staticPlugin({
      assets: "public",
      prefix: "/"
    })
  )
  // Mendaftarkan routes user ke dalam aplikasi utama
  .use(userRoutes);