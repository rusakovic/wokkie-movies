import {StyleSheet} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import styled from 'constants/styled';

export const MovieGenreListStyles = StyleSheet.create({
  genresWrapper: {
    height: hp(28),
    width: '100%',
    borderRadius: 10,

    borderColor: styled.colors.grey30opacity,
    backgroundColor: styled.colors.white.white,
  },
});
