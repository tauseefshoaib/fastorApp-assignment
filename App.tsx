import React from 'react';
import AppContainer from './src/navigation/NavigationStack';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <AppContainer />
    </Provider>
  );
};

export default App;
