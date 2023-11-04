import express from "express";
import { AuthFun, LoginFunc } from "../controllers/auth.js";
const router = express.Router();

router.post("/register", AuthFun);
router.post("/login", LoginFunc);

export default router;
