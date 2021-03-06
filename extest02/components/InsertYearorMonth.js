import React from 'react';
import {Alert, StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';
import {RadioGroup} from 'react-native-radio-buttons-group'
import {RadioButton} from 'react-native-paper'
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Mainpage from './Mainpage';


let activityYear={
  activityYear: '',
};

_storeData=async()=>{
  try{
    await AsyncStorage.setItem('activityYear',JSON.stringify(activityYear),()=>{
      console.log("async success!!"); 
    });
  }catch(error){
    console.log(error);
  }
}

_retrieveData=async()=>{  
  try{
    const value=await AsyncStorage.getItem('activityYear',(err,result)=>{
      console.log(result); //함수 내 동작 바꾸기
    });
  }
  catch(error){
    console.log(error);
  }
}


export default class InsertYearorMonth extends React.Component {
  static navigationOptions = {
    header: null
  }
  
  constructor(props){
    super(props);
    const {navigation} = this.props;
    this.state = {
      activityYear: '', 
      value: null,
      studentIdx:navigation.getParam('studentIdx'),
      id : navigation.getParam('studentNum'),
    };
  }

  /* Swipe */
  onSwipeRight = (gestureState) => {
    console.log('이전 화면으로 돌아가기');
    this.props.navigation.navigate('Mainpage', {studentIdx:this.state.studentIdx, studentNum:this.state.id});
  }

  _gradenullAlter=()=>{
    Alert.alert('', '학년을 선택해주세요.', 
    [{
      text: '확인', onPress: ()=> console.log('확인')
    }]);
    console.log('null이당~');
  }

  _showAlter=()=>{
    Alert.alert()
  }

    render(){
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
        <View style={styles.buttonView}>
          <View  style={styles.button}>
          <RadioButton.Group onValueChange={value => this.setState({value})}
          value={this.state.value}>
          <View style={{paddingHorizontal: 30,}}>
            <Text>1학년</Text>
            <RadioButton value="1학년"></RadioButton>
          </View>
          <View style={{paddingHorizontal: 30,}}>
            <Text>2학년</Text>
            <RadioButton value="2학년"></RadioButton>
          </View>
          <View style={{paddingHorizontal: 30,}}>
            <Text>3학년</Text>
            <RadioButton value="3학년"></RadioButton>
          </View>
          <View style={{paddingHorizontal: 30,}}>
            <Text>4학년</Text>
            <RadioButton value="4학년"></RadioButton>
          </View>
          </RadioButton.Group>
          </View>
        </View>
        <View style={styles.buttonView2}>
          <Button color="#A53134" title="연간 추진 계획"
            onPress={() =>{
              {(this.state.value  === null) 
                ? (this._gradenullAlter())
                : (console.log('연간 추진 계획 ' + this.state.value), 
                  this.props.navigation.navigate('Insertplanner1', {activityYear:this.state.value, studentIdx:this.state.studentIdx, studentNum:this.state.id}));
              }}}
          ></Button>
          <Button color="#A53134" title="월간 추진 계획"
            onPress={() =>{
            {(this.state.value  === null) 
              ? (this._gradenullAlter())
              : (console.log('월간 추진 계획 ' + this.state.value), 
                this.props.navigation.navigate('Insertplanner2', {activityYear:this.state.value, studentIdx:this.state.studentIdx, studentNum:this.state.id}));
            }}}
            ></Button>
        </View>
      </View>
      </GestureRecognizer>
      );}
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

    buttonView: {
      flexDirection: 'row',
      color: 'blue',
      padding: 20,
      alignItems: 'center',
    },

    button: {
      flexDirection: 'row',
      width: "30%",
      height: 150,
    },

    buttonView2:{
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingBottom: 55,
      paddingHorizontal: 50,
      alignSelf: 'stretch',
    },
});
