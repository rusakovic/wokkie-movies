import styled from 'constants/styled';
import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const FilmDetailsScreenStyles = StyleSheet.create({
  mainWrapper: {height: hp(100)},
  backdropWrapper: {height: hp(30)},
  backdropImage: {height: '100%', width: '100%'},
  backdropInnerShadow: {
    height: '25%',
    backgroundColor: styled.colors.black,
    position: 'absolute',
    width: '100%',
    bottom: 0,
    opacity: 0.5,
  },

  movieDetailsWrapper: {flex: 1, height: '100%', top: -hp(11)},
  mainPosterWrapper: {
    height: '30%',
    alignItems: 'center',
  },
  posterButtonsWrapper: {
    width: '90%',
  },
  posterWrapper: {height: '100%', width: '30%'},
  poster: {height: '100%', width: '100%'},

  titleButtonsWrapper: {
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    width: '70%',
  },

  titleRatingWrapper: {
    marginTop: '15%',
    alignItems: 'center',
  },
  title: {width: '75%'},
  rating: {width: '20%'},

  favoriteHideButtonsWrapper: {
    flexDirection: 'row',
    height: '30%',
    width: '40%',
    justifyContent: 'space-between',
    padding: 2,
  },

  castDescriptionScroll: {
    marginHorizontal: wp(4),
    marginVertical: wp(10),
  },
  cast: {width: '90%'},
});
