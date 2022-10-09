import { GET_MOVIES, LOADING, NEXT_PAGE, ON_SEARCH,PREVENT_PAGE } from "../actions/action";

let initialState = {
  movies: [],
  loading: false,
};

export default function reducer(state = initialState, { type, payload }) {
  console.log(state.movies);
  switch (type) {
    case GET_MOVIES:
      return { ...state, movies: payload };
    case NEXT_PAGE:
      return { ...state, movies: payload };
    case PREVENT_PAGE:
      return { ...state, movies: payload };
    case ON_SEARCH:
      return { ...state, movies: payload };
    case LOADING:
      return { ...state, loading: payload };
    default:
      return state; // caso por defecto
  }
}
