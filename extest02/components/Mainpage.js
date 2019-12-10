import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';
import { DataTable } from 'react-native-paper';

const arr= [{list: '리스트 항목1'}, {list: '리스트 항목2'}, {list: '리스트 항목3'}];

export default class Mainpage extends React.Component {
  static navigationOptions = {
    header: null
  } 

  static istrue = {
    isMileage: true,
    isGoal: true,
    isList: true,
  };

  static _MainpageRerender=()=>{
    Mainpage.istrue.isMileage = true;
    Mainpage.istrue.isGoal = true;
    Mainpage.istrue.isList = true;
  }

  /*디버깅용 데이터 넘기기*/
  constructor(props){
    super(props);
    const {navigation}=this.props;
    this.state={
      studentIdx:navigation.getParam('studentIdx'),
      id : navigation.getParam('studentNum'),
      mileage: null,
      grad_Goal: null,
      curMonth: new Date().getMonth() + 1,
      activities:'',
      list: [],
    };
  };
  //메인페이지 정보 요청 
  postData=async()=>{
    try{
      console.log('메인페이지 서버 요청');
      let url='http://15.165.96.110:3000/main/main/'+this.state.studentIdx;
      console.log('url: '+ url);
      console.log(Mainpage.istrue.isGoal);
      let res=await fetch(url,{
        method:'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type':'application/json'
        }
        });
        res=await res.json(); //서버로부터 응답

        if(Mainpage.istrue.isMileage){
          console.log("마일리지 데이터 불러오는중 ^-^");
          this.setState({mileage:res.data['mileage']});
          if(this.state.mileage != null){
            console.log(this.state.mileage);
            Mainpage.istrue.isMileage = false;
          }
        }else{
          console.log("마일리지 데이터 불러오기 끝!");
        }

        if(Mainpage.istrue.isGoal){
          console.log("목표 데이터 불러오는중 ^-^");
          this.setState({grad_Goal:res.data['goal_graduate']});
          if(this.state.grad_Goal != null){
            console.log("졸업후 목표 : " + this.state.grad_Goal);
            Mainpage.istrue.isGoal = false;
          }
        }else{
          console.log("목표 데이터 불러오기 끝!");
        }

        if(Mainpage.istrue.isList){
          console.log("리스트 데이터 불러오는중 ^-^");
          this.setState({activities:res.data['activity']});
          if(this.state.activities !== ''){
            console.log("리스트 : " + this.state.activities);
            Mainpage.istrue.isList = false;
            this.splitactivities();
          }
        }else{
          console.log("리스트 데이터 불러오기 끝!");
        }
    }catch(error){
      console.error(error);
    }
  }

  /*전체 활동 ',' 기준으로 자르는 함수*/
  splitactivities(){
    splitArray=this.state.activities.split(',');
    this.setState({list: this.state.activities.split(',')});
    console.log('splitArray');
    console.log(splitArray);
    console.log('list: '+this.state.list[0]);
  }

  render(){
    this.postData();
    const lapsList = this.state.list.map((data) => {
      return (
        <Text style={styles.listText}>{data}</Text>
      )
    })
    return (
      <View style={styles.container}>
        <View style={{alignItems: 'flex-end', paddingVertical: 20, paddingRight: 15,}}>
          <Button color='#083388' title="마이 페이지"
            onPress={()=>{
            console.log('Mypage');
            console.log(this.state.studentIdx);
            Mainpage._MainpageRerender();
            this.props.navigation.navigate('Mypage', {studentIdx:this.state.studentIdx, studentNum:this.state.id});
          }}
          >
          </Button>
        </View>
        <View style={styles.titleView}>
          <Text style={styles.titleText}>학번       {this.state.id}   님</Text>
          <View style={{height:1, width: "100%", backgroundColor: 'black'}}></View> 
          <Text style={styles.titleText}>나의 마일리지       {this.state.mileage}</Text>
          <View style={{height:1, width: "100%", backgroundColor: 'black'}}></View> 
          <Text style={styles.titleText}>나의 졸업 후 목표</Text>
          <Text style={styles.listText}>{this.state.grad_Goal}</Text>
          <View style={{height:1, width: "100%", backgroundColor: 'black'}}></View> 
        </View>
        <View style={styles.listview}>
        <Text style={styles.titleText}>2019년 {this.state.curMonth}월 MILESTONE</Text>
        {lapsList}
        </View>
        <View style={styles.buttonView}>
          <View style={{flex: 1, flexDirection: 'column'}}>
          <Button color='#A53134' style={{height: 100, flex:1}} title ="활동 내역 확인"
            onPress={()=>{
            console.log('활동 내역 확인');
            Mainpage._MainpageRerender();
            this.props.navigation.navigate('ConfirmPlanner', {studentIdx:this.state.studentIdx, studentNum:this.state.id});}}>
          </Button></View>
          <View style={{flex: 1, flexDirection: 'column'}}>
          <Button color='#A53134' style={{height: 100, flex:1}} title ="마일스톤 플래너 입력"
            onPress={()=>{
            console.log('마일스톤 플래너 입력');
            Mainpage._MainpageRerender();
            this.props.navigation.navigate('InsertYearorMonth', {studentIdx:this.state.studentIdx, studentNum:this.state.id});}}
          ></Button></View>
        </View>
      </View>
      );}
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