import {NoInternetNotifier} from 'components';
import React from 'react';

import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import store, {persistor} from 'redux/store';
import {Navigator} from 'screens';

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
        <NoInternetNotifier />
      </PersistGate>
    </Provider>
  );
};

export default App;
