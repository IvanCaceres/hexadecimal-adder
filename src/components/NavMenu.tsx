import React from 'react'
import { useHistory } from 'react-router-dom'
import List from "@material-ui/core/List"
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from "@material-ui/icons/Dashboard";
import { useTheme } from "@material-ui/core/styles"

const ListItems = () => {
    const theme = useTheme()
    let history = useHistory()

    return (
        <>
            <ListItem button onClick={() => history.push("/")}>
                <ListItemIcon>
                    <DashboardIcon style={{
                        color: theme.palette.primary.contrastText
                    }} />
                </ListItemIcon>
                <ListItemText primary="Add Hex Numbers" />
            </ListItem>
        </>
    )
}

const NavMenu = () => {
    return (
        <List>
            <ListItems />
        </List>
    )
}

export default NavMenu