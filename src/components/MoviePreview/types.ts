import {Movie} from 'types/generalTypes';

export interface MoviePreviewProps {
  id: Movie['id'];
  posterUri: Movie['poster'];
  title: Movie['title'];
  backdrop: Movie['backdrop'];
  rating: Movie['imdb_rating'];
  year: Movie['released_on'];
  length: Movie['length'];
  director: Movie['director'];
  cast: Movie['cast'];
  overview: Movie['overview'];
}
