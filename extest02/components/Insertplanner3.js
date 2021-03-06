import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage, ScrollView, Alert} from 'react-native';
import { DataTable, Cell, TableButton } from 'react-native-paper';
import { DataTablePagination, DataTableCell, DataTableRow } from 'material-bread';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

_showDialog=(detail)=>{
  Alert.alert(
    '세부 항목 선택!',
    detail+' 선택하셨습니다.',
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
}

export default class Insertplanner3 extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props){
    super(props);
    const {navigation}=this.props;
    this.state={
      activityYear:navigation.getParam('activityYear'),
      activityMonth:navigation.getParam('activityMonth'),
      activityDetailNum:'',
      activityContain: '',
      page: 0,
      perPage: 2,
      studentIdx:navigation.getParam('studentIdx'),
      id : navigation.getParam('studentNum'),
    };
  }
  /* Swipe */
  onSwipeRight = (gestureState) => {
      console.log('이전 화면으로 돌아가기');
      this.props.navigation.navigate('Insertplanner2', {studentIdx:this.state.studentIdx, studentNum:this.state.id});
  }

  /* 데이터 서버로 전송해서 서버 response 출력 함수*/
postData=async(studentNum,password)=>{
  try{
    console.log('insert planner3 fetch function 진입');
    let res=await fetch('http://13.125.153.65:3000/user/signin',{
    
    method:'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      studentNum:this.state.activityYear,
      password:this.state.activityMonth,
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

  render(){
    const data= [
      {
        content: ['1인 1SW 재산권 취득(SW등록)', 0],
      },
      {
        content: ['1인 1SW 재산권 취득(SW특허)', 1],
      },
      {
        content: ['1인 1SW 재산권 취득(SW논문)', 2],
      },
      {
        content: ['SW능력 개발 활동', 3],
      },
      {
        content: ['외부기관 평가', 4],
      },
      {
        content: ['SW중심대학 사업단 주관 행사 참여', 5],
      },
      {
        content: ['교외 SW 관련 행사 참여(포럼, 전시회 외)', 6],
      },
      {
        content: ['SW 인턴 / 현장 실습 활동', 7],
      },
      {
        content: ['SW 취업 활동', 8],
      },
      {
        content: ['SW 창업 활동', 9],
      },
      {
        content: ['SW 마일스톤 활동', 10],
      },
      {
        content: ['SW 소학회, 동아리', 11],
      },
      {
        content: ['SW 봉사활동', 12],
      },
    ];
    console.log('screen3 activityYear: '+this.state.activityYear);
    console.log('screen3 activityMonth:' + this.state.activityMonth);
    /* Swipe */
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
  return (
  <GestureRecognizer 
    onSwipeRight={this.onSwipeRight}
    config={config}
    style={{
    flex: 1,
  }}>
    <View style={styles.container}>
      <View style={styles.homeview}>
            <Button color='#083388' style = {styles.button} onPress={() => {
                this.props.navigation.navigate('Mainpage', {studentIdx:this.state.studentIdx, studentNum:this.state.id})}}
                title="HOME" color="#083388"
                accessibilityLabel="Main"></Button>
      </View>
      <Text style={styles.titleText}>세부 항목 리스트</Text>
      <ScrollView>
      <DataTable>
        {data.map(row => (
            <DataTableRow key={row.content}>
              <DataTableCell onPress={
                ()=>this.setState({activityContain:row.content[0], activityDetailNum: row.content[1]}, _showDialog(row.content[0]))} 
                text={row.content[0]} right/>
            </DataTableRow>
          ))}
      </DataTable>
      <Button color='#A53134' title="다음" 
        onPress={() => {
          this.props.navigation.navigate('Insertplanner4', 
            {activityYear:this.state.activityYear, 
             activityMonth:this.state.activityMonth, 
             activityDetailNum:this.state.activityDetailNum,
             activityContain:this.state.activityContain,
             studentIdx:this.state.studentIdx, studentNum:this.state.id})}
      }></Button>
      </ScrollView>
    </View>
    </GestureRecognizer>
  );
 }
}

const styles = StyleSheet.create({
  container: {
  marginTop:30,
  flex: 1,
  backgroundColor: '#fff',
  justifyContent: 'space-between',
  flexDirection: 'column',
},

homeview:{
  justifyContent: 'flex-end',
  alignSelf: 'flex-end',
  padding: 10,
},

titleText:{
  borderColor:'black',
  justifyContent: 'center',
  alignSelf : 'center',
  textAlign: 'center',
  paddingVertical: 25,
  fontSize: 18,
  width:'85%',
  textDecorationLine: 'underline',
},

dataTable: {
  justifyContent: 'center',
  margin: 15,
  marginVertical: 55,
  paddingBottom: 25,
  textAlign: 'center',
  alignItems: 'center',
},

tableText: {
  flex: 1,
  textAlign: 'center',
  alignContent: 'center',
  alignSelf: 'center',
  alignItems: 'center',
},

nextButton:{
  width:'100%',
  backgroundColor:'#0054FF',
  borderColor:"#000000",
  flexDirection: 'row-reverse',
  fontSize:15,
  color: '#000000',
},

horizontality:{
  flexDirection: 'row',
  justifyContent: 'space-between',
  paddingBottom: 55,
  paddingHorizontal: 50,
  alignSelf: 'stretch',
},
});