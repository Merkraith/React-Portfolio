import React from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import PasswordGen from '../../components/PasswordGen';
import FFQuiz from '../../components/FFQuiz';
import WorkdayPlanner from '../../components/WorkdayPlanner';
import WeatherDashboard from '../../components/WeatherDashboard';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box'

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={3}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
        color: 'black',
        textAlign: 'center',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: "100vh",
        overflow: "auto",
    },
}));

export default function ScrollableTabsButtonAuto() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container className={classes.cardGrid} maxWidth="md">
            <div className={classes.appBarSpacer} />
            <div className={classes.appBarSpacer} />
            <Typography
                align="center"
                component="h1"
                variant="h2"
                color="white"

            >Projects
            </Typography>
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab label="1" {...a11yProps(0)} />
                        <Tab label="2" {...a11yProps(1)} />
                        <Tab label="3" {...a11yProps(2)} />
                        <Tab label="4" {...a11yProps(3)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0}>
                    <div align="center">
                        <PasswordGen />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <div align="center">
                        <FFQuiz />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <div align="center">
                        <WorkdayPlanner />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <div align="center">
                        <WeatherDashboard />
                    </div>
                </TabPanel>

            </div>
            <div className={classes.appBarSpacer} />
            <div className={classes.appBarSpacer} />

        </Container>
    );
}