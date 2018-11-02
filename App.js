import React, { Component } from 'react';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { SafeAreaView } from 'react-native';
import firebase from 'firebase';
import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
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
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <SafeAreaView>
          <LoginForm />
        </SafeAreaView>
      </Provider>
    );
  }
}
