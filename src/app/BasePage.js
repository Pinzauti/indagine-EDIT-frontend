import React, {Suspense} from "react";
import {Redirect, Switch} from "react-router-dom";
import {LayoutSplashScreen, ContentRoute} from "../_theme/layout";
import {Stats} from "./pages/Stats";
import Data from "./pages/Data";
import {Project} from "./pages/Project";

export default function BasePage() {
    return (
        <Suspense fallback={<LayoutSplashScreen/>}>
            <Switch>
                {
                    <Redirect exact from="/" to="/progetto"/>
                }
                <ContentRoute path="/progetto" component={Project}/>
                <ContentRoute path="/statistiche" component={Stats}/>
                <ContentRoute path="/dati" component={Data}/>
                <Redirect to="errore"/>
            </Switch>
        </Suspense>
    );
}
