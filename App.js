/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet} from 'react-native';
import {createStackNavigator} from 'react-navigation'
import LoginScreen from './Components/LoginScreen';
import HomeScreens from './Components/HomeScreens';
import RegisterScreen from './Components/RegisterScreen';
import SpashScreen from './Components/SpashScreen';
import Item from './Components/Item';
import HelpScreen from './Components/HelpScreen';

export default class App extends React.Component{
  static navigationOptions = { header: null }
  render(){
    return(
      <AppStackNavigator/>
    );
  }
}

const AppStackNavigator = createStackNavigator({
  Home: HomeScreens,
  Login: LoginScreen,
  Register: RegisterScreen,
  Help: HelpScreen,
  Item: Item,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
