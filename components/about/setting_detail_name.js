'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
let Dimensions=require('Dimensions');
let totalWidth=Dimensions.get('window').width;

var Setting_Detail = require('./setting _detail')

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
        
          <Setting_Detail type="设置" nav={this.props.navigator}/>
      
      );


  }
})



  const styles = StyleSheet.create({
 





});
module.exports=Setting_Detail;




