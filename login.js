import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Input, Button } from 'react-native';
import glamorous from 'glamorous-native';
import Header from './header';

// import {Form, Section, createValidator } from 'react-native-forms';
// import { Button } from 'native-base';



export default class Login extends Component {
  render() {
    return(
      
      <View style={styles.login}>
      <Header />
        <View style={styles.infoBox}>
        <Text>Form Starts</Text>

          <View style={styles.entryBoxLogin}>
            <View style={styles.entryBox}>
              <Text>Username</Text>   
              <TextInput type="TextInput" name="myTextInput">
                <Text>Form</Text>
              </TextInput>   
            </View>
            <View style={styles.entryBox}>
              <Text>Password</Text>   
              <TextInput type="password" name="password">
                <Text>Form</Text>
              </TextInput>   
            </View>
            <Text>Don't have an account?</Text>
            <Button title='submit' name='arrow'>Submit</Button>
          </View>

            <Text>Form ends</Text>

            
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create ({
  login: {
    
  },
  infoBox: {
    position: 'absolute',
    top: '40%',
    width: '100%',
    padding: 20,
    bottom: 0,
  },
  entryBoxLogin:{
    height: '50%',
    color:'purple'
    
  },
  entryBox: {
    borderColor: 'lightgray',
    borderWidth: 1 ,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'row-reverse',
    padding: 10,
    borderRadius: 1,
    
  }

})