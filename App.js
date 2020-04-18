import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { Root } from 'native-base';

import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/config/StoreConfig';

import './src/config/ReactotronConfig';
import Routes from './src/Routes';


class App extends Component {

  componentDidCatch(error, info) {
      console.tron(error);
      console.tron(info);
  }

  render() {

    return (
      <Root>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Routes/>
          </PersistGate>
        </Provider>
      </Root>
    );

  }
  
}

export default App;