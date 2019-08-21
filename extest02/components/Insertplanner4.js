import React from 'react';
import {StyleSheet,Text,View,TextInput,Button,ScrollView,DatePickerAndroid} from 'react-native';

export default class Insertplanner4 extends React.Component {
  constructor(props){
    super(props);
    const {navigation}=this.props;
    this.state={
      activityYear:navigation.getParam('activityYear'),
      activityMonth:navigation.getParam('activityMonth'),
      activityDetailNum:navigation.getParam('activityDetailNum'),
      startDate:'',expireDate:'',title:''};
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
            <Text style={styles.titleFont}>제목</Text>
            <TextInput style={styles.input} name="title"
            onChangeText={(text)=>this.setState({title:text})}></TextInput>
            
            
            <Text style={styles.titleFont}>시작 날짜</Text>
            <TextInput style={styles.input} name="startDate"
            onChangeText={(text)=>this.setState({startDate:text})}></TextInput>
            <Text style={styles.titleFont}>종료 날짜</Text>
            
            <TextInput style={styles.input} name="endday"
            onChangeText={(text)=>this.setState({expireDate:text})}></TextInput>
            
            <Button style={styles.nextButton} onPress={() => {
                this.postData(this.state.plan1,this.state.plan,this.state.plan3,this.state.startDate,this.state.expireDate,this.state.title);
                this.props.navigation.navigate('Main')}} title="플래너 저장" value="플래너 저장">
        
                </Button>
          </ScrollView>
            </View>
      );
      }
    }
      const styles = StyleSheet.create({
        container: {
          marginTop:30,
            backgroundColor: '#fff',
            justifyContent: 'space-around',
        },
        content:{
          width:'100%',
          paddingLeft:10,
          paddingRight:10,
          paddingBottom:10
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
            flex:1,
            borderColor:'black',
            marginTop:10,
            marginLeft:30,
            fontSize: 18,
            width:'85%'
        },
        titleFont1:{
          borderColor:'black',
          marginTop:20,
          marginLeft:30,
          fontSize: 18,
          width:'85%',
          textDecorationLine: 'underline'
      },
      
        horizontality:{
            width:'100%',
            flexDirection : 'row',
            fontSize:40,
            marginLeft:10,
            alignSelf: 'flex-start',
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
          width:'60%',
          backgroundColor:'#ffffff',
          borderColor:"#000000",
          borderWidth:1,
          fontSize:40,
        },
      
        text: {
            padding: 20,
            borderRadius: 5,
        },
        input:{
          flex:1,
          borderColor:'#999999',
          borderBottomColor:'#999999',
          borderWidth:1,
          margin:40,
          width:'80%',
          height:'15%',
          padding:3,
          textAlign:'center'
        } 
      });

