/**
date: May 15, 2019
Author: Ji yoon, Park
Title: Navigator index in App.js / SWUMURF_SWU Milage Project
 */
import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';
import {SQLite} from 'expo';
import Home from './components/Home'
import Checkplanner from './components/Checkplanner'
import Confirmplanner from './components/Confirmplanner'
import Insertplanner1 from './components/Insertplanner1'
import Insertplanner2 from './components/Insertplanner2'
import Insertplanner3 from './components/Insertplanner3'
import Main from './components/Main'
import Managermain from './components/Managermain'
import Mypage from './components/Mypage'
import Usercertificate from './components/Usercertificate'


import {createStackNavigator, createAppContainer, NavigationActions} from 'react-navigation'

/**Navigator 인덱스 설정 */
const AppNavigator=createStackNavigator({
  Home:Home,
  Mypage:Mypage,
  Checkplanner:Checkplanner,
  Confirmplanner:Confirmplanner,
  Insertplanner1:Insertplanner1,
  Insertplanner2,Insertplanner2,
  Insertplanner3,Insertplanner3,
  Main:Main,
  Managermain:Managermain,
  Usercertificate:Usercertificate
  
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