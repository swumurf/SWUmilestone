import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';


export default class Insertplanner3 extends React.Component {
  constructor(props){
    super(props);
    const {navigation}=this.props;
    this.state={plan1:navigation.getParam('plan1'),plan2:navigation.getParam('plan2'),plan3:''};
  }

  /* 데이터 서버로 전송해서 서버 response 출력 함수*/
postData=async(studentNum,password)=>{
  try{
    console.log('insert planner3 fetch function 진입');
    let res=await fetch('http://13.125.153.65:3000/user/signin',{
    
    method:'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type':'application/json'
    },
    body:JSON.stringify({
      studentNum:this.state.plan1,
      password:this.state.plan2
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
      
      
      console.log('screen3 plan1: '+this.state.plan1);
      console.log('screen3 plan2:' + this.state.plan2);
        return (
        <View style={styles.container}>
              <View>
                <Text style={styles.titleFont1}>세부 항목 리스트 </Text>
            </View>
            <View>
                <TouchableOpacity onPress={()=>this.setState({plan3:'1'})}>
                <Text style={styles.titleFont}>1인 1SW 재산권 취득(SW등록) </Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>this.setState({plan3:'2'})}>
                <Text style={styles.titleFont}>1인 1SW 재산권 취득(SW특허)</Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>this.setState({plan3:'3'})}>
                <Text style={styles.titleFont}>1인 1SW 재산권 취득(SW논문) </Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>this.setState({plan3:'4'})}>
                <Text style={styles.titleFont}>SW능력 개발활동 </Text></TouchableOpacity>
            </View>

            <View>
                <TouchableOpacity onPress={()=>this.setState({plan3:'5'})}>
                <Text style={styles.titleFont}>외부기관 평가 </Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>this.setState({plan3:'6'})}>
                <Text style={styles.titleFont}>SW중심대학 사업단 주관 행사 참여</Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>this.setState({plan3:'7'})}>
                <Text style={styles.titleFont}>교외 SW관련 행사 참여(포럼, 전시회 외) </Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>this.setState({plan3:'8'})}>
                <Text style={styles.titleFont}>외부기관 수상/평가 </Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>this.setState({plan3:'9'})}>
                <Text style={styles.titleFont}>SW 인턴/현장실습 활동 </Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>this.setState({plan3:'10'})}>
                <Text style={styles.titleFont}>SW 취업 활동 </Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>this.setState({plan3:'11'})}>
                <Text style={styles.titleFont}>SW 창업 활동 </Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>this.setState({plan3:'12'})}>
                <Text style={styles.titleFont}>SW 마일스톤 활동 </Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>this.setState({plan3:'13'})}>
                <Text style={styles.titleFont}>SW 소학회, 동아리 </Text></TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>this.setState({plan3:'14'})}>
                <Text style={styles.titleFont}>SW 봉사활동 </Text></TouchableOpacity>
            </View>

            <View style={styles.horizontality}>
              <TouchableOpacity style={styles.nextButton} onPress={() => {
                this.postData(this.state.plan1,this.state.plan2);
                this.props.navigation.navigate('Insertplanner4', {plan1:this.state.plan1, plan2:this.state.plan2, plan3:this.state.plan3})}
              }
                >
                <Text>다음</Text>
                </TouchableOpacity>
              </View>
        </View>
        );
      }


}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
      backgroundColor: '#fff',
      justifyContent: 'space-around',
  },

  homeview:{
      justifyContent: 'flex-end',
      alignSelf: 'flex-end',
      padding: 10,
      },

  title: {
      justifyContent: 'center',
      alignSelf : 'center',
      marginLeft:'20%'
  },

  titleFont:{
      borderColor:'black',
      marginTop:20,
      marginLeft:30,
      fontSize: 18,
      width:'85%'
  },
  titleFont1:{
    borderColor:'black',
    marginTop:20,
    marginLeft:30,
    fontSize: 18,
    width:'85%',
    textDecorationLine: 'underline'
},

  horizontality:{
      width:'100%',
      flexDirection : 'row',
      fontSize:40,
      marginTop:10,
      marginLeft:30,
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
  nextButton:{
    marginTop:60,
    width:50,
    backgroundColor:'#ffffff',
    borderColor:"#000000",
    fontSize:40,
  },

  text: {
      padding: 20,
      borderRadius: 5,
  },
  input:{
    height:40,
    width:'95%',
    borderColor:'#999999',
    borderWidth:1,
    margin:40,
    width:'80%',
    height:'80%',
    padding:5,
    textAlign:'center'
  } 
});