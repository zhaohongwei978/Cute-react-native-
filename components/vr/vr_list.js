'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */


import React, { Component } from 'react';
let Dimensions=require('Dimensions');
var Geolocation = require('Geolocation');

var Util = require('./../common/util');

let totalWidth=Dimensions.get('window').width;
let leftStartPoint=totalWidth*0.1;
let componentWidth=totalWidth*0.8;
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  TextInput,
  ActivityIndicatorIOS,
  TouchableOpacity,
  LinkingIOS,
  ActionSheetIOS,
  WebView,
  AsyncStorage
} from 'react-native';
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;



let Vr =React.createClass({
// class webView extends Component {
  getInitialState: function() {
    return {
      list: null,
      count: 0,
      keywords: ''
    };
  },




  render() {

    return (

          <View style={styles.flex}>
        <Text style={styles.font}>
            
            <Text>VR虚拟现实部分</Text>
        </Text>
      </View>
      );


  }
})



  const styles = StyleSheet.create({
 





});
module.exports=Vr;




