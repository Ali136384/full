import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  title: {
    type: String,
  },
  desc: {
    type: String,
  },
  prev: {
    type: String,
  },
  img: {
    type: Buffer,
  },
  createrID: {
    type: String,
  },
  category: {
    type: String,
  },
});

const Posts = new mongoose.model("posts", postSchema);

export default Posts;
