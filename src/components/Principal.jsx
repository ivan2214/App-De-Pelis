import "../app.css";
import Cards from "./Cards";
import { Box, Button, Flex, Image, Input } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import image from "../assets/disney-seeklogo.com.svg";
const apiKey = "c92c07b555c1bd7604f61b31ebf4ef21";
const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-AR&page=1`;

const Principal = () => {
  const [movies, setMovies] = useState([]);

  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setMovies(data.results));
  }, []);

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const searMovie = async (e) => {
    e.preventDefault();

    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-AR&page=1&include_adult=true&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Flex
        flexDirection="row"
        width="100%"
        p="4"
        bg="gray.900"
        align="center"
        justify="space-between"
      >
        <a href="/">
          <Image boxSize="60px" objectFit="cover" src={image} alt="" />
        </a>

        <form action="" onSubmit={searMovie}>
          <Box
            width="full"
            display="flex"
            flexDirection="row"
            alignItems="flex-start"
            justifyContent="center"
            gap="2"
          >
            <Input
              placeholder="seachMovie..."
              type="search"
              name="query"
              onChange={handleChange}
              value={query}
              arial-label="search"
            />
            <Button
              colorScheme="teal"
              color="white"
              _hover={{ bg: "#1A202C" }}
              transition="all .5s"
              variant="outline"
              onClick={searMovie}
            >
              Searh
            </Button>
          </Box>
        </form>
      </Flex>
      <section id="sec-main">
        <Cards movies={movies} />
      </section>
    </>
  );
};

export default Principal;
