import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';


export default class Planner2 extends React.Component {
  constructor(props){
    super(props);
    const {navigation}=this.props;
    this.state={plan1:navigation.getParam('plan1'),plan2:''};
  }
  render(){
   // const {navigation}=this.props;
    //const plan1=navigation.getParam('plan1');
    //this.setState({plan1:plan1});
    console.log('screen2 plan1: '+this.state.plan1);
        return (
        <View style={styles.container}>
           <View style={styles.container}>
                <Text style={styles.titleFont}>월간 추진 계획을 입력할 달을 선택해주세요.</Text>
            </View>
           <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton} onPress={()=>this.setState({plan2:'1'})}>
            <Text>1월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="2월">
            <TouchableOpacity style={styles.touchbutton} onPress={()=>this.setState({plan2:'2'})}>
              <Text>2월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="3월">
            <TouchableOpacity style={styles.touchbutton} onPress={()=>this.setState({plan2:'3'})}>
              <Text>3월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="4월">
            <TouchableOpacity style={styles.touchbutton} onPress={()=>this.setState({plan2:'4'})}>
              <Text>4월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton} onPress={()=>this.setState({plan2:'5'})}>
              <Text>5월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton} onPress={()=>this.setState({plan2:'6'})}>
              <Text>6월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton} onPress={()=>this.setState({plan2:'7'})}>
              <Text>7월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton} onPress={()=>this.setState({plan2:'8'})}>
              <Text>8월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton} onPress={()=>this.setState({plan2:'9'})}>
              <Text>9월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton} onPress={()=>this.setState({plan2:'10'})}>
              <Text>10월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton} onPress={()=>this.setState({plan2:'11'})}>
              <Text>11월</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.horizontality} accessibilityLabel="1월">
            <TouchableOpacity style={styles.touchbutton} onPress={()=>this.setState({plan2:'12'})}>
              <Text>12월</Text>
            </TouchableOpacity>
            </View>

            <View style={styles.horizontality}>
            <View style={styles.horizontality}>
              <TouchableOpacity style={styles.nextButton} onPress={() => {
                console.log('plan2 selected:' + this.state.plan2);
                this.props.navigation.navigate('Insertplanner3',{plan1:this.state.plan1, plan2:this.state.plan2})
              }
              }
                >
                <Text>다음</Text>
                </TouchableOpacity>
              </View>
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
      justifyContent: 'center',
      alignSelf : 'center',
      fontSize: 18,
      width:'85%'
  },

  horizontality:{
      flexDirection : 'row',
      fontSize:40,
      marginTop:10,
      marginLeft:30,
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
  nextButton:{
    width:'100%',
    backgroundColor:'#ffffff',
    borderColor:"#000000",
    
    fontSize:15,
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