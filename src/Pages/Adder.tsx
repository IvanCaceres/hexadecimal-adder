import React, { useState } from 'react'
import {
    Typography,
    TextField,
    Button,
    makeStyles,
    Container,
    Grid
} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        textAlign: "center"
    },
}))

export default function Adder() {
    const classes = useStyles()

    const [result, setResult] = useState(0)
    const [hex1, setHex1] = useState('')
    const [hex2, setHex2] = useState('')

    function addHexStrings() {
        let num1 = 0
        let num2 = 0
        if (hex1) {
            num1 = parseInt(hex1, 16)
        }
        if (hex2) {
            num2 = parseInt(hex2, 16)
        }
        setResult(num1 + num2)
    }

    function is_hex(string: string) {
        for (const c of string) {
            if ("0123456789ABCDEFabcdef".indexOf(c) === -1) {
                return false;
            }
        }
        return true;
    }

    let errorMsg = "Invalid hex number"
    let hex1Error = ""
    let hex2Error = ""
    if (!is_hex(hex1)) {
        hex1Error = errorMsg
    }
    if (!is_hex(hex2)) {
        hex2Error = errorMsg
    }

    function handleAdd() {
        if (hex1Error) {
            return
        } else if (hex2Error) {
            return
        }
        addHexStrings()
    }

    return (

        <Container
            classes={{ root: classes.root }}
        >
            <Grid container spacing={3}>
                <Grid item xs={12}>
                    <Typography variant="h2">Add Hex Numbers</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField value={hex1} placeholder="Hexadecimal number" error={!!hex1Error} helperText={hex1Error} onChange={(event) => setHex1(event.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <Typography>+</Typography>
                </Grid>
                <Grid item xs={12}>
                    <TextField value={hex2} placeholder="Hexadecimal number" error={!!hex2Error} helperText={hex2Error} onChange={(event) => setHex2(event.target.value)} />
                </Grid>
                <Grid item xs={12}>
                    <Button color="primary" variant="contained" onClick={() => handleAdd()}>Add</Button>
                </Grid>
                <Grid item xs={12}>
                    <Typography>Result</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>Decimal:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>Hex:</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>{result}</Typography>
                </Grid>
                <Grid item xs={6}>
                    <Typography>{result.toString(16)}</Typography>
                </Grid>
            </Grid>
        </Container>
    )
}