import {MovieGenreList} from 'components';
import ContainerCenter from 'components/Containers/ContainerCenter';
import DefaultText from 'components/Text/DefaultText/DefaultText';
import {flatten, uniq, keyBy} from 'lodash';
import {moviesMock} from 'mock/movies';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, Text} from 'react-native';
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
    return (
      <ContainerCenter alignItemsCenter isVerticalCenter>
        <ActivityIndicator size="large" />
        <DefaultText>Loading movies...</DefaultText>
      </ContainerCenter>
    );
  }

  if (isFailed && errorMessage !== null) {
    return (
      <ContainerCenter alignItemsCenter isVerticalCenter>
        <DefaultText>Sorry, error occurred:</DefaultText>
        <DefaultText>{errorMessage}</DefaultText>
      </ContainerCenter>
    );
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
