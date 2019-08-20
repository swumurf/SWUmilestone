import React from 'react';

import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage,Picker} from 'react-native';


export default class Signup extends React.Component {
  constructor(props){
    super(props);
    const {navigation}=this.props;
    this.state={studentNum:'', password:'',studentName:'',major1:'',major2:'',major3:'',supervisor:'',phoneNum:'',email:'',mileage:'',goal_graduate:''};
  }  

  postData=async()=>{
    try{
      console.log('Signup fetch function 진입');
      let res=await fetch('http://13.125.153.65:3000/user/signup',{
      
      method:'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({
        studentNum:this.state.studentNum,
        password:this.state.password,
        studentName:this.state.studentName,
        major1:this.state.major1,
        major2:this.state.major2,
        major3:this.state.major3,
        supervisor:this.state.supervisor,
        phoneNum:this.state.phoneNum,
        email:this.state.email,
        mileage:this.state.mileage,
        goal_graduate:this.state.goal_graduate
      })
      });
      
      res=await res;
      console.log("---------------response line1 까지 됨-------------");
      
      console.log(res);
      console.log("---------------response line2 까지 됨-------------");
      console.log(res._bodyText);
      console.log("---------------response line3 까지 됨-------------");
    }catch(error){
      console.error(error);
    }
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
              <Picker
              selectedValue={this.state.major1}
              style={{height:50,width:'70%'}}
              onValueChange={(itemValue,itemIndex)=>this.setState({major1:itemValue})}>
                <Picker.Item label="국어국문학과" value="국어국문학과"/>
                <Picker.Item label="영어영문학과" value="영어영문학과"/>
                <Picker.Item label="불어불문학과" value="영어영문학과"/>
                <Picker.Item label="독어독문학과" value="영어영문학과"/>
                <Picker.Item label="중어중문학과" value="영어영문학과"/>
                <Picker.Item label="일어일문학과" value="영어영문학과"/>
                <Picker.Item label="사학과" value="영어영문학과"/>
                <Picker.Item label="기독교학과" value="영어영문학과"/>
                <Picker.Item label="문예창작전공" value="영어영문학과"/>
                <Picker.Item label="박물관학전공" value="영어영문학과"/>
                <Picker.Item label="글로벌문화산업/MICE전공" value="영어영문학과"/>
                <Picker.Item label="스마트농업공학전공" value="영어영문학과"/>
                <Picker.Item label="바이오인포매틱스전공" value="영어영문학과"/>
                <Picker.Item label="바이오화장품공학전공" value="영어영문학과"/>
                <Picker.Item label="경제학과" value="영어영문학과"/>
                <Picker.Item label="문헌정보학과" value="영어영문학과"/>
                <Picker.Item label="청소년학전공" value="영어영문학과"/>
                <Picker.Item label="노년학전공" value="영어영문학과"/>
                <Picker.Item label="사회복지학과" value="영어영문학과"/>
                <Picker.Item label="아동학과" value="영어영문학과"/>
                <Picker.Item label="행정학과" value="영어영문학과"/>
                <Picker.Item label="언론영상학과" value="영어영문학과"/>
                <Picker.Item label="저널리즘전공" value="영어영문학과"/>
                <Picker.Item label="비즈니스커뮤니케이션전공" value="영어영문학과"/>
                <Picker.Item label="디지털영상전공" value="영어영문학과"/>
                <Picker.Item label="국제학전공" value="영어영문학과"/>
                <Picker.Item label="교육심리학과" value="영어영문학과"/>
                <Picker.Item label="체육학과" value="영어영문학과"/>
                <Picker.Item label="기업보안융합전공" value="영어영문학과"/>
                <Picker.Item label="데이터과학전공" value="영어영문학과"/>
                <Picker.Item label="휴먼서비스전공" value="영어영문학과"/>
                <Picker.Item label="공공안전전공" value="영어영문학과"/>
                <Picker.Item label="스마트헬스케어전공" value="영어영문학과"/>
                <Picker.Item label="디지털융합경영전공" value="영어영문학과"/>
                <Picker.Item label="수학과" value="영어영문학과"/>
                <Picker.Item label="화학생명환경과학부" value="영어영문학과"/>
                <Picker.Item label="화학과" value="영어영문학과"/>
                <Picker.Item label="생명환경공학전공" value="영어영문학과"/>
                <Picker.Item label="생명환경공학과" value="영어영문학과"/>
                <Picker.Item label="원예생명조경학과" value="영어영문학과"/>
                <Picker.Item label="식품응용시스템학부" value="영어영문학과"/>
                <Picker.Item label="식품공학과" value="영어영문학과"/>
                <Picker.Item label="식품영양학과" value="영어영문학과"/>
                <Picker.Item label="도시환경예술디자인전공" value="영어영문학과"/>
                <Picker.Item label="패션디자인/비즈니스 전공" value="영어영문학과"/>
                <Picker.Item label="사회원예학전공" value="영어영문학과"/>
                <Picker.Item label="경영학과" value="영어영문학과"/>
                <Picker.Item label="의류학과" value="영어영문학과"/>
                <Picker.Item label="패션산업학과" value="영어영문학과"/>
                <Picker.Item label="디지털미디어학과" value="영어영문학과"/>
                <Picker.Item label="정보보호학과" value="영어영문학과"/>
                <Picker.Item label="소프트웨어융합학과" value="영어영문학과"/>
                <Picker.Item label="멀티미디어학과" value="영어영문학과"/>
                <Picker.Item label="산업디자인학과" value="영어영문학과"/>
                <Picker.Item label="서양화과" value="영어영문학과"/>
                <Picker.Item label="현대미술전공" value="영어영문학과"/>
                <Picker.Item label="공예전공" value="영어영문학과"/>
                <Picker.Item label="공예학과" value="영어영문학과"/>
                <Picker.Item label="시각디자인학과" value="영어영문학과"/>
                

                
                



                
              </Picker>
              {/* <TextInput style={styles.input} name="major1" placeholder="제1전공을 입력해주세요" placeholderTextColor="#99A3A4" 
                onChangeText={(text)=>this.setState({major1:text})}></TextInput>*/}
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
          
          
          <View>
            <TouchableOpacity style={{alignItems: 'center'}} onPress={()=>{
              console.log('major1:'+this.state.major1);
           // this.postData();
            this.props.navigation.navigate('Mainpage');}}>
              <Text style={styles.managerText}>관리자로 로그인하기</Text>
            </TouchableOpacity>
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
    },
    logColumn:{
      backgroundColor: '#fff',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      padding: 15,
    },
    
  logRow: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },

  logText:{
    fontSize: 14,
    padding: 5,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  }
  
});