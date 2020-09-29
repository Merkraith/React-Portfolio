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
// import Paper from '@material-ui/core/Paper';
import Mark from '../../images/mark.jpg'
import Resume from '../../images/resume.pdf'
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Wrapper from "../../components/Wrapper";
// import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#212121',
    },
    text: {
        color: 'white',
        margin: 10,
    },
    text2: {
        color: 'lightblue',
        marginLeft: 20,
        marginRight: 20,
        align: 'left',
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },

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
        backgroundColor: '#212121',
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
                        <Card className={classes.card} >
                            <Typography className={classes.text} component="h1" variant="h2" align="center" color="white" gutterBottom >
                                Mark Heil
                            </Typography>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom >
                                <img className={classes.img} height="auto" alt="mark" src={Mark} />
                            </Typography>
                            <Grid item xs={12} sm container className={classes.cardGrid}>
                                <Grid container spacing={spacing} justify="center">
                                    <Link href="https://www.linkedin.com/in/mark-heil-89b82910b/"><LinkedInIcon className={classes.text2} fontSize="large" /></Link>
                                    <Link href="https://github.com/Merkraith"> <GitHubIcon className={classes.text2} fontSize="large" /></Link>
                                    <Link href={Resume}><WorkIcon className={classes.text2} fontSize="large" /></Link>
                                    <Link href="mailto:mark.heil1122@gmail.com"> <EmailIcon className={classes.text2} fontSize="large" /></Link>
                                </Grid>
                            </Grid>
                            <Typography className={classes.text2} variant="h6">
                                Before becoming a web developer, I operated in the printing/graphics world where quality was a high standard,
                                and attention to detail was very important.  I developed a very good eye to make a well polished presentable product.
                                These skills carry on as I have become a Full Stack Web Developer, to write quality code and create a polished end product
                                for a user to view.  While working on a team, I make sure communication is important, I like to know that whoever I am
                                working with, we are all on the same page.
                            </Typography>
                            <div className={classes.appBarSpacer} />
                            <Typography className={classes.text2} variant="h6">
                                I have earned a certificate in Full Stack Web Development from the University of Washington.
                                I now have a strong comprehension in: Javascript and React, and have enjoyed learning frameworks such as Bootstrap,
                                Materialize and Material-UI.  In my group projects my role shifted to the Front-End as my work looked clean and polished.
                                My past experience from printing/graphics has helped this as I have become a web developer.
                            </Typography>
                        </Card>
                    </Wrapper>
                </Grid>
            </Container>
        </div >
    );
}
