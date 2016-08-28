


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
  WebView,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';

import ViewPager from 'react-native-viewpager';


const IMGS = [

  'https://images.unsplash.com/photo-1441716844725-09cedc13a4e7?h=1024',
  'https://images.unsplash.com/photo-1441448770220-76743f9e6af6?h=1024',
  'https://images.unsplash.com/photo-1441260038675-7329ab4cc264?h=1024',
  'https://images.unsplash.com/photo-1441126270775-739547c8680c?h=1024',
  'https://images.unsplash.com/photo-1440964829947-ca3277bd37f8?h=1024',
  'https://images.unsplash.com/photo-1440847899694-90043f91c7f9?h=1024'
  
];





var Slider = React.createClass({

    getInitialState: function() {

       // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });

     
        // 实际的DataSources存放在state中
       return {
      dataSource: dataSource.cloneWithPages(IMGS),
    };
  },
 

   render: function() {
    return (
      <View style={styles.container}>
        <ViewPager
          style={this.props.style}
          dataSource={this.state.dataSource}
          renderPage={this._renderPage}
          isLoop={true}
          autoPlay={true}/>
       </View>
      );
   
  },

      


   _renderPage: function(
    data: Object,
    pageID: number | string,) {
    return (
      <Image
        source={{uri: data}}
        style={styles.page} />
    );
  },
});

  
    var styles = StyleSheet.create({
      container:{
        flex:1,
        height:130,
      },
      page: {
        width: totalWidth,
      },

     

  
});
module.exports=Slider;




