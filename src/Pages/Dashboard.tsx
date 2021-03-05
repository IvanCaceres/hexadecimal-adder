import React, { useState } from 'react'
import clsx from 'clsx'
import {
    makeStyles,
    useTheme,
    Typography,
    Grid,
    Paper,
} from "@material-ui/core"
import {
    AccountBalance,
    ChevronLeft as ChevronLeftIcon,
} from "@material-ui/icons"
import Container from '@material-ui/core/Container';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import NavMenu from "../components/NavMenu"
import DashboardChartSection from "../components/DashboardChartSection"
import Card from "../components/Card"


const drawerWidth = 220;

const useStyles = makeStyles((theme) => ({
    divider: {
        background: theme.palette.primary.contrastText
    },
    toolbarIcon: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: '0 8px',
        ...theme.mixins.toolbar,
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    menuButtonHidden: {
        display: 'none',
    },
    drawerPaperClose: {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
            width: theme.spacing(9),
        },
    },
    appBarSpacer: theme.mixins.toolbar,
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240
    },
    contentContainer: {
        marginTop: `-${theme.spacing(12)}`,
    },
}));

function StatCardIcon(IconComponent: any) {
    return <IconComponent fontSize="large" color="primary" />
}

export default function Dashboard() {
    const classes = useStyles();
    const theme = useTheme();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

    return (
        <div>
            <DashboardChartSection />
            <Container maxWidth={false}
                classes={{
                    root: classes.contentContainer
                }}
            >
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <Grid container spacing={3}
                        >
                            <Grid item xs={6}>
                                <Card title="New Leads" content="3050" icon={() => {
                                    return (
                                        StatCardIcon(AccountBalance)
                                    )
                                }} />
                            </Grid>
                            <Grid item xs={6}>
                                <Card title="New Leads" content="3050" icon={() => {
                                    return (
                                        StatCardIcon(AccountBalance)

                                    )
                                }} />
                                {/* <Card>
                                    <CardContent>
                                        <Typography>This week Sales</Typography>
                                        <Typography>$80,500</Typography>
                                    </CardContent>
                                </Card> */}
                            </Grid>
                            <Grid item xs={6}>
                                <Card title="New Leads" content="3050" icon={() => {
                                    return (
                                        StatCardIcon(AccountBalance)
                                    )
                                }} />
                                {/* <Card>
                                    <CardContent>
                                        <Typography>Inventory Status</Typography>
                                        <Typography>3050</Typography>
                                    </CardContent>
                                </Card> */}
                            </Grid>
                            <Grid item xs={6}>
                                <Card title="New Leads" content="3050" icon={() => {
                                    return (
                                        StatCardIcon(AccountBalance)
                                    )
                                }} />
                                {/* <Card>
                                    <CardContent>
                                        <Typography>Orders to deliver</Typography>
                                        <Typography>305 Orders</Typography>
                                    </CardContent>
                                </Card> */}
                            </Grid>
                            <Grid item xs={12}>
                                <Card title="New Leads" content="3050" icon={() => {
                                    return (
                                        StatCardIcon(AccountBalance)
                                    )
                                }} />
                                {/* <Card>
                                    <CardContent>
                                        <Typography>Top Selling Products</Typography>
                                    </CardContent>
                                </Card> */}
                            </Grid>
                        </Grid>
                    </Grid >
                    <Grid item xs={12} md={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Card title="New Leads" content="3050" icon={() => {
                                    return (
                                        <AccountBalance fontSize="large" />
                                    )
                                }} />
                                {/* <Card>
                                    <CardContent>

                                        <Typography>Grid dude 1</Typography>
                                    </CardContent>
                                </Card> */}
                            </Grid>
                            <Grid item xs={12}>
                                <Card title="New Leads" content="3050" icon={() => {
                                    return (
                                        <AccountBalance fontSize="large" />
                                    )
                                }} />
                                {/* <Card>
                                    <CardContent>
                                        <Typography>Grid dude 1</Typography>
                                    </CardContent>
                                </Card> */}
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid >
            </Container >
            {/* <CssBaseline />
            <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
                <Toolbar className={classes.toolbar}>
                    <IconButton
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
                        Dashboard
            </Typography>
                    <IconButton color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                </Toolbar>
            </AppBar> */}

            {/* <main className={classes.content}> */}
            <div className={classes.appBarSpacer} />
            {/* <Container maxWidth="lg" className={classes.container}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={8} lg={9}>
                            <Paper className={fixedHeightPaper}>
                                <Chart />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}>
                            <Paper className={fixedHeightPaper}>
                                <Deposits />
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                            <Paper className={classes.paper}>
                                <Orders />
                            </Paper>
                        </Grid>
                    </Grid>
                    <Box pt={4}>
                        <Copyright />
                    </Box>
                </Container> */}
            {/* </main> */}
        </div >
    );
}