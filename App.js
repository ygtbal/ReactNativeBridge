import {NativeModules, Text} from 'react-native';
import React, {Component} from 'react';

const SharedStorage = NativeModules.SharedStorage;
class App extends Component {
  componentDidMount() {
    SharedStorage.set(JSON.stringify({text: 'Widget is change'}));
  }
  render() {
    return <Text>React Native Bridge Example</Text>;
  }
}

export default App;
