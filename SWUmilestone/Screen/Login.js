import React, { Component } from 'react';
import { 
    View,
    Text,
    StyleSheet
    } from 'react-natvie';
 
export default class Login extends Component{
    render(){
        return (
            <View style={style.container}>
                <Text>LoginScreen</Text>
            </View>
        );
    }
}
 
const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    }
})