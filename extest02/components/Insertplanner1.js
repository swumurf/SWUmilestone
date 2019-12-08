import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

let loginInfo={
    studentNum:'',
    password:''
};

let goal={
    temp: '',
};

export default class Insertplanner1 extends React.Component {
  static navigationOptions = {
      header: null
  }

  constructor(props) {
      super(props);
      const {
          navigation
      } = this.props;
      this.state = {
          goal1: '',
          goal2: '',
          goal3: '',
          goal4: '',
          temp: '',
          activityYear: navigation.getParam('activityYear'),
      };
  }
  
  /* Swipe */
  onSwipeRight = (gestureState) => {
    console.log('이전 화면으로 돌아가기');
    this.props.navigation.navigate('InsertYearorMonth');
  }

  postData = async (goal1, goal2, goal3, goal4) => {
      try {
          console.log('insert 년간 플래너 fetch function 진입');
          let res = await fetch('http://15.165.96.110:3000/planner/plannerYear', {

              method: 'POST',
              headers: {
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                  studentIdx: 1,
                  goal1: this.state.goal1,
                  goal2: this.state.goal2,
                  goal3: this.state.goal3,
                  goal4: this.state.goal4,
              })
          });

          res = await res;
          console.log("---------------response line1 까지 됨-------------");
          console.log(res);
          console.log("---------------response line2 까지 됨-------------");
          console.log(res._bodyText);
          console.log("---------------response line3 까지 됨-------------");
      } catch (error) {
          console.error(error);
      }
  }

  _goalSelect = () => {
      switch (this.state.activityYear) {
          case '1학년':
              this.state.goal1 = this.state.temp;
              console.log('1학년 목표 : ' + this.state.goal1);
              break;
          case '2학년':
              this.state.goal2 = this.state.temp;
              console.log('2학년 목표 : ' + this.state.goal2);
              break;
          case '3학년':
              this.state.goal3 = this.state.temp;
              console.log('3학년 목표 : ' + this.state.goal3);
              break;
          case '4학년':
              this.state.goal4 = this.state.temp;
              console.log('4학년 목표 : ' + this.state.goal4);
              break;
          default:
              console.log('학년 선택 잘못함 디용?');
      }
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
        <View style = {styles.container}>
            <View style={styles.homeview}>
            <Button color='#083388' style = {styles.button} onPress={() => {
                this.props.navigation.navigate('Mainpage')}}
                title="HOME" color="#083388"
                accessibilityLabel="Main"></Button>
            </View>
            <View>
            <Text style={styles.titleFont}>연간 추진 계획을 입력해주세요</Text>
            <View style={{flexDirection:'row',justifyContent:'flex-start',alignItems:'stretch',borderColor:'#000000'}}>
            <TextInput style={styles.input} placeholder='Enter new to do' name="temp" 
            onChangeText={(temp)=>this.setState({temp})}></TextInput></View></View>
            <Button color='#A53134' title="플래너 저장" onPress={()=>{
                (this._goalSelect());
                (this.postData(this.state.goal1, this.state.goal2, this.state.goal3, this.state.goal4));
                this.props.navigation.navigate('Mainpage');}}>
            </Button>
            </View>
            </GestureRecognizer>
    ); }

    
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#fff',
        // justifyContent: 'space-between',
        // flexDirection: 'column',
        // flex: 1,
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

    title: {
        justifyContent: 'center',
        alignSelf : 'center',
        marginLeft:'20%'
    },

    titleFont:{
        borderColor:'black',
        justifyContent: 'flex-start',
        alignSelf : 'center',
        fontSize: 18,
        width:'85%'
    },

    horizontality:{
        flexDirection : 'row',
        justifyContent: 'space-between',
        alignSelf: 'stretch',
        paddingVertical: 5,
        paddingHorizontal: 35,
    },

    vertical:{
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'center',
        alignSelf: 'flex-start',
    },

    button:{
        width:'30%',
        color:"#ffffff",
        borderColor:"#000000",
        fontSize:30,
        paddingBottom:80,
    },
    nextButton:{
    marginLeft:30,
      width:'100%',
      backgroundColor:'#ffffff',
      borderColor:"#000000",
      fontSize:15,
    },

    text: {
        padding: 20,
        borderRadius: 5,
    },
    input:{
      height:40,
      width:'95%',
      borderColor:'#999999',
      borderWidth:1,
      margin:40,
      width:'80%',
      height:'80%',
      padding:5,
      textAlign:'center'
    } 
});