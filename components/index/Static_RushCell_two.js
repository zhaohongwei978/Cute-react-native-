


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
 Image,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';






var Static_RushCell = React.createClass({

  
  
    //request data
   
  render:function(){
   
   
      return (

        <TouchableHighlight>
        <View style = {styles.container}>
          <Text style = {styles.titleIcon}>
            VR看房
          </Text>
          <View style = {styles.boxtr}>

             <View style = {styles.boxtd}>
              <Image  style={styles.cardImg} 
                  source={require('./../images/list_01.jpg')}
              />
              <Text style = {styles.cardText}>
                星海VR体验
              </Text>
            </View>

             <View style = {styles.boxtd}>
              <Image  style={styles.cardImg} 
                  source={require('./../images/list_02.jpg')}
              />
              <Text style = {styles.cardText}>
                大连VR体验
              </Text>
             </View>

              <View style = {styles.boxtd}>
              <Image  style={styles.cardImg} 
                  source={require('./../images/list_03.jpg')}
              />
              <Text style = {styles.cardText}>
                万达VR体验
              </Text>
             </View>



          </View>
        </View>
        </TouchableHighlight>
      
      )
    
  },
});

var styles = StyleSheet.create({

  container:{
    flex:1,
   
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
    width: 80,
    height: 40,
  },
  cardText:{
    color:'#000',
    fontSize: 14,
    marginTop:10,
  },
  titleIcon:{
    width:78,
    fontSize:14,
    color:'#FF9900',
    paddingLeft:10,
    paddingTop:5,
  },
  

});
module.exports=Static_RushCell;




