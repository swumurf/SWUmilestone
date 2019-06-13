import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';

export default class Confirmplanner extends React.Component {
    render(){
    return (
    <View style = {styles.container}>
        <View style={styles.homeview}>
            <Button style = {styles.button} onPress={() => {
                this.props.navigation.navigate('Main')}}
                title="홈버튼" color="#999999"
                accessibilityLabel="Main"></Button>
        </View>
        <View style={styles.horizontality}>
            <Text style={styles.touchbutton}>1학년</Text>
            <Text style={styles.touchbutton}>2학년</Text>
            <Text style={styles.touchbutton}>3학년</Text>
            <Text style={styles.touchbutton}>4학년</Text>
        </View>
        <View style = {styles.vertical}>
            <View style = {styles.horizontality}>
                <Text style={styles.touchbutton}>1월</Text>
                <View style = {styles.vertical}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('ConfirmDetail')}}
                        accessibilityLabel="ConfirmDetail">
                        <Text style={styles.touchboardbutton}>GURU1 수료하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {styles.horizontality}>
                <Text style={styles.touchbutton}>2월</Text>
                <View style = {styles.vertical}>
                    <Text style={styles.touchboardbutton}>SW특허 출원</Text>
                    <Text style={styles.touchboardbutton}>국내 학술 발표 대회</Text>
                </View>
            </View>
            <View style = {styles.horizontality}>
                <Text style={styles.touchbutton}>3월</Text>
                <View style = {styles.vertical}>
                    <Text style={styles.touchboardbutton}>SW 전시회 관람</Text>
                    <Text style={styles.touchboardbutton}>해커톤 실시</Text>
                </View>
            </View>
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

    button:{
    width:'30%',
    color:"#ffffff",
    borderColor:"#000000",
    fontSize:30,
    paddingBottom:80,
    },

    horizontality:{
    flexDirection : 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    },

    touchbutton:{
    padding: 30,
    borderRadius:5,
    },

    touchboardbutton:{
    padding: 5,
    fontSize: 20,
    },

    vertical:{
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    },

    vertical1:{
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-start',
    alignSelf: 'flex-start',
    padding: 10,
    },
});