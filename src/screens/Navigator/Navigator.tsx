import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';

interface NavigatorProps {}

const Navigator: React.FunctionComponent<NavigatorProps> = props => {
  return <SafeAreaView style={styles.safeAreaWrapper}></SafeAreaView>;
};

export default Navigator;
