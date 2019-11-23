import React from 'react';
import {SectionList,FlatList, StyleSheet,Text,View,Image,TextInput,TouchableOpacity,Button,AsyncStorage} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class ConfirmPlanner extends React.Component {
  constructor(props){
    super(props);
    const {navigation}=this.props;
    this.state={
      activityYear:navigation.getParam('activityYear'),
      activityMonth:navigation.getParam('activityMonth'),
      activityDetailNum:navigation.getParam('activityDetailNum'),
      startDate:'',expireDate:'',title:''};
  }
  
  render(){
  return (
    <View styles={styles.container}>
       <SectionList
          sections={[
            {title: '1학년', data: ['Devin', 'Dan', 'Dominic']},
            {title: '2학년', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            {title: '3학년', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
            {title: '4학년', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
          renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
          keyExtractor={(item, index) => index}
        />
       
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
    sectionHeader: {
      paddingTop: 2,
      paddingLeft: 10,
      paddingRight: 10,
      paddingBottom: 2,
      fontSize: 14,
      fontWeight: 'bold',
      backgroundColor: 'rgba(247,247,247,1.0)',
    },
    item: {
      padding: 10,
      fontSize: 18,
      height: 44,
    },
});