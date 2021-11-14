import {NoInternetNotifier} from 'components';
import React from 'react';
import {StatusBar} from 'react-native';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from 'redux/store';
import {Navigator} from 'screens';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <StatusBar barStyle="dark-content" />
        <Navigator />
        <NoInternetNotifier />
      </PersistGate>
    </Provider>
  );
};

export default App;
