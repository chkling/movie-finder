import React from "react";

export default function Movies(props) {
	return (
		<div>
			<p>{props.title}</p>
			<p>{props.year}</p>
			<img src={props.poster} />
			<p>{props.plot}</p>
		</div>
	);
}
