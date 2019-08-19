import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';

export default class Main extends React.Component {
  constructor(props){
    super(props);
    this.state={
      id : '',
      mileage: 1000,
      gradGoal: '취업하기',
      curMonth: 5
    };
  }

 render(){
  return <View style={styles.container}>
    <View>
      <Text style={styles.titleText}>학번 : {this.state.id}</Text>
      <Text style={styles.titleText}>마일리지: {this.state.mileage}</Text>
      <Text style={styles.titleText}>졸업 후 목표: {this.state.gradGoal}</Text>
    </View>
    <View style={styles.listview}>
      <Text style={styles.titleText}>2019년 {this.state.curMonth}월 MILESTONE</Text>
      <Text>리스트 항목1</Text>
      <Text>리스트 항목2</Text>
      <Text>리스트 항목3</Text>
    </View>
    <View style={styles.buttonlist}>
      <Button style={styles.button}
      onPress={() => {
        this.props.navigation.navigate('Confirmplanner')
      }}
      title="마일스톤 활동 내역 확인하기"
      color="#999999"
      accessibilityLabel="Confirmplanner"
      ></Button>
      <Button style={styles.button}
      onPress={() => {
        this.props.navigation.navigate('Insertplanner1')
      }}
      title="마일스톤 목표 및 플래너 입력하기"
      color="#999999"
      accessibilityLabel="Insertplanner1"
      ></Button>
    </View>
    </View>
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
    },

    titleText: {
      fontSize: 20,
      paddingLeft: 5,
      paddingTop: 15,
    },

    listview: {
      alignItems: 'flex-start',
      justifyContent: 'space-around',
    },

    button:{
      width:'30%',
      color:"#ffffff",
      borderColor:"#000000",
      fontSize:30,
      paddingBottom:80,
    },

    buttonlist: {
      flex: 2,
      alignItems: 'center',
      justifyContent: 'flex-end',
      alignSelf: 'center',
    },
  });