import { useState } from "react";
import AddMovieForm from "./components/AddMovieForm";
import "./App.css";
import Movies from "./components/Movies";
import Button from "./components/Button";

const App = () => {
	const [movies, setMovies] = useState([]);

	//add movie
	const addMovie = (name, rating) => {
		let id = movies.length + 1;
		let newMovie = { id: id, title: name, rating: rating };
		setMovies([...movies, newMovie]);
	};

	//delete movie
	const deleteMovie = (id) => {
		setMovies(movies.filter((item) => item.id !== id));
	};

	const sortByAlphabet = () => {
		console.log("i am sorting alphabetically", movies);
		let copy = [...movies];
		copy.sort(function (a, b) {
			var nameA = a.title.toUpperCase();
			var nameB = b.title.toUpperCase();
			if (nameA < nameB) {
				return -1;
			}
			if (nameA > nameB) {
				return 1;
			}

			return 0;
		});

		setMovies(copy);
	};
	const sortyByRating = () => {
		console.log("i am sorting by rating");
		let copy = [...movies];
		copy.sort(function (a, b) {
			return a.rating - b.rating;
		});
		setMovies(copy);
	};

	return (
		<div className="container">
			<AddMovieForm onAddMovie={addMovie} />
			<Button onClick={sortByAlphabet} title="sort Alphabetically" />
			<Button onClick={sortyByRating} title="sort By Rating" />

			<Movies movies={movies} onDelete={deleteMovie} />
		</div>
	);
};

export default App;
