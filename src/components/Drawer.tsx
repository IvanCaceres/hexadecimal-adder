import React from "react"
import clsx from "clsx"
import {
    Drawer as MaterialDrawer,
    Divider,
    IconButton,
    makeStyles,
    useTheme
} from "@material-ui/core"
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft"
import deepPurple from '@material-ui/core/colors/deepPurple';
import indigo from "@material-ui/core/colors/indigo"
import NavMenu from "../components/NavMenu"

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '&>$drawerPaper': {
            backgroundColor: theme.palette.drawer.main,
            color: theme.palette.primary.contrastText,
            whiteSpace: 'nowrap',
            width: drawerWidth,
            // transition: theme.transitions.create('width', {
            //     easing: theme.transitions.easing.sharp,
            //     duration: 0,
            // }),
        },
    },
    drawerPaper: {},
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
    drawer: {
        position: 'relative',
        width: drawerWidth
    },
    drawerClose: {
        overflowX: 'hidden',
        // transition: theme.transitions.create('width', {
        //     easing: theme.transitions.easing.sharp,
        //     duration: theme.transitions.duration.leavingScreen,
        // }),
        width: 0,
        [theme.breakpoints.up('sm')]: {
            width: 0,
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
    }
}));

const Drawer = (props: any) => {
    const classes = useStyles()
    const theme = useTheme()
    return (
        <MaterialDrawer
            variant="persistent"
            classes={{
                root: clsx(classes.root, classes.drawer, !props.open && classes.drawerClose),
                paper: classes.drawerPaper
            }}
            open={props.open}
            transitionDuration={40}
        >
            <div className={classes.toolbarIcon}>
                <IconButton onClick={props.closeDrawerCallback}>
                    <ChevronLeftIcon style={{ color: theme.palette.primary.contrastText }} />
                </IconButton>
            </div>
            <Divider
                classes={{
                    root: classes.divider
                }}
            />
            <NavMenu />
        </MaterialDrawer>
    )

}

export default Drawer