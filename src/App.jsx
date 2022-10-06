import { useEffect, useState } from "react";
import Cards from "./components/Cards";
import Nav from "./components/Nav";
import getApi from "./services/getApi";
import "./app.css"

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getApi().then((data) => setMovies(data));
  }, []);

  return (
    <section>
      <Nav />
      <section id="sec-main">
        <Cards movies={movies} />
      </section>
    </section>
  );
}

export default App;
