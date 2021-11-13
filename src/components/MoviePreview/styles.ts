import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const MoviePreviewStyles = StyleSheet.create({
  posterWrapper: {
    width: wp(30),
    marginHorizontal: wp(3),
    overflow: 'hidden',
    borderRadius: 10,
  },
  poster: {
    height: '80%',
    width: '100%',
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
  },
});
