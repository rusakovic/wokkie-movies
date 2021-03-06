import {Movie} from 'types/generalTypes';
import {FavoriteMovieToggleRequestedAction, ActionType, Action} from './types';

// FAVORITE MOVIE TOGGLE
export const favoriteMovieToggleRequested = (
  movie: Movie,
  id: FavoriteMovieToggleRequestedAction['id'],
): Action => ({
  type: ActionType.FavoriteMovieToggleRequested,
  movie,
  id,
});

export const favoriteMovieToggleSucceeded = (
  movieData: Movie,
  id: FavoriteMovieToggleRequestedAction['id'],
): Action => ({
  type: ActionType.FavoriteMovieToggleSucceeded,
  movieData,
  id,
});
