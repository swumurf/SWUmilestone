import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage, ScrollView} from 'react-native';
import { DataTable, Cell, TableButton } from 'react-native-paper';
import { DataTablePagination, DataTableCell, DataTableRow } from 'material-bread';

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
      page: 0,
      perPage: 2,};
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
      password:this.state.activityMonth
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
        content: '1인 1SW 재산권 취득(SW등록)',
      },
      {
        content: '1인 1SW 재산권 취득(SW특허)',
      },
      {
        content: '1인 1SW 재산권 취득(SW논문)',
      },
      {
        content: 'SW능력 개발 활동',
      },
      {
        content: '외부기관 평가',
      },
      {
        content: 'SW중심대학 사업단 주관 행사 참여',
      },
      {
        content: '교외 SW 관련 행사 참여(포럼, 전시회 외)',
      },
      {
        content: 'SW 인턴 / 현장 실습 활동',
      },
      {
        content: 'SW 취업 활동',
      },
      {
        content: 'SW 창업 활동',
      },
      {
        content: 'SW 마일스톤 활동',
      },
      {
        content: 'SW 소학회, 동아리',
      },
      {
        content: 'SW 봉사활동',
      },
    ];
    console.log('screen3 activityYear: '+this.state.activityYear);
    console.log('screen3 activityMonth:' + this.state.activityMonth);
  return (
    <View style={styles.container}>
      <View style={styles.homeview}>
            <Button color='#083388' style = {styles.button} onPress={() => {
                this.props.navigation.navigate('Mainpage')}}
                title="HOME" color="#083388"
                accessibilityLabel="Main"></Button>
      </View>
      <Text style={styles.titleText}>세부 항목 리스트</Text>
      <ScrollView>
      <DataTable>
        {data.map(row => (
            <DataTableRow key={row.content}>
              <DataTableCell onPress={()=>this.setState({activityDetailNum:row.content}, Toast.show(row.content))} text={row.content} right/>
            </DataTableRow>
          ))}
      </DataTable>
      <Button color='#A53134' title="다음" 
        onPress={() => {
          this.props.navigation.navigate('Insertplanner4', 
            {activityYear:this.state.activityYear, 
             activityMonth:this.state.activityMonth, 
             activityDetailNum:this.state.activityDetailNum})}
      }></Button>
      </ScrollView>
    </View>
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