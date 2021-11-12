import {GenresWithKeysType} from '../types';
import {
  Action,
  ActionType,
  FetchMovieFailedAction,
  FetchMovieSucceededAction,
} from './types';

export const fetchMovieRequested = (): Action => ({
  type: ActionType.FetchMovieRequested,
});

export const fetchMovieSucceeded = (movies: GenresWithKeysType[]): Action => ({
  type: ActionType.FetchMovieSucceeded,
  movies,
});

export const fetchMovieFailed = (
  error: FetchMovieFailedAction['error'],
): Action => ({
  type: ActionType.FetchMovieFailed,
  error,
});
