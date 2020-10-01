import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import PWGen from '../../images/pwgen.jpg';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import DvrIcon from '@material-ui/icons/Dvr';


const useStyles = makeStyles({
    root: {
        maxWidth: 450,
        margin: 20,
        // paddingTop: 20,
        },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        // margin: 10,

    },
});

export default function ImgMediaCard() {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    alt="PWGen"
                    height="140"
                    image={PWGen}
                    title="Contemplative Reptile"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                        Password Generator
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                        The user can set the desired length of your password ,
                        then choose yes or no on if you want UPPERCASE characters, lowercase characters, numb3rs, or Symbols.
                 </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
            <Button size="small" color="primary">
          <Link href="https://github.com/Merkraith/The-Amazing-Password-Generator"> <GitHubIcon style={{ color: "#212121" }} className={classes.text} fontSize="large" /></Link>
        </Button>
        <Button size="small" color="primary">
          <Link href="https://merkraith.github.io/The-Amazing-Password-Generator/"> <DvrIcon style={{ color: "#212121" }} className={classes.text} fontSize="large" /></Link>
        </Button>
            </CardActions>
        </Card>
    );
}