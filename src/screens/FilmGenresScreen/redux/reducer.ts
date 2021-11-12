import {Action, ActionType, FetchMovieResultInitialStateType} from './types';

const FetchMovieResultInitialState: FetchMovieResultInitialStateType = {
  isLoading: false,
  isFailed: false,
  movies: null,
  errorMessage: null,
};

const FetchMovieResultReducer = (
  state = FetchMovieResultInitialState,
  action: Action,
): FetchMovieResultInitialStateType => {
  switch (action.type) {
    case ActionType.FetchMovieRequested:
      return {
        ...state,
        isLoading: true,
      };
    case ActionType.FetchMovieSucceeded:
      return {
        ...state,
        isLoading: false,
        movies: action.movies,
      };
    default:
      return state;
  }
};

export default FetchMovieResultReducer;
