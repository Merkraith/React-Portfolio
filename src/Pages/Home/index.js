import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import '../../App.css';
import Card from 'react-bootstrap/Card';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Wrapper from "../../components/Wrapper";
import Typography from '@material-ui/core/Typography';
// import Seattle from '../../images/seattle.jpg'



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#212121',
    },
    text: {
        color: 'white',
    },
    text2: {
        color: 'lightblue',
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    card: {
        height: '100%',
        backgroundColor: '#212121',
        display: 'inline-block',
        flexDirection: 'column',
        margin: 10,
        padding: 40,
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
    bg: {
        backgroundColor: '#364150',
        color: 'white',
    },
}));

export default function ComplexGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <div className={classes.appBarSpacer} />

            <Container className={classes.cardGrid} maxWidth="md">
                <Grid className={classes.bg} justify="center" container spacing={4}>
                    <Wrapper>
                    <Card className={classes.card} id="homecard" >
                            <Typography className={classes.text} component="h1" variant="h2" align="center" color="white" gutterBottom >
                                Mark Heil Portfolio
                            </Typography>
                            <Typography className={classes.text2} variant="h6" align="center" color="white" paragraph>
                                I am a Full Stack Web Developer in Seattle, WA
                                Taking my experience of print production, how things look pleasant to the eye,
                                and making a finished well polished product into the world of web development. 
                            </Typography>
                        </Card>
                    </Wrapper>
                </Grid>
            </Container>
            <div className={classes.appBarSpacer} />
        </div >
    );
}