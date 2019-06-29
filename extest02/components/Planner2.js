import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';


export default class Planner2 extends React.Component {
    render(){
        return (
        <View style={styles.container}>
           <View style={styles.container}>
                <Text style={styles.titleFont}>월간 추진 계획을 입력할 달을 선택해주세요.</Text>
            </View>
           <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton}>
              <Text>1월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton}>
              <Text>2월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton}>
              <Text>3월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton}>
              <Text>4월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton}>
              <Text>5월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton}>
              <Text>6월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton}>
              <Text>7월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton}>
              <Text>8월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton}>
              <Text>9월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton}>
              <Text>10월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton}>
              <Text>11월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton}>
              <Text>12월</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.horizontality}>
              <Button onPress={() => {
                this.props.navigation.navigate('Planner3')}}
                title="next" color="#999999"  width='100'
                backgroundColor='#ffffff'
                borderColor="#000000" fontSize='20'
                accessibilityLabel="Main"></Button>
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
      justifyContent: 'center',
      alignSelf : 'center',
      fontSize: 18,
      width:'85%'
  },

  horizontality:{
      flexDirection : 'row',
      fontSize:40,
      marginTop:10,
      marginLeft:30,
      justifyContent: 'center',
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