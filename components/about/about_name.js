'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
let Dimensions=require('Dimensions');
let totalWidth=Dimensions.get('window').width;

var About = require('./about')

let leftStartPoint=totalWidth*0.1;
let componentWidth=totalWidth*0.8;
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Navigator,
  Text,
 
  View,
  StatusBarIOS,

} from 'react-native';








let About_Name =React.createClass({

  render() {

    return (
        
          <About type="个人中心" nav={this.props.navigator}/>
      
      );


  }
})



  const styles = StyleSheet.create({
 





});
module.exports=About_Name;




