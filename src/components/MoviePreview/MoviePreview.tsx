import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import ContainerCenter from 'components/Containers/ContainerCenter';
import DefaultText from 'components/Text/DefaultText/DefaultText';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {RootStackParamList, Routes} from 'routes/routes';
import {MoviePreviewStyles} from './styles';
import {MoviePreviewProps} from './types';

const MoviePreview: React.FunctionComponent<MoviePreviewProps> = ({movie}) => {
  const {poster, title} = movie;
  const {navigate} =
    useNavigation<
      StackNavigationProp<RootStackParamList, Routes.FilmDetailsScreen>
    >();

  const onNavigationHandler = () => {
    navigate(Routes.FilmDetailsScreen, {
      movie,
    });
  };

  return (
    <Pressable onPress={onNavigationHandler}>
      <ContainerCenter
        isVerticalCenter
        style={MoviePreviewStyles.posterWrapper}>
        <Image
          source={{
            uri: poster,
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
