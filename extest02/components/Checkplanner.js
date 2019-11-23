import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';

export default class Checkplanner extends React.Component {
    render(){
    return <View styles={styles.container}>
        <Text style={styles.welcome}>checkplannerpage</Text>
        
        </View>
    }

}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
    welcome:{
        flex:1,
        margin:20,
        backgroundColor:'orange',
        margin:10,
        textAlign:'center',
        fontSize:20,
        paddingTop:70
    }
});