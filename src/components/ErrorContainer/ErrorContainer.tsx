import ContainerCenter from 'components/Containers/ContainerCenter';
import DefaultText from 'components/Text/DefaultText/DefaultText';
import React from 'react';

interface ErrorContainerProps {
  errorMessage: string;
}

const ErrorContainer: React.FunctionComponent<ErrorContainerProps> = ({
  errorMessage,
}) => {
  return (
    <ContainerCenter alignItemsCenter isVerticalCenter>
      <DefaultText>Sorry, error occurred:</DefaultText>
      <DefaultText>{errorMessage}</DefaultText>
    </ContainerCenter>
  );
};

export default ErrorContainer;
