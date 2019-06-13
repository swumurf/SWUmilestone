import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';

export default class ConfirmDetail extends React.Component {
    render(){
    return (
        <View style = {styles.container}>
           <View style={styles.homeview}>
            <Button style = {styles.button} onPress={() => {
                this.props.navigation.navigate('Main')}}
                title="홈버튼" color="#999999"
                accessibilityLabel="Main"></Button>
        </View>  
        </View>
    );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'flex-start',
        justifyContent: 'space-around',
    },

    homeview:{
        justifyContent: 'flex-end',
        alignSelf: 'flex-end',
        padding: 10,
        },
});