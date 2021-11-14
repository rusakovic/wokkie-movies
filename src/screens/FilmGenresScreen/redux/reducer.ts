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
        isFailed: FetchMovieResultInitialState.isFailed,
        errorMessage: FetchMovieResultInitialState.errorMessage,
      };
    case ActionType.FetchMovieSucceeded:
      return {
        ...state,
        isLoading: false,
        movies: action.movies,
      };
    case ActionType.FetchMovieFailed:
      return {
        ...state,
        isLoading: false,
        isFailed: true,
        errorMessage: action.error,
      };

    default:
      return state;
  }
};

export default FetchMovieResultReducer;
