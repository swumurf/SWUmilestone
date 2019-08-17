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
import Mainpage from './components/Mainpage'
import Signup from './components/Signup'
import Upload from './components/Upload'
import Password from './components/Password'
import Mypage from './components/Mypage'
import ManagerMilage from './components/ManagerMilage'
import ManagerMain from './components/ManagerMain'
import ManagerLogin from './components/ManagerLogin'
import ManagerCertificate from './components/ManagerCertificate'
import ConfirmDetail from './components/ConfirmDetail'
import ConfirmPlanner from './components/ConfirmPlanner'
import Insertplanner1 from'./components/Insertplanner1'
import Insertplanner2 from'./components/Insertplanner2'
import Insertplanner3 from'./components/Insertplanner3'
import Insertplanner4 from'./components/Insertplanner4'





import {createStackNavigator, createAppContainer, NavigationActions} from 'react-navigation'

/**Navigator 인덱스 설정 */
const AppNavigator=createStackNavigator({
  Home:Home,
  Profile:Profile,
  Mainpage:Mainpage,
  Signup:Signup,
  ConfirmDetail:ConfirmDetail,
  ConfirmPlanner:ConfirmPlanner,
  ManagerCertificate:ManagerCertificate,
  ManagerLogin:ManagerLogin,
  ManagerMain:ManagerMain,
  ManagerMilage:ManagerMilage,
  Mypage:Mypage,
  Password:Password,
  Insertplanner1:Insertplanner1,
  Insertplanner2:Insertplanner2,
  Insertplanner3:Insertplanner3,
  Insertplanner4:Insertplanner4,
  Upload:Upload
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