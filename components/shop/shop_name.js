'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var Shop = require('./shop')

import React, { Component } from 'react';
let Dimensions=require('Dimensions');
let totalWidth=Dimensions.get('window').width;

let leftStartPoint=totalWidth*0.1;
let componentWidth=totalWidth*0.8;
import {
  AppRegistry,
  StyleSheet,
  TextInput,
  Navigator,
  Text,
  WebView,
  View,
  StatusBarIOS,

} from 'react-native';

//StatusBarIOS.setStyle('default');
//StatusBarIOS.setNetworkActivityIndicatorVisible(true);






let shop_name =React.createClass({
// class webView extends Component {



  render() {

    return (
        // <List_View type="虚拟现实" nav={this.props.navigator}/>
          <Shop type="虚拟现实" nav={this.props.navigator}/>
      
      );


  }
})



  const styles = StyleSheet.create({
 





});
module.exports=shop_name;




