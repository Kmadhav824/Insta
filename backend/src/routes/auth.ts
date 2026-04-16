import { Router, Request, Response} from "express";


const router = Router();
router.get("/users", (req: Request, res: Response) => {
  res.json({ message: "Hello World" });
});
router.post("/register", async(req,res) => {
  try {
    const { username, email, password } = req.body;

});

router.post("/login", async(req,res) => {
  try {
    const { email, password } = req.body;
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
});
export default router;