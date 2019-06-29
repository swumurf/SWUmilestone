/**
date: May 17, 2019
Author: Ji yoon, Park
Title: Navigator function, importing SQLite, and async storage using react-native expo / SWUMURF_SWU Milage Project
 */

import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';
import {SQLite} from 'expo';
import { NavigationEvents } from 'react-navigation';

/*SQLite db open*/ 
const db=SQLite.openDatabase('user.db');
let testdata={
  id:'testid1',
  StudentName:'testname1'
};

/*async storage 에서 데이터 꺼내고, 받아오는 함수*/ 
_storeData=async()=>{
    try{
      await AsyncStorage.setItem('user',JSON.stringify(testdata),()=>{
        console.log("async success!!"); //함수 내 동작 바꾸기
      });
    }catch(error){
      console.log(error);
    }
  }
  _retrieveData=async()=>{
    
    try{
      const value=await AsyncStorage.getItem('user',(err,result)=>{
        console.log(result); //함수 내 동작 바꾸기
      });
    }
    catch(error){
      console.log(error);
    }
  }
  
/*Home 클래스 시작 */
export default class Home extends React.Component {


update(){
  db.transaction(tx=>{
    tx.executeSql(`SELECT * FROM user`,[],console.log("done!"));
  })
}


render() {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={{fontSize:20,paddingBottom:20}}>로그인 </Text>
      </View>


    
      <View style={styles.content}>
      <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderColor:'#000000'}}>
        <Text style={{fontSize:15}}> ID </Text>
        <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderColor:'#000000'}}>
            <TextInput style={styles.input} name="id"
          ></TextInput>

          
      </View>
      </View>
      <View>
      <Text style={{fontSize:15}}> PASSWORD </Text>
        <TextInput style={styles.input}onSubmitEditing={this._handleTextChange} name="password"></TextInput>
      </View>
      
    </View>

    <View style={styles.horizontality}>
      <TouchableOpacity style={styles.nextButton} onPress={()=>{
      _storeData();
      console.log('login onpress fuctionttt');
      this.props.navigation.navigate('Main')
      }}>
        <Text>로그인</Text></TouchableOpacity>
    </View>

    <View style={styles.horizontality}>
      <TouchableOpacity style={styles.nextButton} onPress={()=>{
      _retrieveData();
      console.log('회원가입 onpress fuctionttt');
      this.props.navigation.navigate('Main')
      }}>
        <Text>회원가입</Text></TouchableOpacity>
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
      height:20,
      width:'70%',
      borderColor:'#999999',
      borderWidth:1,
      margin:40,
      padding:5,
      textAlign:'center'
    
  } 
  ,
  button:{
    width:'30%',
    color:"#ffffff",
    borderColor:"#000000",
    fontSize:30,
    paddingBottom:30
  },
  nextButton:{
    marginTop:60,
    width:50,
    backgroundColor:'#ffffff',
    borderColor:"#000000",
    fontSize:40,
  },
  });

