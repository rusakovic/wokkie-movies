import {StyleSheet} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
  mainWrapper: {flexDirection: 'row', flex: 1},
  posterWrapper: {
    width: '30%',
  },
  poster: {
    height: '100%',
  },
  descriptionWrapper: {
    width: '70%',
    paddingHorizontal: wp(3),
  },
  titleWrapper: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonsWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: wp(3),
    height: '25%',
  },
  containerSpace: {
    width: '3%',
  },
});
