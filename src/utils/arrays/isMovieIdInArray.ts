import {Movie} from 'types/generalTypes';

export const isMoviesIdInArray = (
  arrayOfMovieIds: Movie['id'][],
  id: Movie['id'],
) => arrayOfMovieIds.includes(id);
