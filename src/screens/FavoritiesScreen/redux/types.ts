import {Movie} from 'types/generalTypes';

export enum ActionType {
  // FAVORITE MOVIE TOGGLE
  FavoriteMovieToggleRequested = 'FavoriteMovieToggleRequested',
  FavoriteMovieToggleSucceeded = 'FavoriteMovieToggleSucceeded',
}

export type MoviesCollection = {
  [key: string]: Movie;
};

export type FavoriteMoviesInitialStateType = {
  favoritesMovies: MoviesCollection;
};

// FAVORITE MOVIE TOGGLE
export type FavoriteMovieToggleRequestedAction = {
  type: ActionType.FavoriteMovieToggleRequested;
  id: Movie['id'];
};

export type FavoriteMovieToggleSucceededAction = {
  type: ActionType.FavoriteMovieToggleSucceeded;
  movieData: Movie;
  id: FavoriteMovieToggleRequestedAction['id'];
};

export type Action =
  // FAVORITE MOVIE TOGGLE
  FavoriteMovieToggleRequestedAction | FavoriteMovieToggleSucceededAction;
