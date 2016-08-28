


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
var Map = require('./map');

let totalWidth=Dimensions.get('window').width;
let totalHeight=Dimensions.get('window').height;
let leftStartPoint=totalWidth*0.1;
let componentWidth=totalWidth*0.8;
import {
    StyleSheet,
    View,
    Text,
    ScrollView,
    ListView,
    Image,
    TouchableOpacity,
    TextInput,
    NavigatorIOS,
    RefreshControl,


} from 'react-native';


var List_View = React.createClass({

  _pressButton:function() {


        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
    
       this.props.nav.push({
              title: '关于',
              component: Map,
              
          });
    },

	 // <TouchableOpacity style={styles.goDou} onPress={()=>{alert(11)}}>

    //request data

  render:function(){

      return (
        <ScrollView style={{backgroundColor:'#eee'}}>
           <View style={styles.slider}>
           <Image style={styles.backgroundImage} source={require('./../images/style_02.jpg')}/>
             
           
             
           </View>  
          
             
           >
         </ScrollView>


      )

  },
});

var styles = StyleSheet.create({

  container:{
    flex:1,
  },
   slider:{
    flex:1,
    backgroundColor:'transparent',
   },
   backgroundImage:{
    flex:1,
    width:null,
    height:null,
    backgroundColor:'transparent',
    resizeMode:'cover',
   },



});
module.exports=List_View;
