import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';

const arr= [{list: '리스트 항목1'}, {list: '리스트 항목2'}, {list: '리스트 항목3'}];

export default class Mainpage extends React.Component {
  static navigationOptions = {
    header: null
  } 
  //static mileage;
  /*디버깅용 데이터 넘기기*/
  constructor(props){
    super(props);
    const {navigation}=this.props;
    let mileage=null;
    this.state={
      studentIdx:navigation.getParam('studentIdx'),
      id : navigation.getParam('studentNum'),
      mileage: null,
      grad_Goal: null,
      curMonth: 5,
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
      
      let res=await fetch(url,{
        method:'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type':'application/json'
        }
        });
        res=await res.json(); //서버로부터 응답
       /* 
        this.setState({mileage:res.data['mileage']}); //응답받은 마일리지
        this.setState({grad_Goal:res.data['goal_graduate']}); //응답받은 goal_graduate 
        this.setState({activities:res.data['activity']}); //응답받은 활동 activ ities 목록 (text)
        */

       //Mainpage.mileage=res.data['mileage'];
       //console.log('mileage');
       //console.log(Mainpage.mileage);
       
        //this.props.grad_Goal=res.data['goal_graduate'];

        this.props.mileage=res.data['mileage'];
        console.log('mileageeeee');
        console.log(this.props.mileage);
        this.splitactivities();
    }catch(error){
      console.error(error);
    }
  }

  /*전체 활동 ',' 기준으로 자르는 함수*/
  splitactivities(){
    splitArray=this.state.activities.split(',');
    console.log('splitArray');
    console.log(splitArray);
  }

  render(){
    this.postData();
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
          <Text style={styles.titleText}>나의 마일리지       {this.props.mileage}</Text>
          <View style={{height:1, width: "100%", backgroundColor: 'black'}}></View> 
          <Text style={styles.titleText}>나의 졸업 후 목표</Text>
          <Text style={styles.listText}>{this.state.gradGoal}</Text>
          <View style={{height:1, width: "100%", backgroundColor: 'black'}}></View> 
        </View>
        <View style={styles.listview}>
        <Text style={styles.titleText}>2019년 {this.state.curMonth}월 MILESTONE</Text>
        <Text style={styles.listText}>리스트 항목1</Text>
        </View>
        <View style={styles.buttonView}>
          <View style={{flex: 1, flexDirection: 'column'}}>
          <Button color='#A53134' style={{height: 100, flex:1}} title ="활동 내역 확인 및 서류 제출"
            onPress={()=>{
            console.log('활동 내역 확인 및 서류 제출');
            this.props.navigation.navigate('ConfirmPlanner', {studentIdx:this.state.studentIdx, studentNum:this.state.id});}}>
          </Button></View>
          <View style={{flex: 1, flexDirection: 'column'}}>
          <Button color='#A53134' style={{height: 100, flex:1}} title ="마일스톤 플래너 입력"
            onPress={()=>{
            console.log('마일스톤 플래너 입력');
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