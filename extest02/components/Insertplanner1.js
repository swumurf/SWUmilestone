import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';

let loginInfo={
    studentNum:'',
    password:''
};

export default class Insertplanner1 extends React.Component {
    

    constructor(props){
        super(props);
        this.state={plan1:''};

        this.list={
            title: null,
            start: '2019.03',
            end: '2019.12',
            confirmImage: null,
            detail: null
        };
    }
    


    render(){
    return (
        <View style = {styles.container}>
            <View style={styles.homeview}>
            <Button style = {styles.button} onPress={() => {
                this.props.navigation.navigate('Mainpage')}}
                title="홈버튼" color="#999999"
                accessibilityLabel="Main"></Button>
            </View>
            <View style={styles.container}>
                <Text style={styles.titleFont}>연간 추진 계획을 입력해주세요</Text>
            </View>

            <View style = {styles.horizontality}>
            <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center',borderColor:'#000000'}}>
            <TextInput style={styles.input} placeholder='Enter new to do' name="plan1" 
            onChangeText={(text)=>this.setState({plan1:text})}

            
            
                
        ></TextInput>
    
    
        </View>       
    </View>
    <View style={styles.horizontality}>
        <Button style={styles.nextButton} title="다음1" onPress={()=>{
            console.log('plan1: '+this.state.plan1);
        
    this.props.navigation.navigate('Insertplanner2',{plan1:this.state.plan1});
    }}  >
    </Button>
    </View>
        
        
        </View>

    );
    }

    
}

const styles = StyleSheet.create({
    container: {
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
        //alignItems: 'center',
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
    marginLeft:30,
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