import DefaultText from 'components/Text/DefaultText/DefaultText';
import React from 'react';
import {View} from 'react-native';
import {Movie} from 'types/generalTypes';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import styled from 'constants/styled';
import {FlatList} from 'react-native-gesture-handler';
import ContainerCenter from 'components/Containers/ContainerCenter';
import {MoviePreview} from 'components';
interface MovieGenreListProps {
  genre: Movie['genres'][0];
  movies: Movie[];
}

const MovieGenreList: React.FunctionComponent<MovieGenreListProps> = ({
  genre,
  movies,
}) => {
  return (
    <ContainerCenter isMarginVertical2>
      <DefaultText fontFamilyMedium uppercased>
        {genre}
      </DefaultText>

      <ContainerCenter
        style={{
          height: hp(28),
          width: '100%',
          borderRadius: 10,

          borderColor: styled.colors.grey30opacity,
          backgroundColor: styled.colors.white.white,
        }}>
        <FlatList
          data={movies}
          keyExtractor={item => item.id}
          horizontal
          renderItem={({item}) => {
            return <MoviePreview posterUri={item.poster} title={item.title} />;
          }}
        />
      </ContainerCenter>
    </ContainerCenter>
  );
};

export default MovieGenreList;
