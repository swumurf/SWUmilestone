import React from 'react';
import {StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';
import { DataTable, Cell, TableButton } from 'react-native-paper';
import Toast from 'react-native-simple-toast';

let loginInfo={
  studentNum:'',
  password:''
};

_showToast = () => {
  this._toast.show({
    position: Toast.constants.gravity.top,
  });
};

export default class activityMonthner2 extends React.Component {
  static navigationOptions = {
    header: null
  }
  
  constructor(props){
    super(props);
    const {navigation}=this.props;
    this.state={
      activityYear:navigation.getParam('activityYear'), 
      activityMonth: ''};
  }

  render(){
    return (
      <View style={styles.container}>
        <Text style={styles.titleText}>월간 추진 계획을 입력할 달을 선택해주세요.</Text>
        <View style={styles.dataTable}>
          <DataTable>
            <DataTable.Row>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} onPress={()=>this.setState({activityMonth:'1'}, Toast.show('1월 선택'))}>
                <Text style={{textAlign:'center'}}>1월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} onPress={()=>this.setState({activityMonth:'2'}, Toast.show('2월 선택'))}>
                <Text style={{textAlign:'center'}}>2월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} onPress={()=>this.setState({activityMonth:'3'}, Toast.show('3월 선택'))}>
                <Text style={{textAlign:'center'}}>3월</Text></DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} onPress={()=>this.setState({activityMonth:'4'}, Toast.show('4월 선택'))}>
                <Text style={{textAlign:'center'}}>4월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} onPress={()=>this.setState({activityMonth:'5'}, Toast.show('5월 선택'))}>
                <Text style={{textAlign:'center'}}>5월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} onPress={()=>this.setState({activityMonth:'6'}, Toast.show('6월 선택'))}>
                <Text style={{textAlign:'center'}}>6월</Text></DataTable.Cell>
            </DataTable.Row>
            
            <DataTable.Row>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} onPress={()=>this.setState({activityMonth:'7'}, Toast.show('7월 선택'))}>
                <Text style={{textAlign:'center'}}>7월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} onPress={()=>this.setState({activityMonth:'8'}, Toast.show('8월 선택'))}>
                <Text style={{textAlign:'center'}}>8월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} onPress={()=>this.setState({activityMonth:'9'}, Toast.show('9월 선택'))}>
                <Text style={{textAlign:'center'}}>9월</Text></DataTable.Cell>
            </DataTable.Row>
            
            <DataTable.Row>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} onPress={()=>this.setState({activityMonth:'10'}, Toast.show('10월 선택'))}>
                <Text style={{textAlign:'center'}}>10월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} onPress={()=>this.setState({activityMonth:'11'}, Toast.show('11월 선택'))}>
                <Text style={{textAlign:'center'}}>11월</Text></DataTable.Cell>
              <DataTable.Cell style={{textAlign: 'center', justifyContent:'center', alignItems:'center'}} onPress={()=>this.setState({activityMonth:'12'}, Toast.show('12월 선택'))}>
                <Text style={{textAlign:'center'}}>12월</Text></DataTable.Cell>
            </DataTable.Row>
          </DataTable>
        </View>
        <View>
        <Button title = "다음" onPress={() => {
          console.log('activityMonth selected:' + this.state.activityMonth);
          this.props.navigation.navigate('Insertplanner3',
            {activityYear:this.state.activityYear, 
            activityMonth:this.state.activityMonth})}}>
        </Button>
        </View>
      </View>
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