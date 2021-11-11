import {flatten, uniq, keyBy} from 'lodash';
import {moviesMock} from 'mock/movies';
import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';

interface FilmGenresScreenProps {}

const FilmGenresScreen: React.FunctionComponent<FilmGenresScreenProps> =
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
    return (
      <View>
        <FlatList
          data={genresWithKeys}
          keyExtractor={item => item.genreKey}
          renderItem={({item}) => {
            return <Text>{item.genreKey}</Text>;
          }}
        />
      </View>
    );
  };

export default FilmGenresScreen;
