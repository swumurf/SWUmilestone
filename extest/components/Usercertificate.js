import React, { Component } from 'react';
import {StyleSheet,Text,View,Image, CameraRoll,TextInput,
    TouchableOpacity,Button,AsyncStorage, PermissionsAndroid} from 'react-native';
    
// async function requestCameraPermission() {
//     try {
//         const granted = await PermissionsAndroid.request(
//             PermissionsAndroid.PERMISSIONS.CAMERA,
//             {
//                 title: 'Cool Photo App Camera Permission',
//                 message:
//                 'Cool Photo App needs access to your camera ' +
//                 'so you can take awesome pictures.',
//                 buttonNeutral: 'Ask Me Later',
//                 buttonNegative: 'Cancel',
//                 buttonPositive: 'OK',
//             },);
//             if (granted === PermissionsAndroid.RESULTS.GRANTED) {
//                 console.log('You can use the camera');
//             } else {
//                 console.log('Camera permission denied');
//             }
//         } catch (err) {
//             console.warn(err);
//         }
//     }

// CameraRoll.getPhotos(
//   {first: 1},
//   (data) => {
//       console.log(data);
//   },
//   (error) => {
//       console.warn(error);
//   }
// ); 

export default class Usercertificate extends React.Component {

    // constructor(props){
    //     super(props);
    //     this.state = {photoSource : null};
    // }

    // componentDidMount(){
    //     CameraRoll.getPhotos({first: 1}).then(data => {
    //         this.setState({photoSource: {uri: data.edges[3].node.image.uri}});
    //     }, error => {
    //        console.warn(error);
    //     }); 
    // }

    render(){
        return (
            <View style={styles.container}>
                <Text>Usercertificate</Text>
                <Button onPress={() => { this.props.navigation.navigate('Main')}}></Button>
                
            {/* <View>
                <Image 
                    style = {styles.backdrop}
                    source = {this.state.photoSource}
                    resizeMode = "cover"
                    >{this.props.children}</Image>
                </View> */}
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
});