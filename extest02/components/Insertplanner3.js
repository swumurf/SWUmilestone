import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';


export default class Insertplanner3 extends React.Component {
    render(){

        return (
        <View style={styles.container}>
              <View>
                <Text style={styles.titleFont1}>세부 항목 리스트                          마일리지</Text>
            </View>
            <View>
                <TouchableOpacity>
                <Text style={styles.titleFont}>SW 특허출원                                30</Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                <Text style={styles.titleFont}>국내 학술 발표 대회                         30</Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                <Text style={styles.titleFont}>SW 전시회 관람                              20</Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity>
                <Text style={styles.titleFont}>교내 Programming Guru 수강               20</Text></TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity>
                <Text style={styles.titleFont}>TOPCIT 응시                             30</Text></TouchableOpacity>
            </View>
          
            <View style={styles.horizontality}>
              <TouchableOpacity style={styles.nextButton} onPress={() => {
                this.props.navigation.navigate('Insertplanner4')}}
                >
                <Text>다음</Text>
                </TouchableOpacity>
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
      marginTop:20,
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
      marginTop:10,
      marginLeft:30,
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
    marginTop:60,
    width:50,
    backgroundColor:'#ffffff',
    borderColor:"#000000",
    fontSize:40,
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