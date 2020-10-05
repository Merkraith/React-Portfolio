import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
import EmailIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/Work';
import Mark from '../../images/mark.jpg'
import Resume from '../../images/resume.pdf'
import Card from '@material-ui/core/Card';
import Container from '@material-ui/core/Container';
import Wrapper from "../../components/Wrapper";
import Tooltip from '@material-ui/core/Tooltip';
import Bootstrap from '../../images/bootstrap.png';
import Heroku from '../../images/heroku.png';
import Jquery from '../../images/jquery.png';
import Materialize from '../../images/materialize.png';
import MaterialUI from '../../images/materialui.png';
import Mysql from '../../images/mysql.png';
import Node from '../../images/node.png';
import Reactlogo from '../../images/react.png';
import Html from '../../images/html.png';
import Css from '../../images/css.png';
import Javascript from '../../images/javascript.png';



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: '#212121',
    },
    text: {
        color: 'lightblue',
        margin: 20,
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
    img2: {
        maxWidth: '100px',
        maxHeight: '100px',
        width: '100%',
        flexDirection: 'column',
        margin: 5,
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
        backgroundColor: '#212121',
        color: 'white',
    },
    // fab: {
    //     margin: theme.spacing(2),
    //     color: 'lightblue',

    // },
    // absolute: {
    //     position: 'absolute',
    //     bottom: theme.spacing(2),
    //     right: theme.spacing(3),
    // },
}));

export default function ComplexGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return (
        <div className={classes.root}>

            <Container className={classes.cardGrid} maxWidth="md">
                <Grid className={classes.bg} justify="center" container spacing={4}>
                    <Wrapper>
                        <Card className={classes.card} >
                            <Typography className={classes.text} component="h1" variant="h2" align="center" color="lightblue" gutterBottom >
                                Mark Heil
                            </Typography>
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom >
                                <img className={classes.img} height="auto" alt="mark" src={Mark} />
                            </Typography>
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
                            <Grid item xs={12} sm container className={classes.cardGrid}>
                                <Grid container spacing={spacing} justify="center">
                                    <Tooltip title="LinkedIn" aria-label="LinkedIn">
                                        <Link href="https://www.linkedin.com/in/mark-heil-89b82910b/"><LinkedInIcon className={classes.text2} fontSize="large" /></Link>
                                    </Tooltip>
                                    <Tooltip title="GitHub" aria-label="GitHub">
                                        <Link href="https://github.com/Merkraith"> <GitHubIcon className={classes.text2} fontSize="large" /></Link>
                                    </Tooltip>
                                    <Tooltip title="Resume" aria-label="Resume">
                                        <Link href={Resume}><WorkIcon className={classes.text2} fontSize="large" /></Link>
                                    </Tooltip>
                                    <Tooltip title="Email" aria-label="Email">
                                        <Link href="mailto:mark.heil1122@gmail.com"> <EmailIcon className={classes.text2} fontSize="large" /></Link>
                                    </Tooltip>
                                    <Tooltip title="Phone: 414-429-0564" aria-label="Phone">
                                        <PhoneIcon className={classes.text2} fontSize="large" />
                                    </Tooltip>
                                </Grid>
                            </Grid>
                            <div>
                                <footer className={classes.bg}>
                                    <Typography className={classes.text} component="h1" variant="h2" align="center" color="lightblue" gutterBottom >
                                        Technologies
                                    </Typography>
                                    <Wrapper>
                                        <img className={classes.img2} height="auto" alt="html" src={Html} />
                                        <img className={classes.img2} height="auto" alt="css" src={Css} />
                                        <img className={classes.img2} height="auto" alt="javascript" src={Javascript} />
                                        <img className={classes.img2} height="auto" alt="jquery" src={Jquery} />
                                        <img className={classes.img2} height="auto" alt="bootstrap" src={Bootstrap} />
                                        <img className={classes.img2} height="auto" alt="node" src={Node} />
                                        <img className={classes.img2} height="auto" alt="heroku" src={Heroku} />
                                        <img className={classes.img2} height="auto" alt="mysql" src={Mysql} />
                                        <img className={classes.img2} height="auto" alt="materialize" src={Materialize} />
                                        <img className={classes.img2} height="auto" alt="react" src={Reactlogo} />
                                        <img className={classes.img2} height="auto" alt="materialui" src={MaterialUI} />
                                    </Wrapper>
                                </footer>
                            </div>
                        </Card>
                    </Wrapper>
                </Grid>
            </Container>
        </div >
    );
}
