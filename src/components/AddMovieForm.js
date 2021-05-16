import { useState } from "react";

const AddMovieForm = ({ onAddMovie }) => {
	const clicked = (e) => {
		e.preventDefault();
		if (name.length === 0 || rating === 0) {
			alert("cannot be empty");
			return;
		}
		onAddMovie(name, rating);
		setName("");
		setRating(0);
	};

	const [name, setName] = useState("");
	const [rating, setRating] = useState(0);

	return (
		<form className="movie_form">
			<label htmlFor="movie">Title: </label>
			<input
				type="text"
				name="movie"
				id="movie"
				value={name}
				onChange={(e) => setName(e.target.value)}
			/>

			<label htmlFor="star">Rating: </label>
			<select
				name="star"
				id="star"
				value={rating}
				onChange={(e) => {
					setRating(e.target.value);
				}}
			>
				<option value="0">Choose a rating</option>
				<option value="1">1 star</option>
				<option value="2">2 star</option>
				<option value="3">3 star</option>
				<option value="4">4 star</option>
				<option value="5">5 star</option>
			</select>

			<input
				id="save-movie"
				type="submit"
				className="btn"
				value="Add"
				onClick={(e) => clicked(e)}
			/>
		</form>
	);
};

export default AddMovieForm;
