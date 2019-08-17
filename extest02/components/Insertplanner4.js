import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage,ScrollView} from 'react-native';


export default class Insertplanner4 extends React.Component {
  constructor(props){
    super(props);
    const {navigation}=this.props;
    this.state={plan1:navigation.getParam('plan1'),plan2:navigation.getParam('plan2'),plan3:navigation.getParam('plan3')};
  }
  
  render(){
    console.log('screen4 plan1: '+this.state.plan1);
    console.log('screen4 plan2:' + this.state.plan2);
    console.log('screen4 plan3: '+ this.state.plan3);
        return (
          <View>
            <ScrollView>
            
            <Text style={styles.titleFont}>제목</Text>

            <TextInput style={styles.input} name="title"></TextInput>
            
            
            <Text style={styles.titleFont}>시작 날짜</Text>
            
            <TextInput style={styles.input} name="startday"></TextInput>
            <Text style={styles.titleFont}>종료 날짜</Text>
            
            <TextInput style={styles.input} name="endday"></TextInput>
            

          
            <Text style={styles.titleFont}>증빙 자료 입력</Text>
            
              <TouchableOpacity style={styles.nextButton} onPress={() => {
                this.props.navigation.navigate('Main')}}>
              <Text>플래너 저장</Text>
                </TouchableOpacity>
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
    width:50,
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
    borderColor:'#999999',
    borderWidth:1,
    margin:40,
    width:'80%',
    height:'20%',
    padding:5,
    textAlign:'center'
  } 
});