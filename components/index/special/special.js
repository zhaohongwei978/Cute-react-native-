


'use strict';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
  // var Header = require('./common/header1');
 

import React, { Component } from 'react';
let Dimensions=require('Dimensions');

import {
    AppRegistry,
    StyleSheet,
    ScrollView,
    ListView,
    Platform,
    Image,
    Text,
    View,
} from 'react-native';


var special = React.createClass({


  
    //request data
   
  render:function(){
   
   
      return (

                    <ScrollView style={{backgroundColor:'#EEE'}}>
                        
                          <View style={styles.slide}>
                            <Image  style={styles.backgroundImage} source={require('./../../images/style_01.jpg')}> 
                              <Text style={styles.swipeText}>2016，带给你更多全新的VR体验</Text>
                            </Image>
                          </View>
                          <View style={styles.slide}>
                            <Image  style={styles.backgroundImage} source={require('./../../images/style_02.jpg')}>
                              <Text style={styles.swipeText}>12张图掌握2016互联网职场薪资</Text>
                            </Image>
                          </View>
                          <View style={styles.slide}>
                            <Image  style={styles.backgroundImage} source={require('./../../images/style_03.jpg')}>
                              <Text style={styles.swipeText}>年轻人不能错过这5家“小而美”的公司</Text>
                            </Image>
                          </View>
                          <View style={styles.slide}>
                            <Image style={styles.backgroundImage} source={require('./../../images/001.png')}>
                              <Text style={styles.swipeText}>智能硬件行业的5个雇主 最值得你抱大腿</Text>
                            </Image>
                          </View>
                       
                       
                      </ScrollView>
      )
    
  },
});

var styles = StyleSheet.create({

  wrapper: {

  },
  slide: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  swipeText: {
    color: '#fff',
    fontSize: 14,
    marginTop: 120,
    marginLeft: 10,
    width: 250,
    lineHeight: 24,
    fontWeight: 'bold',
  },
  backgroundImage: {
    flex: 1,
    width: null,
    height: null,
    backgroundColor: 'transparent',
    resizeMode: 'cover',
  },
  user: {
    width: 60,
    height: 60,
    borderRadius: 30,
  },
  count: {
    width: 30,
    height: 30,
    borderRadius: 15,
    textAlign:'center',
    lineHeight: 23,
    backgroundColor: '#FFF',
    opacity: 0.9,
  },

});
module.exports=special;




