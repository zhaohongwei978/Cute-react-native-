


'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
  // var Header = require('./common/header1');
 

import React, { Component } from 'react';
let Dimensions=require('Dimensions');
let Geolocation = require('Geolocation');

var Util = require('./../common/util');

let totalWidth=Dimensions.get('window').width;
let totalHeight=Dimensions.get('window').height;
let leftStartPoint=totalWidth*0.1;
let componentWidth=totalWidth*0.8;
import {
    StyleSheet,
    View,
    Text,
    ListView,
    Image,
    TouchableOpacity,
   
} from 'react-native';

var Util = require('./../common/util')




 

var List_View = React.createClass({

 
  
    //request data
   
  render:function(){
   
   
      return (

         <View style={[styles.row,styles.item]}>
          <View>
            <Image style={styles.img}/>
          </View>
          <View style={{flex:1}}>
            <Text style={styles.textWitdh} numberOfLines={1}>
              名称：
            </Text>
            <Text style={styles.textWitdh} numberOfLines={1}>
              演员：
            </Text>
            <Text style={styles.textWitdh} numberOfLines={1}>
              评分：
            </Text>
            <Text style={styles.textWitdh} numberOfLines={1}>
              时间：
            </Text>
            <Text style={styles.textWitdh} numberOfLines={1}>
              标签：
            </Text>
            <TouchableOpacity style={styles.goDou}>
              <Text>详情</Text>
            </TouchableOpacity>
          </View>
        </View>
      )
    
  },
});

var styles = StyleSheet.create({

   flex_1:{
    flex:1,
  },
  search:{
    paddingLeft:5,
    paddingRight:5,
    marginBottom:5,
    height:40,
  },
  btn:{
    width:40,
    backgroundColor:'#0091FF',
    justifyContent:'center',
    alignItems:'center',
    marginLeft:Util.pixel,
  },
  fontFFF:{
    color:'#fff'
  },
  row:{
    flexDirection:'row'
  },
  img:{
    width:80,
    height:110,
    resizeMode: Image.resizeMode.contain
  },
  textWitdh:{
    flex:1,
    marginLeft:10
  },
  item:{
    marginTop:10,
    height:140,
    paddingTop:15,
    paddingBottom:5,
    paddingLeft:10,
    borderBottomWidth:Util.pixel,
    borderTopWidth:Util.pixel,
    borderColor:"#ddd"
  },
  goDou:{
    justifyContent:'center',
    alignItems:'center',
    height:32,
    width:60,
    borderWidth:Util.pixel,
    borderColor:'#3C9BFD',
    marginLeft:10,
    marginTop:0,
    borderRadius:3
  }

});
module.exports=List_View;




