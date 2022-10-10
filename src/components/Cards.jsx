import React from "react";
import Card from "./Card";

const Cards = ({ movies }) => {
  return (
    <>
      {movies?.map((movie) => {
        return (
          <Card
            key={movie.id}
            poster_path={movie.poster_path}
            title={movie.title}
            id={movie.id}
            overview={movie.overview}
            vote_average={movie.vote_average}
            backdrop_path={movie.backdrop_path}
          />
        );
      })}
    </>
  );
};

export default Cards;
