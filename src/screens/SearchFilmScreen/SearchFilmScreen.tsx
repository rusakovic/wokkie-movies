import {flatten, keyBy} from 'lodash';
import uniq from 'lodash/uniq';
import {moviesMock} from 'mock/movies';
import React, {useState} from 'react';
import {View} from 'react-native';

interface SearchFilmScreenProps {}

const SearchFilmScreen: React.FunctionComponent<SearchFilmScreenProps> =
  props => {
    const [movies, setMovies] = useState(moviesMock);
    const allGenres = movies.movies.map(movie => movie.genres);
    const combineGenres = flatten(allGenres);
    const uniqGenres = uniq(combineGenres);
    console.log(
      '🚀 ~ file: SearchFilmScreen.tsx ~ line 15 ~ uniqGenres',
      uniqGenres,
    );

    const genresWithKeys = uniqGenres.map(genre => {
      return {
        genreKey: genre,
        movies: [],
      };
    });
    console.log(
      '🚀 ~ file: SearchFilmScreen.tsx ~ line 26 ~ genresWithKeys',
      genresWithKeys,
    );

    const genresAsObject = keyBy(genresWithKeys, 'genreKey');

    const sortMoviesByGenres = movies.movies.map(movie => {
      const genres = movie.genres.map(genre =>
        genresAsObject[genre].movies.push(movie),
      );
    });

    return <View></View>;
  };

export default SearchFilmScreen;
