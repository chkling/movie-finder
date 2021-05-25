import React from "react";

export default function Movies(props) {
	return (
		<div class="movie-card">
			<p>{props.title}</p>
			<p>{props.year}</p>
			<img src={props.poster} />
			<p>{props.plot}</p>
		</div>
	);
}
