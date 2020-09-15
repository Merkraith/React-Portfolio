import React from 'react';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import WorkIcon from '@material-ui/icons/Work';
import Paper from '@material-ui/core/Paper';
import ButtonBase from '@material-ui/core/ButtonBase';
import Mark from '../../images/mark.jpg'

// const useStyles = makeStyles((theme) => ({
//     icon: {
//         marginRight: theme.spacing(2),
//     },
//     heroContent: {
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing(8, 0, 6),
//     },
//     heroButtons: {
//         marginTop: theme.spacing(4),
//     },
//     cardGrid: {
//         paddingTop: theme.spacing(8),
//         paddingBottom: theme.spacing(8),
//     },
//     card: {
//         height: '100%',
//         display: 'flex',
//         flexDirection: 'column',
//         margin: 10,

//     },
//     cardMedia: {
//         paddingTop: '56.25%', // 16:9
//     },
//     cardContent: {
//         flexGrow: 1,
//     },
//     footer: {
//         backgroundColor: theme.palette.background.paper,
//         padding: theme.spacing(6),
//     },
// }));


// export default function Album() {
//     const [spacing, setSpacing] = React.useState(2);
//     const classes = useStyles();

//     const handleChange = (event) => {
//         setSpacing(Number(event.target.value));
//     };
//     return (

//         <div className={classes.heroContent}>
//             <Container maxWidth="sm">
//                 <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
//                     Mark Heil
//                 </Typography>
//                 <Typography variant="h5" align="center" color="textSecondary" paragraph>
//                     I am a Full Stack Web Developer here in Seattle.
//                     Taking my experience of inspecting product for the highest quality, how things look pleasant to the eye,
//                     and making a finished well polished product into the world of web development.
//                 </Typography>
//                 <div className={classes.heroButtons}>
//                     <Grid container spacing={spacing} justify="center">
//                         <Grid item>
//                             <Button>
//                                 <Link href="https://www.linkedin.com/in/mark-heil-89b82910b/"><LinkedInIcon />LinkedIN</Link>
//                             </Button>
//                         </Grid>
//                         <Grid item>
//                             <Button>
//                                 <Link href="https://github.com/Merkraith"> <GitHubIcon />GitHub</Link>
//                             </Button>
//                         </Grid>
//                         <Grid item>
//                             <Button>
//                                 <Link href="https://merkraith.github.io/portfolio/files/mhresume.pdf"><WorkIcon />Resume</Link>
//                             </Button>
//                         </Grid>
//                         <Grid item>
//                             <Button>
//                                 <Link href="mailto:mark.heil1122@gmail.com"> <EmailIcon />Email</Link>
//                             </Button>
//                         </Grid>
//                     </Grid>
//                 </div>
//             </Container>
//         </div>
//     );
// }

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        margin: 'auto',
        maxWidth: 500,
    },
    image: {
        width: 250,
        height: 250,
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
    },
}));

export default function ComplexGrid() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container align="center" spacing={2}>
                    <Grid item align="center">

                        <img className={classes.img} alt="mark" src={Mark} />

                    </Grid>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={2}>
                        <Grid item xs>

                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                Mark Heil
                            </Typography>

                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                I am a Full Stack Web Developer here in Seattle.
                                Taking my experience of inspecting product for the highest quality, how things look pleasant to the eye,
                                and making a finished well polished product into the world of web development.
                            </Typography>
                            <Grid container spacing={spacing} justify="center">
                                <Grid item>
                                    <Button>
                                        <Link href="https://www.linkedin.com/in/mark-heil-89b82910b/"><LinkedInIcon />LinkedIN</Link>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button>
                                        <Link href="https://github.com/Merkraith"> <GitHubIcon />GitHub</Link>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button>
                                        <Link href="https://merkraith.github.io/portfolio/files/mhresume.pdf"><WorkIcon />Resume</Link>
                                    </Button>
                                </Grid>
                                <Grid item>
                                    <Button>
                                        <Link href="mailto:mark.heil1122@gmail.com"> <EmailIcon />Email</Link>
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div >
    );
}
