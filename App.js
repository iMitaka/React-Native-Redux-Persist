import React from 'react';
import { StatusBar } from 'react-native';
import RootNavigation from './navigators/rootNavigation'
import { Provider } from 'react-redux'
import storeConfiguration from './redux/storeConfiguration'
import { PersistGate } from 'redux-persist/integration/react'

const { persistor, store } = storeConfiguration()

export default class App extends React.Component {
  componentDidMount() {
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <RootNavigation />
        </PersistGate>
      </Provider>
    );
  }
}
