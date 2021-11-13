import {useNavigation} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import ContainerCenter from 'components/Containers/ContainerCenter';
import DefaultText from 'components/Text/DefaultText/DefaultText';
import React from 'react';
import {Image, Pressable} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
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
        style={{
          width: wp(30),
          marginHorizontal: wp(3),
          overflow: 'hidden',
          borderRadius: 10,
        }}>
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
