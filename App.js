import {
  NativeModules,
  View,
  Button,
  requireNativeComponent,
  StyleSheet,
} from 'react-native';
import React, {Component} from 'react';

const SharedStorage = NativeModules.SharedStorage;
const {ToastModule} = NativeModules;
const Switch = requireNativeComponent('Switch');
const Box = requireNativeComponent('Box');
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isClicked: false,
    };
  }
  componentDidMount() {
    SharedStorage.set(JSON.stringify({text: 'Widget is change one'}));
  }
  _showToast = () => {
    ToastModule.showToast('Java toast is running');
    this.setState(prevState => {
      return {
        ...prevState,
        isClicked: !prevState.isClicked,
      };
    });
  };
  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this._showToast} title="Toast Button" />
        <Switch isTurnedOn={false} style={styles.switchButton} />
        <Box isClicked={this.state.isClicked} style={styles.box} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  switchButton: {
    backgroundColor: 'black',
    width: 120,
    height: 120,
  },
  box: {
    backgroundColor: 'red',
    width: 120,
    height: 120,
  },
});

export default App;
