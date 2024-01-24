import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { apiURL } from "../../constants";

interface Props {
  id: string;
  author: string | null;
  message: string;
  image: string | null;
}

const PostItem: React.FC<Props> = ({ author, message, image }) => {
  let cardImage;

  if (image) {
    cardImage = apiURL + "/images/" + image;
  }

  return (
    <Grid item sx={{ mb: 2 }}>
      <Card
        sx={{ height: "100%", border: "1px solid #2F3336", background: "#000" }}
      >
        <CardHeader
          title={author || "Anonymous"}
          sx={{pb:"0"}}
          titleTypographyProps={{
            sx: {
              color: "#fff",
              fontWeight: "bold",
              fontSize: "35px",
            },
          }}
        />
        <CardContent>
          <Typography variant="h5" color="#fff" sx={{mb:2}}>
            {message}
          </Typography>
          {image ? (
            <CardMedia
              component="img"
              sx={{
                display: "block",
                width: "100%",
                height: "auto",
                maxWidth: "650px",
                mx: "auto",
              }}
              image={cardImage}
              title={author ? author : "Anonymous"}
            />
          ) : null}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PostItem;
