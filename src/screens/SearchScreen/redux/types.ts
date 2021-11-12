import {WookieMoviesType} from 'types/generalTypes';

export enum ActionType {
  SearchMovieRequested = 'SearchMovieRequested',
  SearchMovieSucceeded = 'SearchMovieSucceeded',
  SearchMovieFailed = 'SearchMovieFailed',
}

export type SearchMovieResultInitialStateType = {
  isLoading: boolean;
  isFailed: boolean;
  data: WookieMoviesType['movies'] | null;
  errorMessage: null | string;
};

// SEARCH MOVIE
export type SearchMovieRequestedAction = {
  type: ActionType.SearchMovieRequested;
  searchInput: string;
};

export type SearchMovieSucceededAction = {
  type: ActionType.SearchMovieSucceeded;
  data: SearchMovieResultInitialStateType['data'];
};

export type SearchMovieFailedAction = {
  type: ActionType.SearchMovieFailed;
  error: string;
};

export type Action =
  // SEARCH MOVIE
  | SearchMovieRequestedAction
  | SearchMovieSucceededAction
  | SearchMovieFailedAction;
