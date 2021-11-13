import {RouteProp, useRoute} from '@react-navigation/native';
import ButtonWithShadowSmall from 'components/Buttons/ButtonWithShadowSmall';
import ContainerCenter from 'components/Containers/ContainerCenter';
import ContainerSpace from 'components/Containers/ContainerSpace';
import DefaultText from 'components/Text/DefaultText/DefaultText';
import styled from 'constants/styled';
import {isArray} from 'lodash';
import React from 'react';
import {Image, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {useDispatch, useSelector} from 'react-redux';
import {favoriteMovieToggleRequested} from 'screens/FavoritiesScreen/redux/actions';
import {favoriteMoviesSelector} from 'screens/FavoritiesScreen/redux/selectors';
import {hiddenMovieToggleRequested} from 'screens/HiddenMoviesScreen/redux/actions';
import {hiddenMoviesSelector} from 'screens/HiddenMoviesScreen/redux/selectors';
import {isMoviesIdInArray} from 'utils/arrays/isMovieIdInArray';
import {yearExtractor} from 'utils/date/yearExtractor';
import {FilmDetailsScreenStyles} from './styles';
import {FilmDetailsRouteProps} from './types';

const FilmDetailsScreen: React.FunctionComponent = () => {
  const dispatch = useDispatch();

  const hiddenMoviesIds = useSelector(hiddenMoviesSelector);
  const {
    params: {movie},
  } = useRoute<RouteProp<Record<string, FilmDetailsRouteProps>, string>>();

  const {
    id,
    backdrop,
    cast,
    director,
    poster,
    length,
    overview,
    imdb_rating,
    title,
    released_on,
  } = movie;

  const directorsList = isArray(director) ? director.join(', ') : director;
  const formattedYear = yearExtractor(released_on);

  const onHiddenToggle = () => {
    dispatch(hiddenMovieToggleRequested(id));
  };

  const favoriteMovies = useSelector(favoriteMoviesSelector);
  const favoriteMoviesIds = Object.keys(favoriteMovies);
  const isFavorite = isMoviesIdInArray(favoriteMoviesIds, id);

  const isHidden = isMoviesIdInArray(hiddenMoviesIds, id);

  const onFavoriteToggle = () => {
    dispatch(favoriteMovieToggleRequested(movie, id));
  };

  return (
    <ContainerCenter style={FilmDetailsScreenStyles.mainWrapper}>
      {/* BACKDROP COVER */}
      <ContainerCenter
        style={FilmDetailsScreenStyles.backdropWrapper}
        isFullWidth>
        <ContainerCenter isFullWidth>
          <Image
            source={{uri: backdrop}}
            style={FilmDetailsScreenStyles.backdropImage}
            resizeMode="cover"
          />
        </ContainerCenter>
        <View style={FilmDetailsScreenStyles.backdropInnerShadow} />
      </ContainerCenter>
      <View style={FilmDetailsScreenStyles.movieDetailsWrapper}>
        {/* MOVIE DETAILS */}
        <ContainerCenter style={FilmDetailsScreenStyles.mainPosterWrapper}>
          <ContainerCenter
            style={FilmDetailsScreenStyles.posterButtonsWrapper}
            flexDirectionRow>
            {/* POSTER */}
            <ContainerCenter
              isFullWidth
              style={FilmDetailsScreenStyles.posterWrapper}>
              <Image
                source={{uri: poster}}
                style={FilmDetailsScreenStyles.poster}
                resizeMode="contain"
              />
            </ContainerCenter>

            <ContainerCenter
              style={FilmDetailsScreenStyles.titleButtonsWrapper}>
              {/* TITLE AND RATING */}
              <ContainerCenter
                flexDirectionRow
                justifyContentSpaceBetween
                style={FilmDetailsScreenStyles.titleRatingWrapper}>
                <View style={FilmDetailsScreenStyles.title}>
                  <DefaultText
                    s
                    fontColor={styled.colors.white.white}
                    numberOfLines={2}>
                    {title}
                  </DefaultText>
                </View>
                <View style={FilmDetailsScreenStyles.rating}>
                  <DefaultText
                    xl
                    fontColor={styled.colors.white.white}
                    isTextAlignCenter>
                    {imdb_rating}
                  </DefaultText>
                </View>
              </ContainerCenter>

              {/* FAVORITE AND HIDE BUTTONS */}
              <View style={FilmDetailsScreenStyles.favoriteHideButtonsWrapper}>
                <ButtonWithShadowSmall
                  isIcon
                  iconName={isHidden ? 'md-eye-off-outline' : 'eye-outline'}
                  onPress={onHiddenToggle}
                  isDisabled={false}
                  iconSize={20}
                  percentageWidth={40}
                />
                <ButtonWithShadowSmall
                  isIcon
                  iconColor={
                    isFavorite
                      ? styled.colors.yellow.star
                      : styled.colors.grey30opacity
                  }
                  iconName={isFavorite ? 'star' : 'star-outline'}
                  onPress={onFavoriteToggle}
                  isDisabled={false}
                  iconSize={20}
                  percentageWidth={40}
                />
              </View>
            </ContainerCenter>
          </ContainerCenter>

          {/* YEAR, LENGTH, DIRECTOR  */}
          <ContainerCenter isFullWidth isContainer isMarginVertical1>
            <ContainerCenter flexDirectionRow>
              <DefaultText xs>{formattedYear} | </DefaultText>
              <DefaultText xs>{length} </DefaultText>
            </ContainerCenter>
            <DefaultText xs>{directorsList}</DefaultText>
          </ContainerCenter>
        </ContainerCenter>
        <ContainerSpace mtXS />

        {/* CAST AND DESCRIPTION */}
        <ScrollView style={FilmDetailsScreenStyles.castDescriptionScroll}>
          {/* CAST */}
          <ContainerCenter
            isMarginVertical2
            style={FilmDetailsScreenStyles.cast}>
            <DefaultText s uppercased fontFamilyBold>
              cast:{' '}
            </DefaultText>
            <DefaultText numberOfLines={2} s marginTopCustom={5}>
              {cast.join(', ')}
            </DefaultText>
          </ContainerCenter>

          {/* MOVIE DESCRIPTION */}
          <ContainerCenter isMarginVertical2>
            <DefaultText s uppercased fontFamilyBold>
              description:{' '}
            </DefaultText>
            <DefaultText
              numberOfLines={15}
              fitText={false}
              s
              marginTopCustom={5}>
              {overview}
            </DefaultText>
          </ContainerCenter>
        </ScrollView>
      </View>
    </ContainerCenter>
  );
};

export default FilmDetailsScreen;
