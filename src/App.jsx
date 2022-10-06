import { Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import getApi from "./services/getApi";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getApi().then((data) => setMovies(data));
  }, []);

  return (
    <main>
      <Cards movies={movies} />
    </main>
  );
}

export default App;
