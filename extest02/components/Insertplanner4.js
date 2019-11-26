import React from 'react';
import {StyleSheet,Text,View,TextInput,Button,ScrollView,DatePickerAndroid} from 'react-native';
import DateTimePicker from "react-native-modal-datetime-picker";
import moment from 'moment';

export default class Insertplanner4 extends React.Component {
  static navigationOptions = { 
    header: null
  }
  
  constructor(props){
    super(props);
    const {navigation}=this.props;
    this.state={
      activityYear:navigation.getParam('activityYear'),
      activityMonth:navigation.getParam('activityMonth'),
      activityDetailNum:navigation.getParam('activityDetailNum'),
      title:'', selectedStartDate: 'YYYY-MM-DD', selectedEndDate: 'YYYY-MM-DD',
      isDateTimePickerVisible: false,
      isDateTimePickerVisibleEnd: false,};
  }

  showDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: true });
  };
 
  hideDateTimePicker = () => {
    this.setState({ isDateTimePickerVisible: false });
  };
 
  handleStartDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.setState({selectedStartDate: moment(date).format('YYYY-MM-DD')});
    this.startDateSetting(this.state.selectedStartDate);
  };
  
  startDateSetting = date => {
    console.log(date);
    this.hideDateTimePicker();
  }

  showEndDateTimePicker = () => {
    this.setState({ isDateTimePickerVisibleEnd: true });
  };
 
  hideEndDateTimePicker = () => {
    this.setState({ isDateTimePickerVisibleEnd: false });
  };

  handleEndDatePicked = date => {
    console.log("A date has been picked: ", date);
    this.setState({selectedEndDate: moment(date).format('YYYY-MM-DD')});
    console.log(this.state.selectedStartDate);
    console.log(this.state.selectedEndDate);
    this.endDateSetting(this.state.selectedEndDate);
  };

  endDateSetting = date => {
    console.log(date);
    this.hideDateTimePicker();
  }

  postData=async(activityYear,activityMonth,activityDetailNum,startDate,expireDate,title)=>{
    try{
      console.log('insert planner3 fetch function 진입');
      let res=await fetch('http://13.125.153.65:3000/planner/planner',{
      
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        studentIdx:1,
        activityName:this.state.title,
        activityYear:this.state.activityYear,
        activityMonth:this.state.activityMonth,
        activityDetailNum:this.state.activityDetailNum,
        activityStartDate:this.state.startDate,
        activityExpireDate:this.state.expireDate,
        activityContain:'sdf'
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
    console.log('screen4 activityYear: '+this.state.activityYear);
    console.log('screen4 activityMonth:' + this.state.activityMonth);
    console.log('screen4 activityDetailNum: '+ this.state.activityDetailNum);
    
    return (
      <View style={styles.container}>
        <ScrollView>
          <Text style={styles.titleText}>월간 마일스톤 플래너 작성</Text>
          <Text style={styles.titleFont}>제목</Text>
          <TextInput style={styles.input} name="title"
            onChangeText={(text)=>this.setState({title:text})}></TextInput>
          <View style={styles.buttonView}>
          <Button title="시작 날짜" onPress={this.showDateTimePicker} />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisible}
            onConfirm={this.handleStartDatePicked}
            onCancel={this.hideDateTimePicker}
          ></DateTimePicker>
          <Text style={{alignSelf: 'center', fontSize: 15, paddingRight: 50}}>{this.state.selectedStartDate}</Text>
          </View>
          <View style={styles.buttonView}>
          <Button title="종료 날짜" onPress={this.showEndDateTimePicker} />
          <DateTimePicker
            isVisible={this.state.isDateTimePickerVisibleEnd}
            onConfirm={this.handleEndDatePicked}
            onCancel={this.hideEndDateTimePicker}
          ></DateTimePicker>
          <Text style={{alignSelf: 'center', fontSize: 15, paddingRight: 50}}>{this.state.selectedEndDate}</Text>
          </View>
        </ScrollView>
        <Button title="플래너 저장" onPress={() => {
          this.postData(this.state.plan1,this.state.plan,this.state.plan3,this.state.selectedStartDate,this.state.selectedEndDate,this.state.title);
          this.props.navigation.navigate('Mainpage')}} value="플래너 저장"></Button>
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
  
  titleFont:{
      flex:1,
      borderColor:'black',
      marginTop: 50,
      marginLeft: 40,
      fontSize: 20,
      width:'85%'
  },

  input:{
    flex:1,
    borderColor:'#999999',
    borderBottomColor:'#999999',
    borderWidth:1,
    //margin:40,
    marginLeft: 40,
    marginVertical: 40,
    width:'80%',
    height:'15%',
    padding:3,
    textAlign:'center'
  },

  buttonView:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 55,
    marginLeft: 40,
    marginVertical: 40,
    alignSelf: 'stretch',
  },
});

