import React from 'react';
import {Provider} from 'react-redux';
import store from '../config/store';
import AppContainer from '../navigation/index';

const App = () => {
  return (
    <Provider store={store}>
      <AppContainer onNavigationStateChange={null} />
    </Provider>
  );
};
export default App;
