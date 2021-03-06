import {ErrorContainer, LoadingContainer, MovieGenreList} from 'components';
import ContainerCenter from 'components/Containers/ContainerCenter';
import {TestID} from 'constants/testID';
import React, {useEffect} from 'react';
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
        testID={TestID.GenresList}
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
