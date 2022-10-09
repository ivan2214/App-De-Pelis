import { GET_MOVIES, LOADING, ON_SEARCH } from "../actions/action";

let initialState = {
  movies: [],
  loading: false,
};

export default function reducer(state = initialState, { type, payload }) {
  console.log(state.movies);
  switch (type) {
    case GET_MOVIES:
      return { ...state, movies: payload };
    case ON_SEARCH:
      return { ...state, movies: payload };
    case LOADING:
      return { ...state, loading: payload };
    default:
      return state; // caso por defecto
  }
}
