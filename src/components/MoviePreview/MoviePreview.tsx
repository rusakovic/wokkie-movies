import ContainerCenter from 'components/Containers/ContainerCenter';
import DefaultText from 'components/Text/DefaultText/DefaultText';
import React from 'react';
import {Image, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {Movie} from 'types/generalTypes';
import {MoviePreviewStyles} from './styles';

interface MoviePreviewProps {
  posterUri: Movie['poster'];
  title: Movie['title'];
}

const MoviePreview: React.FunctionComponent<MoviePreviewProps> = ({
  posterUri,
  title,
}) => {
  return (
    <ContainerCenter
      isVerticalCenter
      style={{
        width: wp(30),
        marginHorizontal: wp(3),

        borderRadius: 10,
      }}>
      <Image
        source={{
          uri: posterUri,
        }}
        resizeMode="contain"
        style={MoviePreviewStyles.poster}
      />
      <DefaultText fitText={false} xs isTextAlignCenter>
        {title}
      </DefaultText>
    </ContainerCenter>
  );
};

export default MoviePreview;
