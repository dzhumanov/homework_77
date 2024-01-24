import crypto from "crypto";
import { Router } from "express";
import { Post, PostWithoutId } from "../types";
import fileDb from "../fileDb";
import { imagesUpload } from "../multer";
const postsRouter = Router();

const posts: Post[] = [];

postsRouter.get("/", async (req, res) => {
  const posts = await fileDb.getItems();
  res.send(posts);
});

postsRouter.post("/", imagesUpload.single("image"), async (req, res) => {
  const post: PostWithoutId = {
    author: req.body.author ? req.body.author : null,
    message: req.body.message,
    image: req.file ? req.file.filename : null,
  };

  const newPost = await fileDb.addItem(post);
  res.send(newPost);
});

export default postsRouter;
