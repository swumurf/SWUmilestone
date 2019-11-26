import React from 'react';
import {SectionList,FlatList, StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class ConfirmPlanner extends React.Component {

  static navigationOptions = {
    header: null
  }
  
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
     activities:[]
    };
    
  }
  /*
  handleArrays(str){
    var newActivities=[];
    newActivities=(this.state.activities).concat(str);

    this.setState(this.state.activities=newActivities);
    console.log('newActivities:'+this.state.activities);
  }
  */
 
  postData=async()=>{
    try{
      console.log('Planner 전체 조회 함수');
      let url='http://15.165.96.110:3000/planner/planner/'+this.state.studentIdx;
      console.log('url: '+ url);
      
      let res=await fetch('http://15.165.96.110:3000/planner/planner/'+this.state.studentIdx, {
      
      method:'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
      }
      });
      
      res=await res.json();
      console.log(res.data.length);
      var activityNames=new Array();
      for(var i=0;i<res.data.length;i++){
       activityNames.push(res.data[i].activityName);
       //this.handleArrays(res.data[i].activityName);
        console.log(activityNames[i]);
      }

  
    
    }catch(error){
      console.error(error);
    }
  }


  render(){
    this.postData();
  return (
    <View styles={styles.container}>
       <SectionList
          sections={[
            {title: '1학년', data: ['SW에듀서포터즈 활동', 'SW English 수강']},
            {title: '2학년', data: ['SW특허출원', '교내 Programming GURU 수강', 'SW설계 및 개발', 'SW특강 참여', 'TOPCIT응시']},
            {title: '3학년', data: ['코딩 자격증 응시', 'SW중심대학 사업단 주관 행사 참여', 'SW컨퍼런스 참여', '해외 장기 현장실습', 'SW창업교육']},
            {title: '4학년', data: ['국내 학술 발표대회 우수상 수상', 'SW분야 취업 특강', 'SW 창업 경진대회 참가', 'SW소학회', '에듀 서포터즈 활동']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
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