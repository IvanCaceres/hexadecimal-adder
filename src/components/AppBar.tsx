import React from 'react'
import {
    AppBar,
    Typography,
    makeStyles,
    IconButton,
    Toolbar,
} from '@material-ui/core'
import { AccountCircle, Menu as MenuIcon } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
    rightSection: {
        display: "flex",
        alignItems: "center",
        marginLeft: "auto",
    },
    appBar: {
        width: "auto",
        flexGrow: 1,
    }
}))

export default (props: any) => {
    const classes = useStyles()
    return (
        <AppBar
            position="static"
            classes={{
                root: classes.appBar,
            }}

        >
            <Toolbar>
                <IconButton edge="start" onClick={props.openDrawerCallback}>
                    <MenuIcon style={{ color: "#fff" }}></MenuIcon>
                </IconButton>
                <div className={classes.rightSection}>
                    <Typography>user@user.com</Typography>
                    <IconButton>
                        <AccountCircle style={{ color: "#fff" }} />
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    )
}