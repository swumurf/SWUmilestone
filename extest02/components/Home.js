/**
date: May 17, 2019~
Author: Ji yoon, Park
Title: Navigator function, importing SQLite, and async storage using react-native expo / SWUMURF_SWU Milage Project
Login.js 
*/

import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';

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


/*Home 클래스 시작 */
export default class Home extends React.Component {


constructor(props){
  super(props);
  const {navigation}=this.props;
  this.state={studentNum:'', password:''};
}
/* 데이터 서버로 전송해서 서버 response 출력 함수*/
postData=async(studentNum,password)=>{
  try{
    console.log('fetch function 진입');
    let res=await fetch('http://52.78.119.153:3000/userInfo/signin',{
    
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
    
    res=await res;
    console.log("---------------response line1 까지 됨-------------");
    
    console.log(res);
    console.log("---------------response line2 까지 됨-------------");
    console.log(res._bodyText);
    console.log("---------------response line3 까지 됨-------------");
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
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{fontSize:20,paddingBottom:20}}>로그인 </Text>
      </View>


    
      <View style={styles.content}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderColor:'#000000'}}>
        <Text style={{fontSize:15}}> ID </Text>
        <TextInput style={styles.input} name="id"
        onChangeText={(text)=>this.setState({studentNum:text})}
        ></TextInput>
      </View>
      <View>
      <Text style={{fontSize:15}}> 비밀번호 </Text>
        <TextInput style={styles.input} name="password"
        onChangeText={(text)=>this.setState({password:text})}
        ></TextInput>
      </View>
      
    </View>
    <Button style={styles.button} title="로그인"
    onPress={()=>{
      _storeData();
      this.postData(this.state.studentNum,this.state.password);
      this.props.navigation.navigate('Mainpage');
          }}
    >

  </Button>
  <Button style={styles.button} title="회원 가입"
    onPress={()=>{
      //_storeData();
      //this.login(this.state.email,this.state.password);
      console.log('signup onpress fuction');
     // this.props.navigation.navigate('Signup');
          }}
    >

  </Button>
  
  <Button style={styles.button} title="관리자로 로그인하기"
    onPress={()=>{
      console.log('signin as a manager');
      this.props.navigation.navigate('Insertplanner1');
          }}
    >
  </Button>

  <Button style={styles.button} title="회원가입"
    onPress={()=>{
    console.log('signup');
    this.props.navigation.navigate('Signup');
          }}
    >
  </Button>
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
    width:100,
    height:40,
    padding:5,
    textAlign:'center'
  } 
  ,
  button:{
    width:'400',
    color:"#999999",
    borderColor:"#000000",
    fontSize:30,
    paddingBottom:30
  }
  });

