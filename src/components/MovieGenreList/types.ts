import {Movie} from 'types/generalTypes';

export interface MovieGenreListProps {
  genre: Movie['genres'][0];
  movies: Movie[];
}
