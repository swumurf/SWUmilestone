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
        <TextInput style={{borderBottomColor:'#000000',width:'70%',height:35,padding:5}} name="id"></TextInput>
      </View>
      <View>
      <Text style={{fontSize:15}}> PASSWORD </Text>
        <TextInput style={styles.input}onSubmitEditing={this._handleTextChange} name="password"></TextInput>
      </View>
      
    </View>
    <Button width='30%' color='#b75858' style={styles.button} title="로그인" paddingBottom="30"
    onPress={()=>{
      _storeData();
      console.log('login onpress fuctionttt');
          }}
    >

  </Button>
  
  <Button style={styles.button}  
    onPress={()=>{
      _retrieveData();
    }}
    title="SIGN IN"
    color="#b75858"
    accessibilityLabel="SIGN IN"
    paddingBottom="30"
    >
  </Button>

  <Button style={styles.button}
    onPress={()=>{ 
    this.props.navigation.navigate('Profile')
    }}
    title="NAVIGATION"
    color="#999999"
    accessibilityLabel="NAVIGATION"
    paddingBottom="30"
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
    width:'70%',
    height:35,
    padding:5
  } 
  ,
  button:{
    width:'30%',
    color:"#ffffff",
    borderColor:"#000000",
    fontSize:30,
    paddingBottom:30
  }
  });

