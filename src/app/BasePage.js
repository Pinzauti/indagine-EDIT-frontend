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
                    <Redirect exact from="/" to="/dati"/>
                }
                <ContentRoute path="/dati" component={Data}/>
                <ContentRoute path="/statistiche" component={Stats}/>
                <ContentRoute path="/progetto" component={Project}/>
                <Redirect to="errore"/>
            </Switch>
        </Suspense>
    );
}
