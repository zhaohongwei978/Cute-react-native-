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
    ScrollView,
    ListView,
    Platform,
    Image,
    Text,
    NavigatorIOS,
    View,

} from 'react-native';

//StatusBarIOS.setStyle('default');
//StatusBarIOS.setNetworkActivityIndicatorVisible(true);






let special1 =React.createClass({
// class webView extends Component {



  render() {

    return (
        // <List_View type="虚拟现实" nav={this.props.navigator}/>
          <ScrollView style={{backgroundColor:'#EEE'}}>
            <Text>ggsssssgggggggggggggggggggggggggggggg</Text>
           </ScrollView>
      
      );


  }
})



  const styles = StyleSheet.create({
 





});
module.exports=special1;




