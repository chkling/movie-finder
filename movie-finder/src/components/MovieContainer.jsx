import React, { useState, useEffect } from "react";
import Movies from "./Movies";

export default function MovieContainer() {
	const [movies, setMovies] = useState([]);
	const [title, setTitle] = useState("");
	const [year, setYear] = useState("");
	const [poster, setPoster] = useState("");
	const [plot, setPlot] = useState("");

	const getMovies = async () => {
		// `http://www.omdbapi.com/?t=${title}&apikey=802325f4`
		// "http://www.omdbapi.com/?i=tt3896198&apikey=802325f4"
		const response = await fetch(
			`http://www.omdbapi.com/?t=${title}&apikey=802325f4`,
			{
				headers: { Accept: "application/json" },
			}
		);
		const json = await response.json();
		console.log(json);
		setTitle(json.Title);
		setYear(json.Year);
		setPoster(json.Poster);
		setPlot(json.Plot);
		// console.log(title, year, poster);
		// setMovies([...movies, json.Title]);
		// movies.push(json.Title, json.Year, json.Poster);
	};

	// useEffect(() => {
	// 	getMovies();
	// }, []);

	const onSubmit = (e) => {
		e.preventDefault();
		getMovies();
	};

	return (
		<div>
			<h1>Movie Container</h1>
			<form onSubmit={onSubmit}>
				<input
					onChange={(e) => setTitle(e.target.value)}
					value={title}
					type="text"
					placeholder="Movie Title"
				/>
				<input type="button" type="submit" />
			</form>
			<Movies
				movies={movies}
				setMovies={setMovies}
				title={title}
				setTitles={setTitle}
				year={year}
				setYear={setYear}
				poster={poster}
				setPoster={setPoster}
				plot={plot}
				setPlot={setPlot}
			/>
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
