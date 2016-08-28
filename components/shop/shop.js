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
  ScrollView,
  

  View
} from 'react-native';
var width=Dimensions.get('window').width;
var height=Dimensions.get('window').height;



let Shop =React.createClass({
// class webView extends Component {



  render() {

    return (

           <ScrollView style={styles.container}>
              <View style={styles.searchBg}>
                <TextInput style={styles.input} 
                  placeholder = '搜索'
                />
                  
                <View>
                  <Text style={styles.tip}>
                    已为您筛选
                    <Text style={{color:'#FA2530'}}></Text>
                    条数据
                  </Text>
                </View>
              </View>
              
               <View style={styles.activity}></View>
              <View style={{height:40}}></View>
            </ScrollView>
      );


  }
})



  const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#ddd'
  },
  input:{
    height:38,
    marginLeft:10,
    marginRight:10,
   
    paddingLeft:5,
    marginTop:10,
    borderColor: '#868687',
    borderRadius:3,
    fontSize:15
  },
  tip:{
    fontSize:12,
    marginLeft:10,
    marginTop:5,
    color: '#505050'
  },
  row:{
    flexDirection:'row',
    marginLeft:10,
    marginRight:10,
    marginTop:10,
    paddingTop:5
  },
  distance:{
    width:120,
    alignItems:'flex-end',
  },
  name:{
    fontSize:15,
    marginBottom:6
  },
  type:{
    fontSize:12,
    color:'#686868'
  },
  mi:{
    fontSize:12,
    color:'#686868'
  },
  address:{
    fontSize:12,
    marginTop:5,
    color:'#686868'
  },
  phone:{
    marginLeft:10,
    marginRight:10,
    height:30,
    marginTop:10,
    justifyContent:'center',
    alignItems:'center',
   
    borderColor:'#ccc',
    borderRadius:2,
  },
  searchBg:{
    backgroundColor:'#fff',
    paddingBottom:10
  },
  item:{
    marginTop:10,
    backgroundColor:'#fff',
    paddingBottom:10,
  
    borderColor:'#ccc'
  },
  activity:{
    marginTop:50,
    justifyContent:'center',
    alignItems:'center',
  }
});








module.exports=Shop;




