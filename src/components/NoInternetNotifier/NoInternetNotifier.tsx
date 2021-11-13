import {BlurView} from '@react-native-community/blur';
import ContainerSpace from 'components/Containers/ContainerSpace';
import DefaultText from 'components/Text/DefaultText/DefaultText';
import styled from 'constants/styled';
import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {NoInternetNotifierStyles} from './styles';
import NetInfo from '@react-native-community/netinfo';

const NoInternetNotifier: React.FunctionComponent = () => {
  // Check internet availability
  const [isOffline, setOfflineStatus] = useState(false);

  useEffect(() => {
    const removeNetInfoSubscription = NetInfo.addEventListener(state => {
      const offline = !(state.isConnected && state.isInternetReachable);
      setOfflineStatus(offline);
    });

    return () => removeNetInfoSubscription();
  }, []);

  return (
    <>
      {isOffline ? (
        <>
          <BlurView
            style={NoInternetNotifierStyles.blurredWrapper}
            blurType="dark"
            blurAmount={10}
            overlayColor={styled.colors.grey80opacity}
          />
          <View style={NoInternetNotifierStyles.noInternetTextWrapper}>
            <ContainerSpace mtXXS />
            <DefaultText fontColor={styled.colors.white.white} fontFamilyLight>
              Please, check internet connection
            </DefaultText>
            <ContainerSpace mtXXS />
            <ActivityIndicator />
          </View>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default NoInternetNotifier;
