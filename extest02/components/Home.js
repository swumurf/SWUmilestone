/**
date: May 17, 2019~
Author: Ji yoon, Park
Title: Navigator function, importing MySQL, and async storage using react-native expo / SWUMURF_SWU Milage Project
Login.js 
*/

import React from 'react';
import {Alert,StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';

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


constructor(props){
  super(props);
  const {navigation}=this.props;
  this.state={studentNum:'', password:'',resStatus:''};
}
/* 데이터 서버로 전송해서 서버 response 출력 함수*/
postData=async(studentNum,password)=>{
  try{
    console.log('fetch function 진입');
    let res=await fetch('http://13.125.153.65:3000/user/signin',{
    
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
    console.log("---------------response line1 까지 됨-------------");
    
    console.log(res);
    console.log("---------------response line3 까지 됨-------------");
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
    <View style = {styles.logColumn}>
      <View style = {styles.logRow}>
        <Text style={styles.logText}> 아이디 </Text>
        <View style={styles.input} ><TextInput name="id" placeholder="PLEASE INSERT ID" placeholderTextColor="blue" 
          onChangeText={(text)=>this.setState({studentNum:text})}></TextInput></View>
        
      </View>
      <View style = {styles.logRow}>
        <Text style={styles.logText}> 비밀번호 </Text>
        <View style={styles.input}><TextInput  name="password" placeholder="PLEASE INSERT PASSWORD" placeholderTextColor="blue" 
          onChangeText={(text)=>this.setState({password:text})}></TextInput></View>
        
      </View>
    </View>
    <View style = {styles.buttonView}>
      <Button title="로그인"
        onPress={()=>{
        _storeData();
        this.props.navigation.navigate('Mainpage');
        this.postData(this.state.studentNum,this.state.password).then(res=>{
         
          console.log('res.body.data'+res.data['studentIdx']);
          if(res.status=='200'){

             console.log('res.status 200');
             this.props.navigation.navigate('Mainpage'); //Mainpage로 navigate
           }else{
            console.log('res.status 400');
            _gradenullAlter();
           }
        }
        );
       
      
      }
        }></Button>
      <Button title="회원가입" 
        onPress={()=>{
          console.log('signup');
          this.props.navigation.navigate('Signup2');}}></Button>
    </View>
    <View>
      <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>{
      console.log('signin as a manager');
      this.props.navigation.navigate('ManagerMain');}}>
        <Text style={styles.managerText}>관리자로 로그인하기</Text>
      </TouchableOpacity>
    </View>
    <View>
    <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>{
      console.log('LogIn for Debug');
      this.props.navigation.navigate('MainDebug');}}>
        <Text style={styles.managerText}>디버그용 로그인</Text>
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
    backgroundColor: '#cccccc',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    padding: 15,
  },

  logRow: {
    backgroundColor: '#cccccc',
    flexDirection: 'row',
    //justifyContent: 'flex-start',
    justifyContent: 'space-between',
    alignItems: 'stretch',
  },

  logText:{
    fontSize: 20,
    padding: 5,
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
    alignItems: 'flex-end',
  },
  });

