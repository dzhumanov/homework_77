import { Card, CardContent, CardHeader, CardMedia, Grid, Typography, styled } from "@mui/material";

const ImageCardMedia = styled(CardMedia)({
    height: 0,
    paddingTop: "56.25%",
  });

interface Props {
    author: string;
    message: string;
    image: string | null;
}

const PostItem:React.FC<Props> = ({author, message, image}) => {
    return(
        <Grid item>
            <Card>
                <CardHeader title={author} />
                <CardContent>
                    <Typography variant='h4'>{message}</Typography>
                    {image ? <ImageCardMedia image={image} title={author} /> : null}
                </CardContent>
            </Card>
        </Grid>
    )
}

export default PostItem;
