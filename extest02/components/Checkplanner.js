import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';

export default class Checkplanner extends React.Component {
    static navigationOptions = {
        header: null
    }

    render(){
    return <View><Text>checkplannerpage</Text></View>
    }

}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    },
});