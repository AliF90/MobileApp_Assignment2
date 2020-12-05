import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
} from 'react-native';import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

class AboutScreen extends Component{
    constructor(props){
        super(props);
    }
    render(){
        const {navigation,route}=this.props
        return(
            <SafeAreaView style={styles.container}>
                <View  style={{flex: 1, flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.title}>name</Text>
                </View>
            </SafeAreaView>
        )
    }
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        textAlign: 'center',
        backgroundColor : '#efe5d9',
      },
    title:{
        fontSize:20,
        fontWeight: 'bold',
    }
})


  export default AboutScreen;