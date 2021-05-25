import React, { useState, useEffect } from "react";
import Movies from "./Movies";

export default function MovieContainer() {
	const [movies, setMovies] = useState([]);
	const [search, setSearch] = useState("");
	const [title, setTitle] = useState("");
	const [year, setYear] = useState("");
	const [poster, setPoster] = useState("");
	const [plot, setPlot] = useState("");

	const getMovies = async () => {
		const response = await fetch(
			`http://www.omdbapi.com/?s=${search}&apikey=802325f4`,
			{
				headers: { Accept: "application/json" },
			}
		);
		const json = await response.json();
		console.log(json);
		// setTitle(json.Title);
		// setYear(json.Year);
		// setPoster(json.Poster);
		// setPlot(json.Plot);
		setMovies(json.Search);
		// setMovies([...movies, json.Title]);
		// movies.push(json.Title, json.Year, json.Poster);
	};

	useEffect(() => {
		// getMovies();
	}, []);

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
					<Movies title={movie.Title} poster={movie.Poster} />
				))}
			</div>

			{/* <ul>
				{movies.length === 0 ? (
					<p>""</p>
				) : (
					movies.map((moviesFromCache) => (
						<Movies movies={moviesFromCache} setMovies={setMovies} />
					))
				)}
			</ul>
			<button
				onClick={() => {
					getMovies();
				}}
			>
				New Movie
			</button> */}
		</div>
	);
}
