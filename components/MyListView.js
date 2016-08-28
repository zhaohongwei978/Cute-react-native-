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
  TextInput,
  Navigator,
  Text,
  WebView,
  View
} from 'react-native';
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;



let MyListView =React.createClass({
// class webView extends Component {



  render() {

    return (

          <View style={styles.container}>
             <TextInput

                style={styles.numberInputStyle}
                placeholder={'请输入手机号'}

             />
             <Text style={styles.textPrompStyle}>
                 您输入的手机号
             </Text>
             <TextInput
              style={styles.passwordInputStyle}
                  placeholder={'请输入密码'}

                  password={true}
                
             />
             <Text style={styles.bigTextPrompt}>
                  确定
             </Text>
          </View>
      );


  }
})

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor:'white',

  },
  numberInputStyle:{
    top:20,
    left:leftStartPoint,
    height:40,
    width:componentWidth,
    backgroundColor:'gray',
    fontSize:20,
  },
  textPrompStyle:{
    top:30,
    left:leftStartPoint,
    width:componentWidth,
    fontSize:20,
  },
  passwordInputStyle:{
    top:50,
    left:leftStartPoint,
    width:componentWidth,
    backgroundColor:'gray',
    fontSize:20,
  },
  bigTextPrompt:{
    top:70,
    left:leftStartPoint,
    width:componentWidth,
    backgroundColor:'gray',
    color:'white',
    textAlign:'center',
    fontSize:60,
  },



});
module.exports=MyListView;
