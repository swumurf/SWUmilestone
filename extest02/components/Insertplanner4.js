import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';


export default class Insertplanner4 extends React.Component {
    render(){

        return (
          <View style={styles.container}>
            <View>
            <View style={styles.horizontality}>
            <Text style={styles.titleFont}>제목</Text></View>
            <View style={styles.horizontality}>
            <TextInput style={styles.input} name="title"></TextInput>
            </View>
            </View>

            <View>
            <View style={styles.horizontality}>
            <Text style={styles.titleFont}>시작 날짜</Text></View>
            <View style={styles.horizontality}>
            <TextInput style={styles.input} name="startday"></TextInput>
            </View>
            </View>

            <View>
            <View style={styles.horizontality}>
            <Text style={styles.titleFont}>종료 날짜</Text></View>
            <View style={styles.horizontality}>
            <TextInput style={styles.input} name="endday"></TextInput>
            </View>
            </View>

            <View>
            <View style={styles.horizontality}>
            <Text style={styles.titleFont}>증빙 자료 입력</Text>
            <View style={styles.horizontality}>
              <TouchableOpacity style={styles.nextButton} onPress={() => {
                this.props.navigation.navigate('Usercertificate')}}>
              <Text>증빙자료 입력하기</Text>
                </TouchableOpacity>
                </View>
                </View>
            </View>
              

          

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
    height:'15%',
    padding:5,
    textAlign:'center'
  } 
});