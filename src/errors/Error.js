import React from "react";
import {toAbsoluteUrl} from "../_theme/_helpers";
import "../_theme/_assets/sass/pages/error/error-3.scss";

export default function Error() {
  return (
    <div className="d-flex flex-column flex-root">
      <div
        className="error error-3 d-flex flex-row-fluid bgi-size-cover bgi-position-center"
        style={{
          backgroundImage: `url(${toAbsoluteUrl("/media/error.jpg")})`
        }}
      >
        <div className="px-10 px-md-30 py-10 py-md-0 d-flex flex-column justify-content-md-center">
          <h1 className="error-title text-stroke text-transparent">404</h1>
          <p className="display-4 font-weight-boldest text-white mb-12">
            Qualcosa è andato storto
          </p>
          <p className="font-size-h1 font-weight-boldest text-dark-75">
            La pagina che stai cercando non esiste.
          </p>
          <p className="font-size-h4 line-height-md">
            È possibile che il link che hai seguito sia corrotto
            <br />
            o che la pagina sia stata rimossa.
          </p>
        </div>
      </div>
    </div>
  );
}
