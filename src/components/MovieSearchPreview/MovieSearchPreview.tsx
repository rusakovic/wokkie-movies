import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import ButtonWithShadowSmall from 'components/Buttons/ButtonWithShadowSmall';
import {MoviePreviewProps} from 'components/MoviePreview/types';
import DefaultText from 'components/Text/DefaultText/DefaultText';
import React, {useState} from 'react';
import {Image, Modal, Pressable, StyleSheet, View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {useDispatch} from 'react-redux';
import {RootStackParamList, Routes} from 'routes/routes';
import {yearExtractor} from 'utils/date/yearExtractor';
import {styles} from './styles';

interface MovieSearchPreview extends MoviePreviewProps {
  isFavorite: boolean;
  isHidden: boolean;
}

const MovieSearchPreview: React.FunctionComponent<MovieSearchPreview> = ({
  posterUri,
  backdrop,
  cast,
  director,
  length,
  overview,
  rating,
  title,
  year,
  isFavorite,
  isHidden,
}) => {
  const dispatch = useDispatch();

  const [isPreviewOpened, setIsPreviewOpened] = useState(false);
  const onFavoriteToggle = () => {
    // dispatch(favoriteMovieToggleRequested(id));
  };

  const onHiddenToggle = () => {
    // dispatch(hiddenMovieToggleRequested(id));
  };

  const {navigate} =
    useNavigation<
      StackNavigationProp<RootStackParamList, Routes.FilmDetailsScreen>
    >();

  const onNavigationHandler = () => {
    navigate(Routes.FilmDetailsScreen, {
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

  const showPreviewPosterToggle = () => {
    setIsPreviewOpened(prevState => !prevState);
  };
  const formattedYear = yearExtractor(year);
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.posterWrapper}>
        <Pressable onPress={showPreviewPosterToggle}>
          <Image
            source={{
              uri: posterUri,
            }}
            style={styles.poster}
            resizeMode="contain"
          />
        </Pressable>

        <Modal visible={isPreviewOpened} transparent={true}>
          <ImageViewer
            imageUrls={[{url: backdrop}, {url: posterUri}]}
            onCancel={showPreviewPosterToggle}
            enableSwipeDown
            backgroundColor="rgba(0,0,0,0.8)"
            saveToLocalByLongPress={false}
            onClick={showPreviewPosterToggle}
            swipeDownThreshold={80}
            useNativeDriver
          />
        </Modal>
      </View>

      <View style={styles.descriptionWrapper}>
        <Pressable onPress={onNavigationHandler}>
          <View style={styles.titleWrapper}>
            <DefaultText
              style={{width: '80%'}}
              s
              fitText={false}
              fontFamilyMedium>
              {title}
            </DefaultText>
            <DefaultText style={{width: '20%'}} isTextAlignCenter s>
              {rating}
            </DefaultText>
          </View>

          <DefaultText xs>{formattedYear}</DefaultText>
          <DefaultText xxs2 numberOfLines={3} fitText={false}>
            {overview}
          </DefaultText>
        </Pressable>

        {/* BUTTONS */}
        <View style={styles.buttonsWrapper}>
          <ButtonWithShadowSmall
            isIcon
            iconName={isHidden ? 'md-eye-off-outline' : 'eye-outline'}
            onPress={onHiddenToggle}
            isDisabled={false}
            iconSize={15}
            percentageWidth={15}
          />
          <View style={styles.containerSpace} />
          <ButtonWithShadowSmall
            isIcon
            iconName={isFavorite ? 'star' : 'star-outline'}
            onPress={onFavoriteToggle}
            isDisabled={false}
            iconSize={15}
            percentageWidth={15}
          />
        </View>
      </View>
    </View>
  );
};

export default MovieSearchPreview;
