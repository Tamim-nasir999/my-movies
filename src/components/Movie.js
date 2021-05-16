import React from "react";

const Movie = ({ id, title, rating, onDelete }) => {
	const items = [];

	for (let x = 0; x < rating; x++) {
		items.push(<img width="20px" src="../../star.png" key={x} alt="star" />);
	}
	return (
		<li className="movie" data-grade={rating} data-title={title}>
			{title}

			<img
				width="30px"
				src="../../delete.png"
				alt="delete"
				className="delete-movie"
				onClick={() => onDelete(id)}
			/>
			<span className="stars">{items}</span>
		</li>
	);
};

export default Movie;
