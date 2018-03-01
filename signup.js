import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';
import glamorous from 'glamorous-native';
import Header from './header';


export default class Signup extends Component {
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
              <Text>Email</Text>   
              <TextInput type="TextInput" name="myTextInput">
                <Text>Form</Text>
              </TextInput>   
              </View>
              <Text>Don't have an account?</Text>
            </View>

            <Text>Form ends</Text>
        </View>
      </View>

    );
  }
}