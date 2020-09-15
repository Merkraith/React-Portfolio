import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        margin: 10,

    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
      height: "100vh",
      overflow: "auto",
    },
    
}));

export default function Album() {
    // const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    // const handleChange = (event) => {
    //     setSpacing(Number(event.target.value));

    return (
        <div>
        <div className={classes.appBarSpacer} />
        <div className={classes.appBarSpacer} />
        <div className={classes.appBarSpacer} />
            <CssBaseline />
            <Typography
                align="center"
                component="h1"
                variant="h2"
                color="white"
            >Group Projects
            </Typography>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid justify="center" container spacing={4}>
                    <Grid align="center" xs={12} sm={6} md={4} >
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Find Next Gig
                                </Typography>
                                <Typography>
                                    My first group project in UW Coding Bootcamp. "Find Next Gig" is a web based application
                                    that allowed the user to type in the name of a band, then it would display information for their next gig.
                                    It would also give a map display and put a pin on the city of the next gig.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Git Repo
                                </Button>
                                <Button size="small" color="primary">
                                    Deployed
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid align="center" xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Watcher
                                </Typography>
                                <Typography>
                                    My second group project in UW Coding Bootcamp. "Watcher" is a neighborhood watch application.
                                    Users can assign themselves a username and post a message into the feed, then the map dynamically posts
                                    the message at their location at that time.
                                </Typography>
                            </CardContent>
                            <CardActions >
                                <Button size="small" color="primary">
                                    Git Repo
                                </Button>
                                <Button size="small" color="primary">
                                    Deployed
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                    <Grid align="center" xs={12} sm={6} md={4}>
                        <Card className={classes.card}>
                            <CardMedia
                                className={classes.cardMedia}
                                image="https://source.unsplash.com/random"
                                title="Image title"
                            />
                            <CardContent className={classes.cardContent}>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Dev Connect
                                </Typography>
                                <Typography>
                                    My third group project at UW Coding Bootcamp. "Dev Connect"  is an application that allows for
                                    developers to connect with each other. The site allows prospective clients to post job ads with specific qualifications.
                                    The application allows for web developers to highlight their skills and connect with other developers to share knowledge
                                    and collaborate with one another.
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <Button size="small" color="primary">
                                    Git Repo
                                </Button>
                                <Button size="small" color="primary">
                                    Deployed
                                </Button>
                            </CardActions>
                        </Card>
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};