import {useNavigation} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import ButtonWithShadowSmall from 'components/Buttons/ButtonWithShadowSmall';
import DefaultText from 'components/Text/DefaultText/DefaultText';
import styled from 'constants/styled';
import React, {useState} from 'react';
import {Image, Modal, Pressable, View} from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import {useDispatch, useSelector} from 'react-redux';
import {RootStackParamList, Routes} from 'routes/routes';
import {favoriteMovieToggleRequested} from 'screens/FavoritiesScreen/redux/actions';
import {hiddenMovieToggleRequested} from 'screens/HiddenMoviesScreen/redux/actions';
import {hiddenMoviesSelector} from 'screens/HiddenMoviesScreen/redux/selectors';
import {Movie} from 'types/generalTypes';
import {isMoviesIdInArray} from 'utils/arrays/isMovieIdInArray';
import {yearExtractor} from 'utils/date/yearExtractor';
import {styles} from './styles';

interface MovieSearchPreview {
  movie: Movie;
  isFavorite: boolean;
}

const MovieSearchPreview: React.FunctionComponent<MovieSearchPreview> = ({
  movie,
  isFavorite,
}) => {
  const {backdrop, poster, overview, imdb_rating, title, released_on, id} =
    movie;
  const dispatch = useDispatch();
  const hiddenMoviesIds = useSelector(hiddenMoviesSelector);

  const [isPreviewOpened, setIsPreviewOpened] = useState(false);
  const onFavoriteToggle = () => {
    dispatch(favoriteMovieToggleRequested(movie, id));
  };

  const onHiddenToggle = () => {
    dispatch(hiddenMovieToggleRequested(id));
  };

  const {navigate} =
    useNavigation<
      StackNavigationProp<RootStackParamList, Routes.FilmDetailsScreen>
    >();

  const onNavigationHandler = () => {
    navigate(Routes.FilmDetailsScreen, {
      movie,
    });
  };

  const showPreviewPosterToggle = () => {
    setIsPreviewOpened(prevState => !prevState);
  };
  const formattedYear = yearExtractor(released_on);
  return (
    <View style={styles.mainWrapper}>
      <View style={styles.posterWrapper}>
        <Pressable onPress={showPreviewPosterToggle}>
          <Image
            source={{
              uri: poster,
            }}
            style={styles.poster}
            resizeMode="contain"
          />
        </Pressable>

        {/* POSTER PREVIEW */}
        <Modal visible={isPreviewOpened} transparent={true}>
          <ImageViewer
            imageUrls={[{url: backdrop}, {url: poster}]}
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
              {imdb_rating}
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
            iconName={
              isMoviesIdInArray(hiddenMoviesIds, id)
                ? 'md-eye-off-outline'
                : 'eye-outline'
            }
            onPress={onHiddenToggle}
            isDisabled={false}
            iconSize={15}
            percentageWidth={15}
          />
          <View style={styles.containerSpace} />
          <ButtonWithShadowSmall
            isIcon
            iconName={isFavorite ? 'star' : 'star-outline'}
            iconColor={
              isFavorite
                ? styled.colors.yellow.star
                : styled.colors.grey30opacity
            }
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
