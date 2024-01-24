import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppDispatch } from "../../app/store";
import axiosApi from "../../axiosApi";
import { Post } from "../../types";

export const fetchPosts = createAsyncThunk<
  Post[],
  undefined,
  { dispatch: AppDispatch }
>("posts/fetchAll", async () => {
  const postsRespone = await axiosApi.get<Post[]>("/posts");
  const posts = postsRespone.data;
  return posts;
});
