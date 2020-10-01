import React from 'react';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Watcher from '../../components/Watcher';
import DevConnect from '../../components/DevConnect';
import AppBar from '@material-ui/core/AppBar';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box'
import FindNextGig from '../../components/FindNextGig';


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
    bg: {
        backgroundColor: '#333333',
    },
    text: {
        color: 'lightblue',
        flexDirection: "column",
        flex: 1,
    }
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
                className={classes.text}
                align="center"
                component="h3"
                variant="h3"
            >Collaborations
            </Typography>
            <div className={classes.appBarSpacer} />
            <div className={classes.root}>
                <AppBar position="static" color="default">
                    <Tabs
                        className={classes.bg}
                        value={value}
                        onChange={handleChange}
                        indicatorColor="primary"
                        textColor="primary"
                        variant="scrollable"
                        scrollButtons="auto"
                        aria-label="scrollable auto tabs example"
                    >
                        <Tab className={classes.text}
                            label="Find Next Gig" {...a11yProps(0)} />
                        <Tab className={classes.text}
                            label="Watcher" {...a11yProps(1)} />
                        <Tab className={classes.text}
                            label="Dev Connect" {...a11yProps(2)} />
                    </Tabs>
                </AppBar>
                <TabPanel value={value} index={0} className={classes.bg}>
                    <div align="center">
                        <FindNextGig />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={1} className={classes.bg}>
                    <div align="center">
                        <Watcher />
                    </div>
                </TabPanel>
                <TabPanel value={value} index={2} className={classes.bg}>
                    <div align="center">
                        <DevConnect />
                    </div>
                </TabPanel>
            </div>
            <div className={classes.appBarSpacer} />
            <div className={classes.appBarSpacer} />

        </Container>
    );
}