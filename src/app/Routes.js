import React from "react";
import { Switch, Route } from "react-router-dom";
import {Layout} from "../_theme/layout";
import BasePage from "./BasePage";
import ErrorsPage from "../errors/Error";

export function Routes() {
    return (
        <Switch>
            <Route path="/errore" component={ErrorsPage}/>
                <Layout>
                    <BasePage/>
                </Layout>
        </Switch>
    );
}
