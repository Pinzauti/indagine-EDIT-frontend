/* eslint-disable no-script-url,jsx-a11y/anchor-is-valid */
import React from "react";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import DataToolbar from "./DataToolbar";
import {checkIsActive} from "../../../_helpers";
import {useLocation} from "react-router";

export default function Toolbar() {
	const location = useLocation();

	return (
		<>
			<ul className="sticky-toolbar nav flex-column pl-2 pr-2 pt-3 pb-3 mt-4">
				{!!checkIsActive(location, "/dati") ? (<DataToolbar/>) : ("")}
				<OverlayTrigger
					placement="left"
					overlay={<Tooltip id="layout-tooltip">Condividi su Facebook</Tooltip>}
				>
					<li className="nav-item mb-2" data-placement="left">
						<a
							className="btn btn-sm btn-icon-primary btn-bg-light btn-text-primary btn-hover-primary"
							target="_blank"
							rel="noopener noreferrer"
							href="https://www.facebook.com/sharer.php?u=https://indagine-edit.netlify.app"
						>
							<i className="flaticon-facebook-logo-button"/>
						</a>
					</li>
				</OverlayTrigger>
				<OverlayTrigger
					placement="left"
					overlay={<Tooltip id="layout-tooltip">Condividi su Twitter</Tooltip>}
				>
					<li className="nav-item mb-2" data-placement="left">
						<a
							className="btn btn-sm btn-icon-primary btn-bg-light btn-text-primary btn-hover-primary"
							target="_blank"
							rel="noopener noreferrer"
							href="https://twitter.com/share?url=https://indagine-edit.netlify.app"
						>
							<i className="flaticon-twitter-logo-button"/>
						</a>
					</li>
				</OverlayTrigger>
			</ul>
		</>
	);
}
