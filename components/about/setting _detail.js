'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var Util = require('./../common//util')




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



let Setting_Detail = React.createClass({
// class webView extends Component {




  render() {

    return (

          <ScrollView style={styles.container}>

        <TouchableOpacity>
            <View style={[styles.item, {borderTopWidth:Util.pixel}]}>
              <Text style={styles.text}>检查更新</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.item}>
              <Text style={styles.text}>常用中心</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={styles.item}>
              <Text style={styles.text}>清除缓存</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.item}>
              <Text style={styles.text}>联系我们</Text>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={styles.item}>
              <Text style={styles.text}>账号管理</Text>
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






module.exports=Setting_Detail;
