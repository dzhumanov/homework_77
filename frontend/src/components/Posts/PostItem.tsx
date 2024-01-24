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

const ImageCardMedia = styled(CardMedia)({
  height: 0,
  paddingTop: "56.25%",
});

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
      <Card>
        <CardHeader title={author || "Anonymous"} />
        <CardContent>
          <Typography variant="h4">{message}</Typography>
          <ImageCardMedia image={cardImage} title={author ? author : "Anonymous"} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default PostItem;
