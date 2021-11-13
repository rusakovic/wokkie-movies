import cloneDeep from 'lodash/cloneDeep';
import {Movie} from 'types/generalTypes';

import {FavoriteMovieToggleRequestedAction, MoviesCollection} from './types';

export const addRemovedFavoriteMovie = (
  favoritesMovies: MoviesCollection,
  movieId: FavoriteMovieToggleRequestedAction['id'],
  movieData: Movie,
) => {
  const favoritesMoviesStateClone = cloneDeep(favoritesMovies);

  if (favoritesMoviesStateClone.hasOwnProperty(movieId)) {
    delete favoritesMoviesStateClone[movieId];
    return favoritesMoviesStateClone;
  } else {
    return {
      ...favoritesMoviesStateClone,
      [movieId]: movieData,
    };
  }
};
