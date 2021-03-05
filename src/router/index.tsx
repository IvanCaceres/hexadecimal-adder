import React from 'react'
import {
    BrowserRouter,
    Switch,
    Route,
} from "react-router-dom"
import Adder from "../Pages/Adder"
import Layout from "../Layout/Layout"

export default function Router() {
    return (
        <BrowserRouter>
            <Layout>
                <Switch>
                    <Route exact path="/">
                        <Adder />
                    </Route>
                </Switch>
            </Layout>
        </BrowserRouter>
    )
}