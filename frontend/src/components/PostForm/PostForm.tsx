import { Grid, TextField } from "@mui/material";
import { useState } from "react";
import { PostMutation } from "../../types";
import FileInput from "../UI/FileInput/FileInput";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
import { useAppDispatch, useAppSelector } from "../../app/Hooks";
import { createPost, fetchPosts } from "../../store/posts/postsThunks";
import { postLoading } from "../../store/posts/postsSlice";

const PostForm = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(postLoading);

  const [state, setState] = useState<PostMutation>({
    author: "",
    message: "",
    image: null,
  });

  const inputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const fileInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    console.log("fileInputChangeHandler", name, files);
    if (files) {
      setState((prevState) => ({
        ...prevState,
        [name]: files[0],
      }));
    }
  };

  const handleSubmit = async (e:React.FormEvent) => {
    e.preventDefault();
    await dispatch(createPost(state));
    await dispatch(fetchPosts);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Grid container direction="column" spacing={2}>
        <Grid item xs={6}>
          <TextField
            id="author"
            label="Author"
            name="author"
            value={state.author}
            onChange={inputChangeHandler}
            fullWidth
          />
        </Grid>
        <Grid item xs={6}>
          <TextField
            id="message"
            label="Message"
            name="message"
            value={state.message}
            onChange={inputChangeHandler}
            fullWidth
            required
          />
        </Grid>
        <Grid item xs={6}>
          <FileInput
            onChange={fileInputChangeHandler}
            name="image"
            label="Product image"
          />
        </Grid>
        <Grid item xs={6}>
          <LoadingButton
            type="submit"
            color="primary"
            variant="contained"
            disabled={isLoading}
            loading={isLoading}
            loadingPosition="start"
            startIcon={<SaveIcon />}
          >
            Post!
          </LoadingButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default PostForm;
