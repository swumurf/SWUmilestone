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
import Planner1 from './components/Planner1'
import Planner2 from './components/Planner2'
import Planner3 from './components/Planner3'
import Planner4 from './components/Planner4'
import Password from './components/Password'
import Mypage from './components/Mypage'
import ManagerMilage from './components/ManagerMilage'
import ManagerMain from './components/ManagerMain'
import ManagerLogin from './components/ManagerLogin'
import ManagerCertificate from './components/ManagerCertificate'
import ConfirmDetail from './components/ConfirmDetail'
import ConfirmPlanner from './components/ConfirmPlanner'




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
  Planner1:Planner1,
  Planner2:Planner2,
  Planner3:Planner3,
  Planner4:Planner4,
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