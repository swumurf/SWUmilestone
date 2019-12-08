import React from 'react';
import { Linking } from 'expo';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Button,
  AsyncStorage,
  Alert,
} from 'react-native';


export default class Mypage extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
    const {navigation}=this.props;
    this.state={
      studentIdx:navigation.getParam('studentIdx'),
      id : navigation.getParam('studentNum'),
    };
  };

  _showDialog=()=>{
    Alert.alert(
      'SWUmilestone',
      '서울여자대학교 소프트웨어중심대학\n서울여자대학교 마일스톤\n만든이 : 박지윤, 주윤아',
      [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  }

  _handlePress = () => {
    Linking.openURL('http://swedubiz.cafe24.com/%EC%95%8C%EB%A6%BC%C2%B7%EC%86%8C%EC%8B%9D/%EA%B3%B5%EC%A7%80%EC%82%AC%ED%95%AD/');
    this.props.onPress && this.props.onPress();
  };

  render() {
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
        <View style={{alignItems: 'flex-end', paddingVertical: 20, paddingRight: 15,}}>
          <Button color='#083388' title="HOME"
            onPress={()=>{
            console.log('Mainpage');
            console.log(this.state.studentIdx);
            this.props.navigation.navigate('Mainpage2', {studentIdx:this.state.studentIdx, studentNum:this.state.id});
          }}
          >
          </Button>
        </View>
        <View style={styles.titleView}>
          <View style={{marginVertical: 30}}>
            <Text style={{fontSize: 20}}>학번       {this.state.id}   님</Text>
          </View>
          <View>
            <TouchableOpacity 
            onPress={()=>{{this._handlePress();}}}>
              <Text style={{fontSize: 20, marginVertical: 15}}>공지사항</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('Password');}}>
              <Text style={{fontSize: 20, marginVertical: 15}}>비밀번호 변경</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>{ this._showDialog();}}>
              <Text style={{fontSize: 20, marginVertical: 15}}>서비스 소개</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={()=>{ this.props.navigation.navigate('Home');}}>
              <Text style={{fontSize: 20, marginVertical: 15}}>로그아웃</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flex: 1,
  },

  titleView: {
    backgroundColor: '#cccccc',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },

  titleText: {
    fontSize: 18,
    paddingLeft: 15,
    paddingTop: 15,
    paddingBottom: 15,
  },

  listText:{
    fontSize: 12, 
    padding: 3, 
    color: '#5D5D5D', 
    paddingLeft: 15, 
    paddingBottom: 15,
  },

  listview: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },

  buttonView:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%'
  },

  
});