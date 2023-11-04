import express from "express";
import {
  addPost,
  FindPost,
  postDetails,
  sameCate,
} from "../controllers/post.js";

const router = express.Router();

router.post("/posts", addPost);
router.post("/profile", FindPost);
router.post("/postDetails", postDetails);
router.post("/same-cat", sameCate);
export default router;
