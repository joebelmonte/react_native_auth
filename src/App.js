import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: 'AIzaSyCiPEtJGjkzH0GjhidhhJEZG2wFp0UcBXQ',
      authDomain: 'auth-testing-ca856.firebaseapp.com',
      databaseURL: 'https://auth-testing-ca856.firebaseio.com',
      projectId: 'auth-testing-ca856',
      storageBucket: 'auth-testing-ca856.appspot.com',
      messagingSenderId: '547625622999'
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>An App!</Text>
      </View>
    );
  }
}

export default App;
