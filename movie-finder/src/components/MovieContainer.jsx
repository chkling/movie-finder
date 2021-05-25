import React, { useState, useEffect } from "react";
import Movies from "./Movies";

export default function MovieContainer() {
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState("");

	const getMovies = async () => {
		const response = await fetch(
			`http://www.omdbapi.com/?s=${search}&apikey=802325f4`,
			{
				headers: { Accept: "application/json" },
			}
		);
		const json = await response.json();
		console.log(json);
		setMovies(json.Search);
	};

	useEffect(() => {}, []);

	const onSubmit = (e) => {
		e.preventDefault();
		getMovies();
	};

	return (
		<div id="main-container">
			<div class="search-container">
				<h1 id="main-header">Movie Hunter</h1>
				<form class="search-form" onSubmit={onSubmit}>
					<input
						class="movie-search-input"
						onChange={(e) => setSearch(e.target.value)}
						value={search}
						type="text"
						placeholder="Hunt by Movie Title"
					/>
					<input
						class="movie-search-button"
						type="button"
						type="submit"
						value="Search"
					/>
				</form>
			</div>
			<div class="movie-container">
				{movies.map((movie) => (
					<Movies title={movie.Title} poster={movie.Poster} year={movie.Year} />
				))}
			</div>
		</div>
	);
}
