import React from "react";

export default function Movies(props) {
	return (
		<div>
			<h1>Movies</h1>
			<p>{props.title}</p>
			<p>{props.year}</p>
			<img src={props.poster} alt="movie poster" />
			<p>{props.plot}</p>
		</div>
	);
}
