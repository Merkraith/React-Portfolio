import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PasswordGenCard from '../../components/PasswordGenCard';
import QuizCard from '../../components/QuizCard';
import WorkdayPlannerCard from '../../components/WorkdayPlannerCard';
import WeatherDashboardCard from '../../components/WeatherDashboardCard';
import Typography from '@material-ui/core/Typography';
import GitHubIcon from '@material-ui/icons/GitHub';
import DvrIcon from '@material-ui/icons/Dvr';





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
            <CssBaseline />
            <Typography
                align="center"
                component="h1"
                variant="h2"
                color="white"
            >
                Projects
            </Typography>
            <Container className={classes.cardGrid} maxWidth="md">
                <Grid justify="center" container spacing={4}>
                    <Grid align="center" xs={12} sm={6} md={4}>
                        <PasswordGenCard />
                    </Grid>
                    <Grid align="center" xs={12} sm={6} md={4}>
                        <QuizCard />
                    </Grid>
                </Grid>
                <Grid justify="center" container spacing={4}>
                    <Grid align="center" xs={12} sm={6} md={4}>
                        <WorkdayPlannerCard />
                    </Grid>
                    <Grid align="center" xs={12} sm={6} md={4}>
                        <WeatherDashboardCard />
                    </Grid>
                </Grid>
            </Container>
        </div>
    );
};