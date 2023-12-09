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

export const deletePost = async (req, res) => {
  try {
    await PostsDB.deleteOne({ _id: req.body.postId });
    res.json({ msg: "deleted" });
  } catch (err) {
    console.log(err);
  }
};

export const updatePost = async (req, res) => {
  const updateFields = {};

  if (req.body.title) {
    updateFields.title = req.body.title;
  }
  if (req.body.desc) {
    updateFields.desc = req.body.desc;
  }
  if (req.body.buffer) {
    updateFields.img = req.body.buffer;
  }
  if (req.body.category) {
    updateFields.category = req.body.category;
  }
  if (req.body.createrID) {
    updateFields.createrID = req.body.createrID;
  }
  if (req.body.prev) {
    updateFields.prev = req.body.prev;
  }

  try {
    await PostsDB.updateOne(
      { _id: req.body.id },
      {
        $set: updateFields,
      }
    );
    res.json({
      msg: "Updated successfully!",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const findFav = async (req, res) => {
  try {
    const data = await PostsDB.find({ _id: { $in: req.body.ArrOfFav } });
    res.status(200).json({ msg: "Posts found successfuly !", data });
  } catch (err) {
    console.log(err);
  }
};
