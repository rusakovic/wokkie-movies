import DefaultText from 'components/Text/DefaultText/DefaultText';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ContainerCenter from 'components/Containers/ContainerCenter';
import {MoviePreview} from 'components';
import {MovieGenreListProps} from './types';
import {MovieGenreListStyles} from './styles';
import {ListRenderItem} from 'react-native';
import {Movie} from 'types/generalTypes';

const MovieGenreList: React.FunctionComponent<MovieGenreListProps> = ({
  genre,
  movies,
}) => {
  const renderItem: ListRenderItem<Movie> = ({item}) => (
    <MoviePreview movie={item} />
  );

  return (
    <ContainerCenter isMarginVertical2>
      <DefaultText fontFamilyMedium uppercased>
        {genre}
      </DefaultText>

      <ContainerCenter style={MovieGenreListStyles.genresWrapper}>
        <FlatList
          data={movies}
          keyExtractor={item => item.id}
          horizontal
          renderItem={renderItem}
        />
      </ContainerCenter>
    </ContainerCenter>
  );
};

export default MovieGenreList;
