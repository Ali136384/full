import PostsDB from "../models/PostsSchema.js";

export const addPost = async (req, res) => {
  try {
    const post = await new PostsDB({
      title: req.body.title,
      desc: req.body.desc,
      img: req.body.buffer,
      category: req.body.category,
      createrID: req.body.createrID,
      prev: req.body.prev,
    });
    post.save();
    console.log(req.files);
    res.status(200).json({
      msg: "Post Created Successfyuly ! ",
      post,
    });
  } catch (err) {
    console.log(err);
  }
};

export const FindPost = async (req, res) => {
  try {
    const userPosts = await PostsDB.find({ createrID: req.body.creator });
    res.status(200).json({
      userPosts,
    });
  } catch (err) {
    console.log(err);
  }
};

export const postDetails = async (req, res) => {
  try {
    const OnePost = await PostsDB.find({ _id: req.body.id });
    res.status(200).json({ msg: "Post Found", OnePost });
  } catch (err) {
    console.log(err);
  }
};

export const sameCate = async (req, res) => {
  try {
    const categories = await PostsDB.find({ category: req.body.category });
    res
      .status(200)
      .json({ msg: "Those Elements Has The same category title", categories });
  } catch (err) {
    console.log(err);
  }
};
