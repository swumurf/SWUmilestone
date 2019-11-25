import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';


export default class Signup2 extends React.Component {
  static navigationOptions = {
    header: null
  }
  render(){
  const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
    
  return (
    <View style={styles.container}>
      <TextInput
      styles={styles.input}
      underlineColorAndroid="transparent"
      placeholder="Email"></TextInput>
      <Text>Signup2</Text>
    </View>);}
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    input:{
      margin:15,
      height:40,
      borderColor:"#7a42f4",
      borderWidth:1
    }
});