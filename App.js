import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import glamorous from 'glamorous-native';
import { NativeRouter as Router, Route, Link, Switch } from 'react-router-native';
import Landing from './landing'
import Login from './login'
import Signup from './signup'
import Header from './header'


export default class App extends React.Component {
  render() {
    return (
      <Router>
        <View>
          <Switch>
            <Route exact path="/" component={Landing} />
            <Route path="/login" component={Login}/>
            <Route path="/signup" component={Signup} />
          </Switch> 
        </View>
      </Router>
    );
  }
}


