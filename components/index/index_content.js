


'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
  // var Header = require('./common/header1');
  var Slider = require('./Slider')
  var Menu_card = require('./Menu_card')
 
  var Static_RushCell = require('./Static_RushCell')

  var Static_RushCell_two = require('./Static_RushCell_two')

  var List_View = require('./List_View')

  var Special = require('./special/special')

 

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
  ScrollView,
  StatusBarIOS,
  Text,
  WebView,
  View
} from 'react-native';
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;



//是否开启真实的定位；如果开启了_GEO_OPEN，_GEO_TEST_POS则会失效
//模拟定位数据


//高亮






let Index_Content =React.createClass({
// class webView extends Component {



  render() {

    return (

       
           <ScrollView style={styles.container}>
             <Slider/>
              <View style={{height : 4, backgroundColor : '#F2F2F2'}} />
               <Menu_card type="主界面" navigator={this.props.navigator}/>
              <View style={{height : 4, backgroundColor : '#F2F2F2'}} />
               <Static_RushCell/>
              <View style={{height : 4, backgroundColor : '#F2F2F2'}} />
               
               <View style={{height : 4, backgroundColor : '#F2F2F2'}} />  
                <Static_RushCell_two/> 
               <View style={{height : 4, backgroundColor : '#F2F2F2'}} />
               <List_View/>  
              
           </ScrollView>
          
         
       
      );


  }
})



  const styles = StyleSheet.create({
    container:{flex:1,
      backgroundColor:'white'},

     container_slide: {
      flex: 1,
      flexDirection: 'column',
    },
     





});
module.exports=Index_Content;




