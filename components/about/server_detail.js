'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var Util = require('./../common/util')


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
 
  TouchableOpacity,
  NavigatorIOS,
  ScrollView
} from 'react-native';
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;



let Function_Detail = React.createClass({
// class webView extends Component {

   



  render() {

    return (

          <ScrollView style={styles.container}>


        <View style={styles.container}>
          <View style={{justifyContent:'center', alignItems: 'center',marginTop:10,marginBottom:20}}>
            <Image style={styles.icon} source={require('image!welcome_logo')} resizeMode="contain"/>
            <Text style={[styles.text, {fontSize:13}]}>v1.0.0</Text>
          </View>
        </View>





        <TouchableOpacity>
            <View style={[styles.item, {borderTopWidth:Util.pixel}]}>
              <Text style={styles.text}>功能介绍</Text>
            </View>
          </TouchableOpacity>


          <TouchableOpacity >
            <View>
              <Text style={styles.text}>"家装魔方"本着"魔方"的多面化，全方位的特点，全套的提供地板、瓷砖、门、窗、壁纸、涂料等一系列所需以及装修方案。使人们在选购的时候不必为了玲琅满目的商品而感到眼花缭乱。省去了消费者举棋不定之间而浪费的时间。
            </Text>
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






module.exports=Function_Detail;
