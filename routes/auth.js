import express from "express";
import { AuthFun, LoginFunc, addFavorite } from "../controllers/auth.js";
const router = express.Router();

router.post("/register", AuthFun);
router.post("/login", LoginFunc);
router.post("/add-fav", addFavorite);
export default router;
