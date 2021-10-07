import React from "react";

import './Card.css'

const Card = (props) => {
	return (
		<div className="card-container" style={{border: `1.5px solid ${props.color}`}}>
			{props.children}
		</div>
	);
};

export default Card;