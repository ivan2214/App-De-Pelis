import { useEffect, useState } from "react";

import "../app.css";

import Nav from "./Nav";

import Cards from "./Cards";

import getApi from "../services/getApi";

const Principal = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getApi().then((data) => setMovies(data));
  }, []);

  

  return (
    <>
      <Nav />
      <section id="sec-main">
        <Cards movies={movies} />
      </section>
    </>
  );
};

export default Principal;
