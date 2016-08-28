/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
var Navigation = require('./components/common/navigation')

var Index_Content_Name = require('./components/index/index_content_name')


var Vr = require('./components/vr/vr')

var Shop_Name = require('./components/shop/shop_name')

var About = require('./components/about/about')
var About_Name = require('./components/about/about_name')

var Map = require('./components/vr/map')

import React, { Component } from 'react';
import {
 AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  NavigatorIOS,
  TabBarIOS,
  ScrollView,
  StatusBarIOS,
} from 'react-native';

var Dimensions = require('Dimensions');

var MyListView = require('./components/MyListView')

var width = Dimensions.get('window').width;
var height = Dimensions.get('window').height - 70;


//高亮
//StatusBarIOS.setStyle('light-content');
//开启网络状态
//StatusBarIOS.setNetworkActivityIndicatorVisible(true);

var cute = React.createClass({
  getInitialState: function(){
    return {
      tab: '首页'
    };
  },
  select: function(tabName){
    this.setState({
      tab: tabName
    });
  },
  render: function(){
    return(
      <TabBarIOS style={styles.flex}>
        <TabBarIOS.Item
          title="首页"
          
          onPress={this.select.bind(this, '首页')}
          icon={require("image!icon_tabbar_index")}
          selected={this.state.tab === '首页'}>
         
              <NavigatorIOS
              style={styles.container}
              barTintColor = '#32bec3' // lightBlue
              ref="part_index"
              initialRoute={{
              title: '首页',
              titleTextColor:'#00a3cb',
              component: Index_Content_Name,
              rightButtonTitle:'地图',

              onRightButtonPress:()=>{
                this.refs.part_index.navigator.push({
                  title:'地图',
                  component:Map,
                  passPrps:{
                    type:'餐饮'
                  }
                });
              }
              }}
          />
           

        </TabBarIOS.Item>

        <TabBarIOS.Item
          title="体验馆"
          onPress={this.select.bind(this, 'part_two')}
          icon={require("image!icon_tabbar_vr")}
          selected={this.state.tab === 'part_two'}>
              <NavigatorIOS
              style={styles.container}
              barTintColor = '#32bec3' // lightBlue
              initialRoute={{
              title: '体验馆',
              component: Vr,
              }}
              />
              
        </TabBarIOS.Item>

         <TabBarIOS.Item
          title="商场"
          onPress={this.select.bind(this, '商场')}
         icon={require("image!icon_tabbar_shop")}
          selected={this.state.tab === '商场'}>
           <NavigatorIOS
              style={styles.container}
              barTintColor = '#32bec3' // lightBlue
              initialRoute={{
              title: '商场',
              component: Shop_Name,
              }}
              />
          
        </TabBarIOS.Item>



        <TabBarIOS.Item
          title="我的"
          onPress={this.select.bind(this, '我的')}
          icon={require("image!icon_tabbar_mine")}
          selected={this.state.tab === '我的'}>
             <NavigatorIOS
              style={styles.container}
              barTintColor = '#32bec3' // lightBlue
              initialRoute={{
              title: '我的',
              component: About_Name,
              }}
              />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
});

var styles = StyleSheet.create({
  flex:{
    flex: 1,
  },
  container:{
    flex:1,
    backgroundColor:'white',
  },
  message:{
    alignItems:'center',
    marginLeft:5,
    marginRight:5,
  },
  message_title:{
    fontSize:18,
    color: '#18B5FF',
    marginBottom:5,
  },
  list:{
    height:30,
    fontSize:15,
    marginLeft:10,
    marginTop:10,
  }
});

AppRegistry.registerComponent('cute', () => cute);
