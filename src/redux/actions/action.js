export const GET_MOVIES = "GET_MOVIES";
export const ON_SEARCH = "ON_SEARCH";
export const LOADING = "LOADING";
export const NEXT_PAGE = "NEXT_PAGE";
export const PREVENT_PAGE = "PREVENT_PAGE";

export function getMovies() {
  return async function (dispatch) {
    const apiKey = "c92c07b555c1bd7604f61b31ebf4ef21";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-AR&page=1`;
    dispatch({ type: LOADING, payload: true });
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: GET_MOVIES,
          payload: data.results,
        }),
          dispatch({ type: LOADING, payload: false });
      });
  };
}

export function searchMovie(query) {
  return async function (dispatch) {
    const apiKey = "c92c07b555c1bd7604f61b31ebf4ef21";

    const URL = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-AR&page=1&include_adult=true&query=${query}`;

    dispatch({ type: LOADING, payload: true });

    await fetch(URL)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: ON_SEARCH,
          payload: data.results,
        }),
          dispatch({ type: LOADING, payload: false });
      });
  };
}

export function nextPage() {
  return async function (dispatch) {
    const apiKey = "c92c07b555c1bd7604f61b31ebf4ef21";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-AR&page=2`;
    dispatch({ type: LOADING, payload: true });
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: NEXT_PAGE,
          payload: data.results,
        }),
          dispatch({ type: LOADING, payload: false });
      });
  };
}
export function preventPage() {
  return async function (dispatch) {
    const apiKey = "c92c07b555c1bd7604f61b31ebf4ef21";
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=es-AR&page=1`;
    dispatch({ type: LOADING, payload: true });
    await fetch(url)
      .then((res) => res.json())
      .then((data) => {
        dispatch({
          type: PREVENT_PAGE,
          payload: data.results,
        }),
          dispatch({ type: LOADING, payload: false });
      });
  };
}
