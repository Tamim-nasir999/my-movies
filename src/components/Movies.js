import React from "react";

import Movie from "./Movie";

const Movies = ({ movies, onDelete }) => {
	return (
		<ul id="movie-list">
			{movies.map((movie) => (
				<Movie
					key={movie.id}
					id={movie.id}
					title={movie.title}
					rating={movie.rating}
					onDelete={onDelete}
				/>
			))}
		</ul>
	);
};

export default Movies;
