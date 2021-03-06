/**
date: May 17, 2019~
Author: Ji yoon, Park
Title: Navigator function, importing MySQL, and async storage using react-native expo / SWUMURF_SWU Milage Project
Login.js 
*/

import React from 'react';
import {Alert,StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage, StatusBar, header, caretHidden} from 'react-native';

let loginInfo={
  studentNum:'',
  password:''
};

/*async storage 에서 데이터 꺼내고, 받아오는 함수*/ 
_storeData=async()=>{
    try{
      await AsyncStorage.setItem('loginInfo',JSON.stringify(loginInfo),()=>{
        console.log("async success!!"); 
      });
    }catch(error){
      console.log(error);
    }
  }
  _retrieveData=async()=>{  
    try{
      const value=await AsyncStorage.getItem('loginInfo',(err,result)=>{
        console.log(result); //함수 내 동작 바꾸기
      });
    }
    catch(error){
      console.log(error);
    }
  }

/**Alert */
_gradenullAlter=()=>{
  Alert.alert('', '로그인 정보가 맞지 않습니다', 
  [{
    text: '확인', onPress: ()=> console.log('확인')
  }]);

}

/*Home 클래스 시작 */
export default class Home extends React.Component {

static navigationOptions = {
  header: null
}

constructor(props){
  super(props);
  const {navigation} = this.props;
  this.state={
  studentNum:'', 
  password:'',
  resStatus:'',
  studentIdx:null};
}
/* 데이터 서버로 전송해서 서버 response 출력 함수*/
postData=async(studentNum,password)=>{
  try{
    console.log('fetch function 진입');
    let res=await fetch('http://15.165.96.110:3000/user/signin',{
    
    method:'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      studentNum:this.state.studentNum,
      password:this.state.password
    })
    });
    
   
    res=await res.json();
    
    //studentNum, password 기반으로 서버에서 studentIdx 리턴받아서 state.studentIdx에 저장
    console.log(res.data['studentIdx']);
    this.state.studentIdx=res.data['studentIdx'];
    this.setState({resStatus:res.status});
  return res;

  }catch(error){
    console.error(error);
  }
}

/*로그인 정보 사용자의 TextInput에서 받아와 state에 저장하는 함수*/
handleEmail=(text)=>{
  this.setState({studentNum:text})
}
handlePassword=(text)=>{
  this.setState({password:text})
}

/*state 에 저장되어 있는 이메일 loginInfo JSON 배열에 저장하는 함수*/
login(studentNum,password){
  console.log('studentNum :' + studentNum+' password'+password);
  loginInfo.studentNum=studentNum;
  loginInfo.password=password;
  this.postData(loginInfo);
  
}
/*sqlite 함수  -> terminate 05/30/2019
update(){
  db.transaction(tx=>{
    tx.executeSql(`SELECT * FROM user`,[],console.log("done!"));
  })
}*/


render() {
  return (
  <View style = {styles.container}>
    <StatusBar hidden={true}/>
    <View style = {styles.logColumn}>
      <View style = {styles.logRow}>
        <Text style={styles.logText}> 아이디 </Text>
        <View style={styles.input} ><TextInput style={styles.inputText} name="id" placeholder="PLEASE INSERT ID" placeholderTextColor="#ffffff"
          onChangeText={(text)=>this.setState({studentNum:text})}></TextInput></View>
        
      </View>
      <View style = {styles.logRow}>
        <Text style={styles.logText}> 비밀번호 </Text>
        <View style={styles.input}><TextInput style={styles.inputText} secureTextEntry={true} name="password" autoCapitalize="none" placeholder="PLEASE INSERT PASSWORD" placeholderTextColor="#ffffff" 
          onChangeText={(text)=>this.setState({password:text})}></TextInput></View>
        
      </View>
    </View>
    <View style = {styles.buttonView}>
      <Button color='#A53134' title="로그인"
        onPress={()=>{
        _storeData();
        //this.props.navigation.navigate('Mainpage');
        this.postData(this.state.studentNum,this.state.password).then(res=>{
    
          if(res.status=='200'){
             console.log('res.status 200');
             this.props.navigation.navigate('Mainpage',{studentIdx:this.state.studentIdx, studentNum:this.state.studentNum
              }); //Mainpage로 navigate
           }else{
            console.log('res.status 400');
            _gradenullAlter();
           }
        });}}></Button>
      <Button color='#A53134' title="회원가입" 
        onPress={()=>{
          console.log('signup');
          this.props.navigation.navigate('Signup');}}></Button>
    </View>
    <View>
      <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>{
      console.log('signin as a manager');
      this.props.navigation.navigate('ManagerMain');}}>
        <Text style={styles.managerText}>관리자로 로그인하기</Text>
      </TouchableOpacity>
    </View>
  </View>
  );
  }
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },

  logColumn:{
    backgroundColor: '#A53134',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 15,
  },

  logRow: {
    backgroundColor: '#A53134',
    flexDirection: 'row',
    //justifyContent: 'flex-start',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },

  logText:{
    fontSize: 20,
    padding: 5,
    flex: 1,
    color: '#ffffff',
  },

  buttonView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 15,
    paddingHorizontal: 50,
    alignSelf: 'stretch',
  },

  button:{
    alignItems: "stretch",
    color:"#999999",
    fontSize:30,
    paddingBottom:80,
    paddingHorizontal:200,
  },

  managerText:{
    padding: 15,
    fontSize: 15,
  },

  header:{
    width:'100%',
    height:'5%',
    backgroundColor:'#ff9a9a'
  },

  title:{
    width:'100%',
    height:'18%',
    justifyContent:'center'
  },
  
  content:{
    width:'100%',
    paddingLeft:10,
    paddingRight:10,
    paddingBottom:30  
  },

  input:{
    borderColor:'#000000',
    padding:5,
    textAlign:'center',
    fontSize: 15,
    alignItems: 'flex-start',
    flex: 2,
    color: '#ffffff',
  },

  inputText:{
    color: "#ffffff",
  },
  });