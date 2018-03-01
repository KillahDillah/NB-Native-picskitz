import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput, Image, ImageBackground, TouchableHighlight,
 ScrollView, Button } from 'react-native';
import glamorous from 'glamorous-native';
import photoSmall from './imgs/small-bg-1.png'
import Login from './login'
import Signup from './signup'


export default class Header extends Component {

handlePress() {

}

  render() {
    return (
      <View style={styles.header}>
      <ImageBackground 
        source= {require('./imgs/small-bg-1.png')}
        style={styles.headerSub}
      >
        <Image 
        source={require('./imgs/small-logo-white.png')}/>
        <View style={styles.buttonBox}>
          <TouchableHighlight style={styles.button} onPress={() => this.onPress(this)} value='signup'>
            <Text style={styles.text}>Sign up</Text>
          </TouchableHighlight>
          <TouchableHighlight style={styles.button} onPress={this.handlePress.bind(this)}>
            <Text style={styles.text} activeClassName='selected'>Login</Text>
          </TouchableHighlight>
          
        </View>
      </ImageBackground>
      </View>
    );
  }
}


const styles = StyleSheet.create ({
  headerSub: {
    position: 'absolute',
    // top: 0,
    // left: 0,
    // right: 0,
    // bottom: '60%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '30%',
  },
  header:{
    bottom: 0,
    height: '100%',
    display: 'flex',
  },
  buttonBox: {
    display:'flex',
    margin:'auto',
    flexDirection: 'row',
    position: 'absolute',
    bottom: 0,
    width: '100%',
    justifyContent: 'space-around',
  },
  text: {
    color:'white',
    textAlign: 'center'
  },
  button: {
    width:'50%',
    padding: 20,
    
  }
})

// export default StackNavigator ({
//   Home: {
//     screen: Login,
//   },
// })