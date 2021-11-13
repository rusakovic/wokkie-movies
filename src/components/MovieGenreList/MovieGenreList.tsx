import DefaultText from 'components/Text/DefaultText/DefaultText';
import React from 'react';
import {FlatList} from 'react-native-gesture-handler';
import ContainerCenter from 'components/Containers/ContainerCenter';
import {MoviePreview} from 'components';
import {MovieGenreListProps} from './types';
import {MovieGenreListStyles} from './styles';

const MovieGenreList: React.FunctionComponent<MovieGenreListProps> = ({
  genre,
  movies,
}) => {
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
          renderItem={({item}) => {
            return <MoviePreview movie={item} />;
          }}
        />
      </ContainerCenter>
    </ContainerCenter>
  );
};

export default MovieGenreList;
