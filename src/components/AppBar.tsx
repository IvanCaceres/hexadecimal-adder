import React from 'react'
import {
    AppBar as MaterialAppBar,
    makeStyles,
    IconButton,
    Toolbar,
} from '@material-ui/core'
import { Menu as MenuIcon } from "@material-ui/icons"

const useStyles = makeStyles((theme) => ({
    appBar: {
        width: "auto",
        flexGrow: 1,
    }
}))

const AppBar = (props: any) => {
    const classes = useStyles()
    return (
        <MaterialAppBar
            position="static"
            classes={{
                root: classes.appBar,
            }}

        >
            <Toolbar>
                <IconButton edge="start" onClick={props.openDrawerCallback}>
                    <MenuIcon style={{ color: "#fff" }}></MenuIcon>
                </IconButton>
            </Toolbar>
        </MaterialAppBar>
    )
}

export default AppBar