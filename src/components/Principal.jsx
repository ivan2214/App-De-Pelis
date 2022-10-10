import "../app.css";
import Cards from "./Cards";
import { Box, Button, Flex, Image, Input, Spinner } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import image from "../assets/icons8-film-reel-50.png";
import { useDispatch, useSelector } from "react-redux";
import {
  getMovies,
  nextPage,
  preventPage,
  searchMovie,
} from "../redux/actions/action";
import swal from "sweetalert";

const Principal = () => {
  const movies = useSelector((state) => state.movies);

  const loading = useSelector((state) => state.loading);

  const page = useSelector((state) => state.pages);

  console.log(page);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch]);

  const [query, setQuery] = useState("");

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const searMovie = (e) => {
    e.preventDefault();
    if (query.length > 0) dispatch(searchMovie(query));
    else {
      swal({
        title: "Error pelicula no encontrada",
        text: "Introduce una pelicula porfavor",
        icon: "error",
        button: "Cerrar",
      });
    }
  };

  const handlePrevent = () => {
    dispatch(preventPage(page - 1));
  };
  const handleNext = () => {
    dispatch(nextPage(page + 1));
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
      <section className="sec-buttons">
        {page < 2 ? null : (
          <Button
            colorScheme="teal"
            color="white"
            _hover={{ bg: "#1A202C" }}
            variant="outline"
            onClick={handlePrevent}
          >
            anterior
          </Button>
        )}
        {page >= 35394 ? null : (
          <Button
            colorScheme="teal"
            color="white"
            _hover={{ bg: "#1A202C" }}
            variant="outline"
            onClick={handleNext}
          >
            siguiente
          </Button>
        )}
      </section>

      <section id="sec-main">
        {loading ? (
          <Box
            width="98vw"
            margin="0 auto"
            height="100%"
            display="grid"
            placeItems="center"
          >
            <Spinner
              thickness="8px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
              margin="0 auto"
            />
          </Box>
        ) : (
          <Cards movies={movies} />
        )}
      </section>
    </>
  );
};

export default Principal;
