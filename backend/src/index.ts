// import "dotenv/config";
// import { drizzle } from "drizzle-orm/node-postgres";
import express from "express";
import authRoutes from "./routes/auth.js";
// const db = drizzle(process.env.DATABASE_URL!);
const app = express();
import { main } from "./models/seed_query.js";
main();

app.use("/auth", authRoutes);
app.listen(process.env.PORT, () => {
  console.log("Server is running on port 3000");
});