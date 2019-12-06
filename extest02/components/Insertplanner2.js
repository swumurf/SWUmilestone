import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage, Alert} from 'react-native';
import { DataTable, Cell, TableButton } from 'react-native-paper';
import Toast from 'react-native-simple-toast';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';
import Dialog, { DialogFooter, DialogButton, DialogContent } from 'react-native-popup-dialog';

let loginInfo={
  studentNum:'',
  password:''
};

_showToast = () => {
  this._toast.show({
    position: Toast.constants.gravity.top,
  });
};


_showDialog=(month)=>{
  Alert.alert(
    '월간 선택!',
    month+' 선택하셨습니다.',
    [
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );
}

export default class activityMonthner2 extends React.Component {
  static navigationOptions = {
    header: null
  }
  
  constructor(props){
    super(props);
    const {navigation}=this.props;
    this.state={
      activityYear:navigation.getParam('activityYear'), 
      activityMonth: '1',
    };
  }

  
  /* Swipe */
  onSwipeRight = (gestureState) => {
    console.log('이전 화면으로 돌아가기');
    this.props.navigation.navigate('InsertYearorMonth');
  }

  render(){
    /* Swipe */
    const config = {
      velocityThreshold: 0.3,
      directionalOffsetThreshold: 80
    };
    return (
    <GestureRecognizer 
      onSwipeRight={this.onSwipeRight}
      config={config}
      style={{
      flex: 1,
    }}>
      <View style={styles.container}>
        <View style={styles.homeview}>
            <Button color='#083388' style = {styles.button} onPress={() => {
                this.props.navigation.navigate('Mainpage')}}
                title="HOME" color="#083388"
                accessibilityLabel="Main"></Button>
        </View>
        <Text style={styles.titleText}>월간 추진 계획을 입력할 달을 선택해주세요.</Text>
        <View style={styles.dataTable}>
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} 
              //onPress={()=>this.setState({activityMonth:'1'}, Toast.show('1월 선택'))}>
              onPress={()=>this.setState({activityMonth:'1'}, _showDialog('1월'))}>
                <Text style={{textAlign:'center'}}>1월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} 
              onPress={()=>this.setState({activityMonth:'2'}, _showDialog('2월'))}>
                <Text style={{textAlign:'center'}}>2월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} 
              onPress={()=>this.setState({activityMonth:'3'}, _showDialog('3월'))}>
                <Text style={{textAlign:'center'}}>3월</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} 
              onPress={()=>this.setState({activityMonth:'4'}, _showDialog('4월'))}>
                <Text style={{textAlign:'center'}}>4월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} 
              onPress={()=>this.setState({activityMonth:'5'}, _showDialog('5월'))}>
                <Text style={{textAlign:'center'}}>5월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} 
              onPress={()=>this.setState({activityMonth:'6'}, _showDialog('6월'))}>
                <Text style={{textAlign:'center'}}>6월</Text></DataTable.Cell>
            </DataTable.Row>
            
            <DataTable.Row>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} 
              onPress={()=>this.setState({activityMonth:'7'}, _showDialog('7월'))}>
                <Text style={{textAlign:'center'}}>7월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} 
              onPress={()=>this.setState({activityMonth:'8'}, _showDialog('8월'))}>
                <Text style={{textAlign:'center'}}>8월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} 
              onPress={()=>this.setState({activityMonth:'9'}, _showDialog('9월'))}>
                <Text style={{textAlign:'center'}}>9월</Text></DataTable.Cell>
            </DataTable.Row>
            
            <DataTable.Row>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} 
              onPress={()=>this.setState({activityMonth:'10'}, _showDialog('10월'))}>
                <Text style={{textAlign:'center'}}>10월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} 
              onPress={()=>this.setState({activityMonth:'11'}, _showDialog('11월'))}>
                <Text style={{textAlign:'center'}}>11월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} 
              onPress={()=>this.setState({activityMonth:'12'}, _showDialog('12월'))}>
                <Text style={{textAlign:'center'}}>12월</Text></DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
        <View>
        <Button color='#A53134' title = "다음" onPress={() => {
          console.log('activityMonth selected:' + this.state.activityMonth);
          this.props.navigation.navigate('Insertplanner3',
            {activityYear:this.state.activityYear, 
            activityMonth:this.state.activityMonth})}}>
        </Button>
        </View>
      </View>
      </GestureRecognizer>
    );
  }


}

const styles = StyleSheet.create({
  container: {
    marginTop:30,
    //backgroundColor: '#fff',
    //justifyContent: 'space-between',
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'space-between',
    flexDirection: 'column',
  },
  
  homeview:{
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    padding: 10,
  },

  titleText:{
    borderColor:'black',
    justifyContent: 'center',
    alignSelf : 'center',
    textAlign: 'center',
    paddingTop: 25,
    fontSize: 18,
    width:'85%',
    textDecorationLine: 'underline',
  },

  dataTable: {
    justifyContent: 'center',
    margin: 15,
    marginVertical: 55,
    paddingBottom: 25,
    textAlign: 'center',
    alignItems: 'center',
  },

  tableText: {
    flex: 1,
    textAlign: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    alignItems: 'center',
  },

  nextButton:{
    width:'100%',
    backgroundColor:'#0054FF',
    borderColor:"#000000",
    flexDirection: 'row-reverse',
    fontSize:15,
    color: '#000000',
  },
  
  horizontality:{
    //justifyContent: 'space-between',
    //flexDirection: 'row-reverse',
    //alignItems: 'flex-end',
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 55,
    paddingHorizontal: 50,
    alignSelf: 'stretch',
},
});