import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';


const arr= [{list: '리스트 항목1'}, {list: '리스트 항목2'}, {list: '리스트 항목3'}];

export default class Mainpage extends React.Component {
  static navigationOptions = {
    header: null
  } 
  /*디버깅용 데이터 넘기기*/
  constructor(props){
    super(props);
    this.state={
      id : '2015111573',
      mileage: 1000,
      gradGoal: '취업하기',
      curMonth: 5,
      list: [],
    };
  };
  
  
  render(){
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'flex-end', paddingVertical: 20, paddingRight: 15,}}>
          <Button color='#083388' title="마이 페이지"
            onPress={()=>{
            console.log('Mypage');
            this.props.navigation.navigate('Mypage');}}
          >
          </Button>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>학번       {this.state.id}   님</Text>
          <View style={{height:1, width: "100%", backgroundColor: 'black'}}></View> 
          <Text style={styles.titleText}>나의 마일리지       {this.state.mileage}</Text>
          <View style={{height:1, width: "100%", backgroundColor: 'black'}}></View> 
          <Text style={styles.titleText}>나의 졸업 후 목표</Text>
          <Text style={styles.listText}>{this.state.gradGoal}</Text>
          <View style={{height:1, width: "100%", backgroundColor: 'black'}}></View> 
        </View>
        <View style={styles.listview}>
        <Text style={styles.titleText}>2019년 {this.state.curMonth}월 MILESTONE</Text>
        <Text style={styles.listText}>리스트 항목1</Text>
        <Text style={styles.listText}>리스트 항목2</Text>
        <Text style={styles.listText}>리스트 항목3</Text>
        </View>
        <View style={styles.buttonView}>
          <View style={{flex: 1, flexDirection: 'column'}}>
          <Button color='#A53134' style={{height: 100, flex:1}} title ="활동 내역 확인 및 서류 제출"
            onPress={()=>{
            console.log('활동 내역 확인 및 서류 제출');
            this.props.navigation.navigate('ConfirmPlanner');}}>
          </Button></View>
          <View style={{flex: 1, flexDirection: 'column'}}>
          <Button color='#A53134' style={{height: 100, flex:1}} title ="마일스톤 플래너 입력"
            onPress={()=>{
            console.log('마일스톤 플래너 입력');
            this.props.navigation.navigate('InsertYearorMonth');}}
          ></Button></View>
        </View>
      </View>);}
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