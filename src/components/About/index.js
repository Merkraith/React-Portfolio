import React from 'react';
// import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
// import CameraIcon from '@material-ui/icons/PhotoCamera';

import Grid from '@material-ui/core/Grid';
// import Paper from '@material-ui/core/Paper';
// import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';

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
}));


export default function Album() {
    const [spacing, setSpacing] = React.useState(2);
    const classes = useStyles();

    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };
    return (

        <div className={classes.heroContent}>
            <Container maxWidth="sm">
                <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                    Mark Heil
                </Typography>
                <Typography variant="h5" align="center" color="textSecondary" paragraph>
                    I am a Full Stack Web Developer here in Seattle.
                    Taking my experience of inspecting product for the highest quality, how things look pleasant to the eye,
                    and making a finished well polished product into the world of web development.
                </Typography>
                <div className={classes.heroButtons}>
                    <Grid container spacing={spacing} justify="center">
                        <Grid item>
                            <Button variant="contained" color="primary">
                                LinkedIN
                        </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Github
                        </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Resume
                        </Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="primary">
                                Email
                        </Button>
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </div>
    );
}
