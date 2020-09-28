/**
 * Create React App entry point. This and `public/index.html` files can not be
 * changed or moved.
 */
import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import React from "react";
import ReactDOM from "react-dom";
import App from "./app/App";
import "./index.scss";
import "./_theme/_assets/plugins/keenthemes-icons/font/ki.css";
import "socicon/css/socicon.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./_theme/_assets/plugins/flaticon/flaticon.css";
import "./_theme/_assets/plugins/flaticon2/flaticon.css";
import {
  ThemeLayoutProvider,
  ThemeSplashScreenProvider,
  ThemeSubheaderProvider
} from "./_theme/layout";

const { PUBLIC_URL } = process.env;

ReactDOM.render(
    <ThemeLayoutProvider>
      <ThemeSubheaderProvider>
        <ThemeSplashScreenProvider>
          <App basename={PUBLIC_URL} />
        </ThemeSplashScreenProvider>
      </ThemeSubheaderProvider>
    </ThemeLayoutProvider>,
  document.getElementById("root")
);
