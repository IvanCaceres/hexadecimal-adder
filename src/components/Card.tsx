import React from 'react'
import {
    Card as MaterialCard,
    CardContent,
    Grid,
    Typography,
    makeStyles
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    cardContentRoot: {},
    cardRoot: {
        '&>$cardContentRoot': {
            padding: theme.spacing(3)
        }
    },
    cardGrid: {
        alignItems: "center"
    },
    iconItem: {
        display: "flex"
    }
}))

const Card = (props: any) => {
    const classes = useStyles()

    return (
        <MaterialCard raised classes={{ root: classes.cardRoot }}>
            <CardContent classes={{ root: classes.cardContentRoot }}>
                <Grid
                    container
                    classes={{
                        root: classes.cardGrid
                    }}
                >
                    <Grid item xs={1} classes={{ root: classes.iconItem }}>
                        <props.icon fontSize="large" />
                    </Grid>
                    <Grid item xs={9}>
                        <div>
                            <Typography variant="caption" >{props.title}</Typography>
                        </div>
                        <div>
                            <Typography variant="highlight" color="primary">{props.content}</Typography>
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </MaterialCard>
    )
}

export default Card