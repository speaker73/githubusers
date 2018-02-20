import React,{ Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Users, Followers} from './components';
import { StackNavigator } from 'react-navigation';

const RootStack = StackNavigator(
  {
    Users: {
      screen: Users,
    },
    Followers: {
      screen: Followers,
    }
  },
  {
    initialRouteName: 'Users',
  }
);

export default class App extends Component {
  render() {
    return <RootStack />;
  }
}

const styles = StyleSheet.create({
  title:{
    fontSize:20,
  },
  container: {
    marginTop:10,
    backgroundColor: '#fff',
  },
});

