import { CircularProgress, Grid } from "@mui/material";
import PostForm from "./components/PostForm/PostForm";
import { useAppDispatch, useAppSelector } from "./app/Hooks";
import { postLoading, selectPosts } from "./store/posts/postsSlice";
import PostItem from "./components/Posts/PostItem";
import { useEffect } from "react";
import { fetchPosts } from "./store/posts/postsThunks";

function App() {
  const posts = useAppSelector(selectPosts);
  const loading = useAppSelector(postLoading);
  const dispatch = useAppDispatch();

  let postArea: React.ReactNode = <CircularProgress />;

  if (!loading && posts) {
    postArea = posts.map((post) => (
      <PostItem
        id={post.id}
        key={post.id}
        author={post.author}
        message={post.message}
        image={post.image}
      />
    ));
  }

  useEffect(() => {
    void dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Grid
      container
      direction="column"
      spacing={2}
      sx={{ width: "50%", marginX: "auto" }}
    >
      <Grid item xs={6}>
        <PostForm />
      </Grid>
      <Grid item xs container direction="column">
        {postArea}
      </Grid>
    </Grid>
  );
}

export default App;
