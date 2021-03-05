import React from 'react'
import List from "@material-ui/core/List"
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from "@material-ui/icons/Dashboard";
import MapIcon from "@material-ui/icons/Map"
import ListAltIcon from '@material-ui/icons/ListAlt';
import { useTheme, makeStyles } from "@material-ui/core/styles"

const ListItems = () => {
    const theme = useTheme()
    return (
        <>
            <ListItem button>
                <ListItemIcon>
                    <DashboardIcon style={{
                        color: theme.palette.primary.contrastText
                    }} />
                </ListItemIcon>
                <ListItemText primary="Dashboard" />
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <MapIcon style={{
                        color: theme.palette.primary.contrastText
                    }} />
                </ListItemIcon>
                <ListItemText primary="Map View" />
            </ListItem>

            <ListItem button>
                <ListItemIcon>
                    <ListAltIcon style={{
                        color: theme.palette.primary.contrastText
                    }} />
                </ListItemIcon>
                <ListItemText primary="Inventory" />
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