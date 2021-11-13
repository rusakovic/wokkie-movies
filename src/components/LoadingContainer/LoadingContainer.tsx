import ContainerCenter from 'components/Containers/ContainerCenter';
import DefaultText from 'components/Text/DefaultText/DefaultText';
import React from 'react';
import {ActivityIndicator} from 'react-native';

const LoadingContainer: React.FunctionComponent = () => {
  return (
    <ContainerCenter alignItemsCenter isVerticalCenter>
      <ActivityIndicator size="large" />
      <DefaultText>Loading movies...</DefaultText>
    </ContainerCenter>
  );
};

export default LoadingContainer;
