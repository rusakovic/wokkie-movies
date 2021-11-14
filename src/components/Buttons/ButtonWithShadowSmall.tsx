import styled from '@constants/styled';
import DefaultText from 'components/Text/DefaultText/DefaultText';
import React, {CSSProperties, FC} from 'react';
import {Pressable, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Icon from 'react-native-vector-icons/Ionicons';

interface ButtonWithShadowSmallProps {
  testID?: string;
  style?: CSSProperties;
  text?: string;
  onPress: () => void;
  isDisabled?: boolean;
  isMarginTop5?: boolean;
  isIcon?: boolean;
  iconName?: string;
  iconSize?: number;
  percentageWidth?: number;
  iconColor?: string;
}

const ButtonWithShadowSmall: FC<ButtonWithShadowSmallProps> = ({
  testID,
  style,
  text,
  onPress,
  isDisabled,
  isMarginTop5,
  isIcon,
  iconName,
  iconSize,
  percentageWidth,
  iconColor,
}) => {
  const buttonStyles = [
    styles.container(percentageWidth),
    isDisabled && styles.disabled,
    !isDisabled && styles.enabled,
    isMarginTop5 && styles.isMarginTop5,
  ];

  return (
    <Pressable
      testID={testID}
      style={({pressed}) => [
        buttonStyles,
        !isDisabled && pressed && styles.pressed,
        style,
      ]}
      onPress={onPress}
      disabled={isDisabled}>
      {isIcon && (
        <Icon
          style={styles.icon}
          name={iconName}
          size={iconSize || 20}
          color={iconColor || styled.colors.grey30opacity}
        />
      )}
      <DefaultText s fontColor={styled.colors.grey40opacity} isTextAlignCenter>
        {text}
      </DefaultText>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: (
    percentageWidth: ButtonWithShadowSmallProps['percentageWidth'],
  ) => ({
    backgroundColor: styled.colors.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: hp(1),
    paddingTop: hp(1),
    width: `${percentageWidth || 100}%`,
    borderRadius: 1,
  }),
  disabled: {
    borderColor: styled.colors.grey10opacity,
    borderWidth: 1,
  },
  enabled: {
    elevation: 5,
    shadowOffset: {
      height: 1,
      width: 0,
    },
    shadowColor: styled.colors.black,
    shadowOpacity: 0.2,
    backgroundColor: styled.colors.white.white,
    shadowRadius: 5,
  },
  pressed: {
    elevation: 1,
  },
  isMarginTop5: {
    marginTop: hp(5),
  },
  icon: {
    paddingLeft: '5%',
  },
});

export default ButtonWithShadowSmall;
