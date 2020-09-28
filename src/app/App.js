/**
 * Entry application component used to compose providers and render Routes.
 * */

import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Routes } from "../app/Routes";
import { LayoutSplashScreen, MaterialThemeProvider } from "../_theme/layout";

export default function App({ basename }) {
  return (
       <React.Suspense fallback={<LayoutSplashScreen />}>
          {/* Override `basename` (e.g: `homepage` in `package.json`) */}
          <BrowserRouter basename={basename}>
            {/*This library only returns the location that has been active before the recent location change in the current window lifetime.*/}
            <MaterialThemeProvider>
              {/* Provide `react-intl` context synchronized with Redux state.  */}
                {/* Render routes with provided `Layout`. */}
                <Routes />
            </MaterialThemeProvider>
          </BrowserRouter>
        </React.Suspense>
  );
}
