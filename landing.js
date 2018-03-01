import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import glamorous from 'glamorous-native';
import large from './imgs/large-logo-white.png'
import photo from './imgs/maing-bg.png'


export default class Landing extends Component {

  componentDidMount(){
    setTimeout(()=>{
      this.props.history.push('/login')
    },1000)
  }

  render() {
    return(
      <ImageBackground 
      source={photo}
      style={styles.landingPage}>
        <Image source={large}/>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  landingPage: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 0, 
    left: 0,
    right: 0,
    bottom: 0,
    width: '100%',
    height: '100%'
  },
});