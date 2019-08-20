import React from 'react';
import {Alert, StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';
import {RadioGroup} from 'react-native-radio-buttons-group'
import {RadioButton} from 'react-native-paper'

export default class InsertYearorMonth extends React.Component {
  state={
    value: null,
  };

  _gradenullAlter=()=>{
    Alert.alert('', '학년을 선택해주세요.', 
    [{
      text: '확인', onPress: ()=> console.log('확인')
    }]);
    console.log('null이당~');
  }

  _showAlter=()=>{
    Alert.alert()
  }

    render(){
      return (
      <View style={styles.container}>
        <View style={{alignItems: 'flex-end', paddingBottom: 10, paddingRight: 10,}}>
          <Button color="#cccccc" title="HOME"
            onPress={()=>{
            console.log('Back to Mainpage');
            this.props.navigation.navigate('Mainpage');}}
          >
          </Button>
        </View>
        <View style={styles.buttonView}>
          <View  style={styles.button}>
          <RadioButton.Group onValueChange={value => this.setState({value})}
          value={this.state.value}>
          <View style={{paddingHorizontal: 30,}}>
            <Text>1학년</Text>
            <RadioButton value="1학년"></RadioButton>
          </View>
          <View style={{paddingHorizontal: 30,}}>
            <Text>2학년</Text>
            <RadioButton value="2학년"></RadioButton>
          </View>
          <View style={{paddingHorizontal: 30,}}>
            <Text>3학년</Text>
            <RadioButton value="3학년"></RadioButton>
          </View>
          <View style={{paddingHorizontal: 30,}}>
            <Text>4학년</Text>
            <RadioButton value="4학년"></RadioButton>
          </View>
          </RadioButton.Group>
          </View>
        </View>
        <View style={{paddingTop: 30}}>
          <Button title="연간 추진 계획"
            onPress={()=>{
            console.log('연간 추진 계획 선택 ' + this.state.value);
            this.props.navigation.navigate('Insertplanner1');
            }}
          ></Button>
          <Button title="월간 추진 계획"
            onPress={() =>{
            {(this.state.value  === null) 
              ? (this._gradenullAlter())
              : (console.log('null아니당'), this.props.navigation.navigate('Insertplanner1'));
            }
            }}

            ></Button>
        </View>
      </View>); }


}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: 'center',
    },

    buttonView: {
      flexDirection: 'row',
      color: 'blue',
      padding: 20,
    },

    button: {
      flexDirection: 'row',
      width: "30%",
      height: 150,
    },

    navigatorView : {

    },
});
