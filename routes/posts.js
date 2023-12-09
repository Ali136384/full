import express from "express";
import {
  addPost,
  deletePost,
  findFav,
  FindPost,
  postDetails,
  sameCate,
  updatePost,
} from "../controllers/post.js";

const router = express.Router();

router.post("/posts", addPost);
router.post("/profile", FindPost);
router.post("/postDetails", postDetails);
router.post("/same-cat", sameCate);
router.post("/delete-post", deletePost);
router.post("/update-post", updatePost);
router.post("/favo", findFav);
export default router;
