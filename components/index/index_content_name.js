'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var Index_Content = require('./index_content')

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






let Map =React.createClass({
// class webView extends Component {



  render() {

    return (
        // <List_View type="虚拟现实" nav={this.props.navigator}/>
          <Index_Content type="主界面" navigator={this.props.navigator}/>
      
      );


  }
})



  const styles = StyleSheet.create({
 





});
module.exports=Map;




