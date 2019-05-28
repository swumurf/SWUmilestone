import React from 'react';
import { Navigation, createNavigator, StackNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { StyleSheet, View, Image, Alert, AppRegistry, Text,
  Button, TouchableOpacity, TouchableHighlight, TouchableNativeFeedback, TouchableWithoutFeedback } from 'react-native';

import Login from './Screen/Login';
import Join from './Screen/Join';

const RockStack = createStackNavigator({
  Login: Login,
  Join: Join,
})

export default class App extends React.Component {
  constructor(props){
    super(props);
  }

  handlePressButton = () => {
    Alert.alert("It is SWUmurf LOGO")
  }

  Login = () => {
    Alert.alert("Login");
  }

  render() {
    return (
      <View style={styles.container}>
        {/* <Button><img src = "./resource/swumurf.png" onClick={this.handlePressButton}></img></Button> */}
        <TouchableWithoutFeedback
        style = {styles.insideButton}
        onPress = {this.handlePressButton}
        underlayColor = "red">
          <View> 
            <Image source={require('./resource/swumurf.png')}></Image>
          </View>
        </TouchableWithoutFeedback>
        <View>
          <Button style = {styles.insideButton} title = "로그인" onPress={()=>{this.Login()}}></Button>
          <Button style = {styles.insideButton} title = "회원가입" onPress={()=>{Alert.alert("JoinUs")}}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  insideButton: {
    margin : 20,
    justifyContent: 'center'
  }
});

AppRegistry.registerComponent('Button and handleing touches'), ()=>App;
