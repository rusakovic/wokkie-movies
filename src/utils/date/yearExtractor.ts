import {Movie} from 'types/generalTypes';

export const yearExtractor = (year: Movie['released_on']) => {
  return year.substring(0, 4);
};
