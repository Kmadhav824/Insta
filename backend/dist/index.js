import express from "express";
import authRoutes from "./routes/auth.js";
const app = express();
app.use("/auth", authRoutes);
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
//# sourceMappingURL=index.js.map