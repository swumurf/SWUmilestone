import React from 'react';
import {SectionList,FlatList, StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';


var splitArray=new Array();
export default class ConfirmPlanner extends React.Component {
  
  static istrue= true;

  constructor(props){
    super(props);
    const {navigation}=this.props;
    this.state={
      studentIdx:1,
      activityYear:'',
      activityName:'',
      activityMonth:'',
      activityDetailNum:'',
      activityStartDate:'',
      activityExpireDate:'',
      evidentialIdx:'',
      activities:'',
      arrayNum:'',
      sIdx:navigation.getParam('studentIdx'),
      id : navigation.getParam('studentNum'),
    };
  }
  

  handleArrays(str){
    var newActivities=[];
    newActivities=(this.state.activities).concat(str);
    this.setState(this.state.activities=newActivities);
    console.log('newActivities:'+this.state.activities);
  }

  /*전체 활동 ',' 기준으로 자르는 함수*/
  splitactivities(){
    splitArray=this.state.activities.split(',');
    console.log('splitArray');
    console.log(splitArray);
    this.state.arrayNum=splitArray.length;
    console.log('arrayNum');
    console.log(this.state.arrayNum);
  }
  postData=async()=>{
    
    try{
      console.log('Planner 전체 조회 함수');
      let url='http://15.165.96.110:3000/planner/planner/'+this.state.studentIdx;
      console.log('url: '+ url);
      
      let res=await fetch(url,{
        method:'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type':'application/json'
        }
        });
        res=await res.json(); //서버로부터 응답
        if(ConfirmPlanner.istrue.is)
        console.log(res.data.length); 
        var activityNames=new Array(); //학번 별로 조회한 마일스톤 활동들 전체 배열
        var activityNamesString; //배열 -> String (나중에 화면에 뿌려주기 위해서)
  
        for(var i=0;i<res.data.length;i++){
         activityNames.push(res.data[i].activityName);  //res에서 받은 activityNames 지역변수 배열에 넣음
          console.log(activityNames[i]); 
        }
        //활동들 String 객체로 바꿈 (나중에 화면에 뿌려주기 위해서)
        activityNamesString=activityNames.toString();
        
        if(ConfirmPlanner.istrue){
          this.setState({activities:activityNamesString}); //전역 변수 개념이 react-native에 없어서 setState로 전역변수처럼 사용하도록 함
          this.splitactivities(); //전체 String ',' 를 기준으로 자름
          if(this.state.activities !== ''){
            console.log(this.state.istrue);
          }
        }else{
          console.log("데이터 불러오는중");
        }
    }catch(error){
      console.error(error);
    }
  }
  
  render(){
    this.postData();
    return(
      <View styles={styles.container}>
      <SectionList
         sections={[
           // ,splitArray[this.state.arrayNum-1]
           {title: '1학년', data: [splitArray[0],splitArray[1],splitArray[2],splitArray[3]],},
           {title: '2학년', data: ['SW특허출원', '교내 Programming GURU 수강', 'SW설계 및 개발', 'SW특강 참여', 'TOPCIT응시',]},
           {title: '3학년', data: ['코딩 자격증 응시', 'SW중심대학 사업단 주관 행사 참여', 'SW컨퍼런스 참여', '해외 장기 현장실습', 'SW창업교육']},
           {title: '4학년', data: ['국내 학술 발표대회 우수상 수상', 'SW분야 취업 특강', 'SW 창업 경진대회 참가', 'SW소학회', '에듀 서포터즈 활동']},
         ]}
         renderItem={({item}) => 
         <TouchableOpacity
          onPress={()=>{ConfirmPlanner.istrue = false, console.log(1234), this.props.navigation.navigate('Usercertificate', {studentIdx:this.state.sIdx, studentNum:this.state.id});}}>
         <Text style={styles.item}>{item}</Text></TouchableOpacity>}
         renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
         keyExtractor={(item, index) => index}
       />
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
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
});
