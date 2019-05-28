import React from 'react';
import { View, Text, StyleSheet } from 'react-natvie';
 
    export default class Join extends react.Component{
        render(){
            return (
                <View style={style.container}>
                    <Text>JoinUsScreen</Text>
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