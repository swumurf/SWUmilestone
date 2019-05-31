/**
date: May 15, 2019
Author: Ji yoon, Park
Title: Navigator index in App.js / SWUMURF_SWU Milage Project
 */
import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';
import {SQLite} from 'expo';
import Home from './components/Home'
import Profile from './components/Profile'
import {createStackNavigator, createAppContainer, NavigationActions} from 'react-navigation'

/**Navigator 인덱스 설정 */
const AppNavigator=createStackNavigator({
  Home:Home,
  Profile:Profile
});

class App extends React.Component {
  render(){
    return <View><Text>HOME SCREEN</Text></View>    
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/*화면전환 기본 네비게이터 export*/ 
export default createAppContainer(AppNavigator);