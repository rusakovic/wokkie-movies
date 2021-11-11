export interface WookieMoviesType {
  movies: Movie[];
}

export interface Movie {
  backdrop: string;
  cast: string[];
  classification: Classification;
  director: string[] | string;
  genres: string[];
  id: string;
  imdb_rating: number;
  length: string;
  overview: string;
  poster: string;
  released_on: string;
  slug: string;
  title: string;
}

export enum Classification {
  The13 = '13+',
  The18 = '18+',
  The7 = '7+',
}
