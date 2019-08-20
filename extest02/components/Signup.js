import React from 'react';

import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';


export default class Signup extends React.Component {
  constructor(props){
    super(props);
    const {navigation}=this.props;
    this.state={studentNum:'', password:'',studentName:'',major1:'',major2:'',major3:'',supervisor:'',phoneNum:'',email:'',mileage:'',goal_graduate:''};
  }  
  
  render(){

    
        return (
          <View style = {styles.container}>
          <View style = {styles.logColumn}>
            <View style = {styles.logRow}>
              <Text style={styles.logText}> *학번 </Text>
              <TextInput style={styles.input} name="id" placeholder="학번을 입력해주세요" placeholderTextColor="#99A3A4" 
                onChangeText={(text)=>this.setState({studentNum:text})}></TextInput>
            </View>
            <View style = {styles.logRow}>
              <Text style={styles.logText}>  이름 </Text>
              <TextInput style={styles.input} name="password" placeholder="이름을 입력해주세요" placeholderTextColor="#99A3A4" 
                onChangeText={(text)=>this.setState({studentName:text})}></TextInput>
            </View>
            <View style = {styles.logRow}>
              <Text style={styles.logText}> *비밀번호 </Text>
              <TextInput style={styles.input} name="password" placeholder="비밀번호를 입력해주세요" placeholderTextColor="#99A3A4" 
                onChangeText={(text)=>this.setState({password:text})}></TextInput>
            </View>
            <View style = {styles.logRow}>
              <Text style={styles.logText}>  제1전공 </Text>
              <TextInput style={styles.input} name="major1" placeholder="제1전공을 입력해주세요" placeholderTextColor="#99A3A4" 
                onChangeText={(text)=>this.setState({major1:text})}></TextInput>
            </View>
            <View style = {styles.logRow}>
              <Text style={styles.logText}>  제2전공 </Text>
              <TextInput style={styles.input} name="major2" placeholder="제2전공을 입력해주세요" placeholderTextColor="#99A3A4" 
                onChangeText={(text)=>this.setState({major2:text})}></TextInput>
            </View>
            <View style = {styles.logRow}>
              <Text style={styles.logText}>  제3전공 </Text>
              <TextInput style={styles.input} name="major3" placeholder="제3전공을 입력해주세요" placeholderTextColor="#99A3A4" 
                onChangeText={(text)=>this.setState({major3:text})}></TextInput>
            </View>
            <View style = {styles.logRow}>
              <Text style={styles.logText}>  지도교수 </Text>
              <TextInput style={styles.input} name="supervisor" placeholder="지도교수님을 입력해주세요" placeholderTextColor="#99A3A4" 
                onChangeText={(text)=>this.setState({supervisor:text})}></TextInput>
            </View>
            <View style = {styles.logRow}>
              <Text style={styles.logText}>  전화번호 </Text>
              <TextInput style={styles.input} name="phoneNum" placeholder="전화번호를 입력해주세요" placeholderTextColor="#99A3A4" 
                onChangeText={(text)=>this.setState({phoneNum:text})}></TextInput>
            </View>
            <View style = {styles.logRow}>
              <Text style={styles.logText}>  Email </Text>
              <TextInput style={styles.input} name="Email" placeholder="이메일을 입력해주세요" placeholderTextColor="#99A3A4" 
                onChangeText={(text)=>this.setState({Email:text})}></TextInput>
            </View>
            <View style = {styles.logRow}>
              <Text style={styles.logText}>  졸업 후 목표 </Text>
              <TextInput style={styles.input} name="goal_graduate" placeholder="졸업 후 목표를 입력해주세요" placeholderTextColor="#99A3A4" 
                onChangeText={(text)=>this.setState({goal_graduate:text})}></TextInput>
            </View>
          </View>
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