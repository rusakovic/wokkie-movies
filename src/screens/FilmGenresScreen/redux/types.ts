import {GenresWithKeysType} from '../types';

// SEARCH MOVIE
export enum ActionType {
  FetchMovieRequested = 'FetchMovieRequested',
  FetchMovieSucceeded = 'FetchMovieSucceeded',
  FetchMovieFailed = 'FetchMovieFailed',
}

export type FetchMovieRequestedAction = {
  type: ActionType.FetchMovieRequested;
};

export type FetchMovieSucceededAction = {
  type: ActionType.FetchMovieSucceeded;
  movies: GenresWithKeysType[];
};

export type FetchMovieFailedAction = {
  type: ActionType.FetchMovieFailed;
  error: string;
};

export type Action =
  // Fetch MOVIE
  | FetchMovieRequestedAction
  | FetchMovieSucceededAction
  | FetchMovieFailedAction;

export interface FetchMovieResultInitialStateType {
  isLoading: boolean;
  isFailed: boolean;
  movies: GenresWithKeysType[] | null;
  errorMessage: null | string;
}
