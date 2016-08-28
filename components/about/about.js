'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var Util = require('./../common//util')

var Fuction_Detail = require('./function_detail')
var Help_Detail = require('./help_detail')
var Server_Detail = require('./server_detail')
var About_Detail = require('./about_detail')

var Setting_Detail = require('./about_detail')
var Setting_Detail_Name = require('./setting_detail_name')

var Map = require('./../vr/map')


import React, { Component } from 'react';
let Dimensions=require('Dimensions');
let totalWidth=Dimensions.get('window').width;
let leftStartPoint=totalWidth*0.1;
let componentWidth=totalWidth*0.8;
import {
  StyleSheet,
  Text,
  View,
  Image,
  AlertIOS,
  TouchableOpacity,
  NavigatorIOS,
  ScrollView
} from 'react-native';
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;



let About = React.createClass({
// class webView extends Component {
 function_detail:function () {

   const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
    
       this.props.nav.push({
              title: '功能介绍',
              component: Fuction_Detail,
              
          });
   // body...
 },
 

 help_detail:function () {

   const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
    
       this.props.nav.push({
              title: '帮助中心',
              component: Help_Detail,
              
          });
   // body...
 },


  server_detail:function () {

   const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
    
       this.props.nav.push({
              title: '服务条款',
              component: Server_Detail,
              
          });
   // body...
 },


 about_detail:function () {

   const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
    
       this.props.nav.push({
              title: '关于',
              component: About_Detail,
              
          });
   // body...
 },

 setting_detail:function() {
  const {navigator} = this.props;

  this.props.nav.push({
      title:'设置中心',
      component:Setting_Detail_Name,
  });
 },


   



  render() {

    return (

          <ScrollView style={styles.container}>


        <View style={styles.container}>
          <View style={{justifyContent:'center', alignItems: 'center',marginTop:10,marginBottom:20}}>
            <Image style={styles.icon} source={require('image!welcome_logo')} resizeMode="contain"/>
            <Text style={[styles.text, {fontSize:13}]}>v1.0.0</Text>
          </View>
        </View>





        <TouchableOpacity onPress = {() => this.function_detail()}>
            <View style={[styles.item, {borderTopWidth:Util.pixel}]}>
              <Text style={styles.text}>功能介绍</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress = {() =>this.help_detail()}>
            <View style={styles.item}>
              <Text style={styles.text}>帮助中心</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress = {() =>this.server_detail()}>
            <View style={styles.item}>
              <Text style={styles.text}>服务条款</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress ={() =>this.setting_detail()}>
            <View style={styles.item}>
              <Text style={styles.text}>设置</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity onPress ={() =>this.about_detail()}>
            <View style={styles.item}>
              <Text style={styles.text}>关于</Text>
            </View>
          </TouchableOpacity>

      </ScrollView>
      );


  }
})



  const styles = StyleSheet.create({
  container:{
    flex:1
  },
  item:{
    height:50,
    backgroundColor:'#fff',
    borderBottomWidth: Util.pixel,
    borderColor:'#ccc',
    justifyContent: 'center'
  },
  bg:{
    backgroundColor: '#FFF',
    height:40,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize:15,
    marginLeft:10,
    color: '#7E7F7E'
  },
  icon:{
    width:88,
    height:100
  }
});






module.exports=About;
