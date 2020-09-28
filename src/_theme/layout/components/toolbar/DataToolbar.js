import React from "react";
import {OverlayTrigger, Tooltip} from "react-bootstrap";
import Key from "./Key";

export default function DataToolbar() {
	const [show, setShow] = React.useState(false);

	function handleClose() {
		setShow(false);
	}

	return (
		<>
			<OverlayTrigger
				placement="left"
				overlay={<Tooltip id="documentations-tooltip">Legenda</Tooltip>}
			>
				<li className="nav-item mb-2" data-placement="left">
						<span
							className="btn btn-sm btn-icon-secondary btn-bg-light btn-text-secondary btn-hover-secondary"
							rel="noopener noreferrer"
							onClick={() => setShow(true)}
						>
							<i className="flaticon2-open-text-book"/>
						</span>
				</li>
			</OverlayTrigger>
			<Key show={show} handleClose={handleClose.bind(this)}/>
		</>
	);
}
