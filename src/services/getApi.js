const apiKey = "c92c07b555c1bd7604f61b31ebf4ef21";

const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-AR&page=1
`;

const getApi = () => {
  return fetch(url)
    .then((response) => response.json())
    .then((res) => {
      return res.results;
    });
};

export default getApi;
