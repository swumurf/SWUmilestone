import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';


export default class Profile extends React.Component {
  async componentDidMount(){
  
  }

  postData=async(str)=>{
    try{
      let res=await fetch('http://52.78.119.153:3000/',{
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        str
      })
      });
      res=await res;
      console.log(res);
      console.log(res._bodyText);
    
    }catch(error){
      console.error(error);
    }
  }
  
    render(){
      return (
        <View style={styles.container}>
          <TouchableOpacity onPress={() => this.postData('jiyoon')} style={{ padding: 20, backgroundColor: 'yellow' }}>
            <Text>Post</Text>
          </TouchableOpacity>
        </View>
      );
    }

}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    }
  });