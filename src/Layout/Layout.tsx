import React from 'react'
import {
    makeStyles,
    Container,
} from '@material-ui/core'
import AppBar from "../components/AppBar"
import Drawer from "../components/Drawer"

const useStyles = makeStyles((theme) => ({
    appContainer: {
        display: "flex",
        flex: 1
    },
}))

const Layout = (props: any) => {
    const { children } = props
    const classes = useStyles()
    const [open, setOpen] = React.useState(true);

    return (
        <div className={classes.appContainer}>
            <Drawer open={open} closeDrawerCallback={() => {
                setOpen(false)
            }} />
            <Container disableGutters maxWidth={false} style={{ overflow: "hidden" }}>
                <AppBar openDrawerCallback={() => {
                    setOpen(true)
                }} />
                {children}
            </Container>
        </div>
    )
}

export default Layout