import React from 'react';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/Work';
import Paper from '@material-ui/core/Paper';
import Mark from '../../images/mark.jpg'
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Wrapper from "../../components/Wrapper";
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#212121',
    },
    text: {
        color: 'white',
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    // image: {
    //     width: 'flex',
    //     height: 'flex',
    // },
    img: {
        maxWidth: '100%',
        flexDirection: 'column',
        borderRadius: '50%',
        marginTop: '20px'

    },
    card: {
        height: '100%',
        display: 'inline-block',
        flexDirection: 'column',
        margin: 10,
        backgroundColor: '#313131',
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
    text: {
        color: 'white',
    },
}));

export default function ComplexGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return (

        <div className={classes.root}>
            <div className={classes.appBarSpacer} />
            <div className={classes.appBarSpacer} />

            <Container className={classes.cardGrid} maxWidth="md">
                <Grid className={classes.bg} justify="center" container spacing={4}>
                    <Wrapper>
                        <Card className={classes.card} >
                            <Typography className={classes.text} component="h1" variant="h2" align="center" color="white" gutterBottom >
                                Mark Heil
                            </Typography>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom >

                                <img className={classes.img} height="auto" alt="mark" src={Mark} />

                            </Typography>
                            <Typography className={classes.text} variant="h5" align="center" color="white" paragraph>
                                I am a Full Stack Web Developer here in Seattle.
                                Taking my experience of inspecting product for the highest quality, how things look pleasant to the eye,
                                and making a finished well polished product into the world of web development.
                            </Typography>
                        </Card>

                        <Grid item xs={12} sm container className={classes.cardGrid}>
                            <Grid container spacing={spacing} justify="center">
                                <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                                    <Button>
                                        <Link href="https://www.linkedin.com/in/mark-heil-89b82910b/"><LinkedInIcon className={classes.text} fontSize="large" /></Link>
                                    </Button>
                                    <Button>
                                        <Link href="https://github.com/Merkraith"> <GitHubIcon className={classes.text} fontSize="large" /></Link>
                                    </Button>
                                    <Button>
                                        <Link href="https://merkraith.github.io/portfolio/files/mhresume.pdf"><WorkIcon className={classes.text} fontSize="large" /></Link>
                                    </Button>
                                    <Button>
                                        <Link href="mailto:mark.heil1122@gmail.com"> <EmailIcon className={classes.text} fontSize="large" /></Link>
                                    </Button>
                                </ButtonGroup>
                            </Grid>
                        </Grid>
                    </Wrapper>
                </Grid>
            </Container>
        </div >
    );
}
