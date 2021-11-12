import {Movie} from 'types/generalTypes';

export interface FilmDetailsRouteProps {
  id: Movie['id'];
  backdrop: Movie['backdrop'];
  poster: Movie['poster'];
  title: Movie['title'];
  rating: Movie['imdb_rating'];
  year: Movie['released_on'];
  length: Movie['length'];
  director: Movie['director'];
  cast: Movie['cast'];
  overview: Movie['overview'];
}
