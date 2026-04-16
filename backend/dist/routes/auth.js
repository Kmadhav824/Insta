import { Router } from "express";
const router = Router();
router.get("/users", (req, res) => {
    res.json({ message: "Hello World" });
});
router.post("/register", async (req, res) => {
});
export default router;
//# sourceMappingURL=auth.js.map