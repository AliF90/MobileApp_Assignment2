import React, { Component } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Button,
  Switch,
  TextInput,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { TextInput } from 'react-native-gesture-handler';

class MainScreen extends Component{
    constructor(props){
        super(props);
        this.state = {
            isEnabled : false,
            size : '',
            floor:'',
            install:'',
            flooringcost : 0,
            installationcost : 0,
            totalcost : 0,
            taxtcost : 0,
        }
    }
    handleSize = (text) => {
        this.setState({ size: text })
        this.calculate()
     }
     handleFloor = (text) => {
        this.setState({ floor: text })
        this.calculate()
     }
     handleInstall = (text) => {
        console.log('text is: ' + text)
        this.state.install = text
        console.log('Aliiiii: ' + this.state.install)
        this.calculate()
     }
    toggleSwitch = (value) => {
        this.setState({isEnabled: value})
        console.log('Switch is: ' + value)
     }

     calculate = () =>{
        console.log('install: ' + this.state.install)
        this.state.flooringcost = this.state.size * this.state.floor 
        this.state.installationcost = this.state.size * this.state.install 
        this.state.totalcost = this.state.installationcost + this.state.flooringcost 
        this.state.taxtcost = Math.round(this.state.totalcost * 0.13 * 100) / 100 
        console.log('flooringcost: ' + this.state.flooringcost)
        console.log('installationcost: ' + this.state.installationcost)
        console.log('total: ' + this.state.totalcost)
        console.log('taxtcost: ' + this.state.taxtcost)
        this.forceUpdate()
     }

    render(){
        const {navigation,route}=this.props
        return(
            <SafeAreaView style={styles.container}>
                <View  style={{flex: 1, flexDirection: 'column', justifyContent:'center', alignItems:'center'}}>
                    <Text style={styles.title}>Please choose the unit first!</Text>
                    <View style={{flexDirection: 'row'}}>
                        <Text>Square Feet</Text>
                        <Switch
                            trackColor={{ false: "#81b0ff", true: "#81b0ff" }}
                            // thumbColor={this.state.isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            // ios_backgroundColor="#3e3e3e"
                            onValueChange={this.toggleSwitch}
                            value={this.state.isEnabled}
                        />
                        <Text>Square Meter</Text>
                    </View>
                    <Text style={styles.title}>Size Of the Room</Text>
                    <TextInput
                            placeholder="Type here the size!"
                            onChangeText = {this.handleSize}
                            value={this.state.size}
                            keyboardType = 'numeric'
                        />
                    <Text style={styles.title}>Price per unit of flooring</Text>
                    <TextInput
                            placeholder="Price per unit of flooring!"
                            onChangeText = {this.handleFloor}
                            value={this.state.floor}
                            keyboardType = 'numeric'
                        />
                    <Text style={styles.title}>Price per unit of installation</Text>
                    <TextInput
                            placeholder="Price per unit of installation !"
                            onChangeText = {this.handleInstall}
                            // value={this.state.install}
                            keyboardType = 'numeric'
                        />

                    <Text style={styles.title}>flooring cost: {this.state.flooringcost} {this.state.isEnabled ? '$/m2' : '$/ft2'}</Text>
                    <Text style={styles.title}>intallation cost: {this.state.installationcost} {this.state.isEnabled ? '$/m2' : '$/ft2'}</Text>
                    <Text style={styles.title}>total cost: {this.state.totalcost} $</Text>
                    <Text style={styles.title}>tax cost: {this.state.taxtcost} $</Text>
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
        marginTop:20,
    },
    enabled:{
        fontWeight: 'bold',
    }
})


  export default MainScreen;