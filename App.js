import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { Text, SafeAreaView } from 'react-native';
import reducers from './src/reducers';
import firebase from 'firebase';

export default class App extends React.Component {
  componentDidMount() {
    const config = {
      apiKey: 'AIzaSyDjBmRRCjd2gY8pSRTm8Zh8urjWOOjeBSw',
      authDomain: 'employee-manager-b0904.firebaseapp.com',
      databaseURL: 'https://employee-manager-b0904.firebaseio.com',
      projectId: 'employee-manager-b0904',
      storageBucket: 'employee-manager-b0904.appspot.com',
      messagingSenderId: '1095269620116'
    };

    firebase.initializeApp(config);
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <SafeAreaView>
          <Text>Hello!</Text>
        </SafeAreaView>
      </Provider>
    );
  }
}
