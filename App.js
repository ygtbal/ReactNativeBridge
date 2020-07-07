import {
  NativeModules,
  View,
  Button,
  requireNativeComponent,
} from 'react-native';
import React, {Component} from 'react';

const SharedStorage = NativeModules.SharedStorage;
const {ToastModule} = NativeModules;
const ToastButton = requireNativeComponent(ToastButton);
class App extends Component {
  componentDidMount() {
    SharedStorage.set(JSON.stringify({text: 'Widget is change one'}));
  }
  _showToast = () => {
    ToastModule.showToast('Java toast is running');
  };
  render() {
    return (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Button onPress={this._showToast} title="Toast Button" />
      </View>
    );
  }
}

export default App;
