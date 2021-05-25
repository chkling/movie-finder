import React from "react";

export default function Movies(props) {
	return (
		<div class="movie-card">
			<img class="poster-image" src={props.poster} alt="" />
			<h3 class="card-title">
				{props.title} ({props.year})
			</h3>
		</div>
	);
}
