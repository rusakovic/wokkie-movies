import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import ContainerCenter from 'components/Containers/ContainerCenter';
import DefaultText from 'components/Text/DefaultText/DefaultText';
import React from 'react';
import {Image, Pressable, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {RootStackParamList, Routes} from 'routes/routes';
import {MoviePreviewStyles} from './styles';
import {MoviePreviewProps} from './types';

const MoviePreview: React.FunctionComponent<MoviePreviewProps> = ({
  id,
  posterUri,
  backdrop,
  cast,
  director,
  length,
  overview,
  rating,
  title,
  year,
}) => {
  const {navigate} =
    useNavigation<
      StackNavigationProp<RootStackParamList, Routes.FilmDetailsScreen>
    >();

  const onNavigationHandler = () => {
    navigate(Routes.FilmDetailsScreen, {
      id,
      backdrop,
      cast,
      director,
      poster: posterUri,
      length,
      overview,
      rating,
      title,
      year,
    });
  };

  return (
    <Pressable onPress={onNavigationHandler}>
      <ContainerCenter
        isVerticalCenter
        style={{
          width: wp(30),
          marginHorizontal: wp(3),
          overflow: 'hidden',
          borderRadius: 10,
        }}>
        <Image
          source={{
            uri: posterUri,
          }}
          resizeMode="cover"
          style={MoviePreviewStyles.poster}
        />
        <DefaultText fitText={false} xs isTextAlignCenter>
          {title}
        </DefaultText>
      </ContainerCenter>
    </Pressable>
  );
};

export default MoviePreview;
