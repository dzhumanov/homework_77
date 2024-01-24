import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  Typography,
  styled,
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
      <Card sx={{ height: "100%" }}>
        <CardHeader title={author || "Anonymous"} />
        <CardContent>
          <Typography variant="h4">{message}</Typography>
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
