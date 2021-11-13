import {ErrorContainer, LoadingContainer, MovieGenreList} from 'components';
import ContainerCenter from 'components/Containers/ContainerCenter';
import DefaultText from 'components/Text/DefaultText/DefaultText';
import React, {useEffect} from 'react';
import {ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {fetchMovieRequested} from './redux/actions';
import {fetchMovieResultSelector} from './redux/selectors';
import {GenresWithKeysType} from './types';

const FilmGenresScreen: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const {movies, isLoading, isFailed, errorMessage} = useSelector(
    fetchMovieResultSelector,
  );

  useEffect(() => {
    dispatch(fetchMovieRequested());
  }, []);

  if (isLoading) {
    return <LoadingContainer />;
  }

  if (isFailed && errorMessage !== null) {
    return <ErrorContainer errorMessage={errorMessage} />;
  }

  return (
    <ContainerCenter isContainer>
      <FlatList
        data={movies}
        keyExtractor={item => item.genreKey}
        renderItem={({item}: {item: GenresWithKeysType}) => {
          return <MovieGenreList genre={item.genreKey} movies={item.movies} />;
        }}
      />
    </ContainerCenter>
  );
};

export default FilmGenresScreen;
