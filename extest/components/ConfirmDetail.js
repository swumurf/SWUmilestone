import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';

export default class ConfirmDetail extends React.Component {
    constructor(props){
        super(props);
        this.list={
            title: 'GURU1 수료하기',
            start: '2019.03',
            end: '2019.12',
            confirmImage: null,
            detail: '소프트웨어중심대학 GURU1 수료하기.'
        };
    }

    render(){
    return (
        <View style = {styles.container}>
           <View style={styles.homeview}>
            <Button style = {styles.button} onPress={() => {
                this.props.navigation.navigate('Main')}}
                title="홈버튼" color="#999999"
                accessibilityLabel="Main"></Button>
            </View>
        <View>
            <View>
                <Text style={styles.titleFont}>{this.list.title}</Text>
            </View>
            <View style = {styles.horizontality}>
                <Text style={styles.text}>시작 날짜         </Text>
                <View style = {styles.vertical}>
                    <Text style={styles.text}>{this.list.start}</Text>
                </View>
            </View>
            <View style = {styles.horizontality}>
                <Text style={styles.text}>종료 날짜         </Text>
                <View style = {styles.vertical}>
                    <Text style={styles.text}>{this.list.end}</Text>
                </View>
            </View>
            <View style = {styles.horizontality}>
                <Text style={styles.text}>증빙 자료 입력</Text>
                <View style = {styles.vertical}>
                    <TouchableOpacity onPress={() => {
                        this.props.navigation.navigate('Usercertificate')
                    }}>
                        <Text style = {styles.text}>제출하기</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style = {styles.horizontality}>
                <Text style={styles.text}>세부 내용 입력</Text>
                <View style = {styles.vertical}>
                    <Text style={styles.text}>{this.list.detail}</Text>
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

    title: {
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf : 'center',
    },

    titleFont:{
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf : 'center',
        fontSize: 20,
    },

    horizontality:{
        flexDirection : 'row',
        alignItems: 'center',
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

    text: {
        padding: 20,
        borderRadius: 5,
    },
});