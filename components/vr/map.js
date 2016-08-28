'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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
  View
} from 'react-native';
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;

var Vr_List = require('./vr_list')



var HEADER = '#3b5998';
var BGWASH = 'rgba(255,255,255,0.8)';
var DISABLED_WASH = 'rgba(255,255,255,0.25)';
var WEBVIEW_REF = 'webview';
var DEFAULT_URL = 'http://vczero.github.io/webview/index.html?';




let Vr =React.createClass({
// class webView extends Component {
   getInitialState: function() {
      return {
        url: DEFAULT_URL,
        status: 'No Page Loaded',
        backButtonEnabled: false,
        forwardButtonEnabled: false,
        loading: true,
      };
    },



  render() {

    return (

         <View style={{flex:1}}>
             <WebView
              ref={WEBVIEW_REF}
              automaticallyAdjustContentInsets={true}
              style={styles.webView}
              source={this.state.url}

              // onNavigationStateChange={this.onNavigationStateChange}
              startInLoadingState={true}
             />
        </View>
      );


  }
})



  const styles = StyleSheet.create({
 





});
module.exports=Vr;




