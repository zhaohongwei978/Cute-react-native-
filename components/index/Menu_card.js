


'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
  // var Header = require('./common/header1');
 

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
  TouchableOpacity,
  Text,
  Image,
  WebView,
  View
} from 'react-native';
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;
var VR_List_View = require('./../vr/List_View2')
var Shop = require('./../shop/shop_name')

var Special = require('./special/special')




let Menu_card =React.createClass({
// class webView extends Component {

     //初始化
    getInitialState(){
      return {
        //配置项
      };
    },       


  selectFitment:function() {
     const { navigator } = this.props;

    this.props.navigator.push({
      title:'VR馆',
      component:VR_List_View,
    });
  },
      
selectShop:function() {
  const{navigator} = this.props;

  this.props.navigator.push({
    title:'商店',
    component:Shop,
  });
},
selectSpecial:function() {
  const{navigator} = this.props;

  this.props.navigator.push({
    title:'专题',
    component:Special,
  });
},
  

  render(){
    return (
      
        <View style = {styles.boxtr}>
          <TouchableOpacity style = {styles.boxtd}>
             <Image source={require('./../images/icon_menucard_fitment.png')} style={styles.cardImg} />
             <Text style = {styles.cardText}>
               学装修
            </Text>
          </TouchableOpacity>

           <TouchableOpacity style = {styles.boxtd} onPress = {() => this.selectSpecial()}>
           <Image source={require('./../images/icon_menucard_theme.png')} style={styles.cardImg} />
           <Text style = {styles.cardText}>
              看专题
          </Text>
          </TouchableOpacity>

           <TouchableOpacity style = {styles.boxtd} onPress = {() => this.selectFitment()}>
           <Image source={require('./../images/icon_menucard_map.png')} style={styles.cardImg} />
           <Text style = {styles.cardText}>
             VR馆
          </Text>
          </TouchableOpacity>

           <TouchableOpacity style = {styles.boxtd} onPress = {() => this.selectShop()}>
           <Image source={require('./../images/icon_menucard_shop.png')} style={styles.cardImg} />
           <Text style = {styles.cardText}>
             逛商场
          </Text>
          </TouchableOpacity>
        </View>

     
    )
  },

});



  var styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff',
  },
  boxtr:{
    flexDirection:'row',
    justifyContent:'center',
    paddingTop: 10,
        paddingBottom : 10,
        paddingLeft : 5,
        paddingRight: 5,
  },
  boxtd:{
    flex:1,
    flexDirection:'column',
    justifyContent:'center',
    alignItems:'center',
    padding:3,
  },
  cardImg:{
    width: 40,
    height: 40,
  },
  cardText:{
    color:'#000',
    fontSize: 14,
    marginTop:10,
  },
});
module.exports=Menu_card;




