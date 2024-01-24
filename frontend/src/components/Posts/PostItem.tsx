import { Card, CardContent, CardHeader, CardMedia, Grid, Typography, styled } from "@mui/material";

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

const PostItem:React.FC<Props> = ({author, message, image}) => {
    return(
        <Grid item sx={{mb: 2}}>
            <Card>
                <CardHeader title={author || "Anonymous"} />
                <CardContent>
                    <Typography variant='h4'>{message}</Typography>
                    {image ? <ImageCardMedia image={image} title={author ? author : "Anonymous"} /> : null}
                </CardContent>
            </Card>
        </Grid>
    )
}

export default PostItem;
