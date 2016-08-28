


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
var Vr_Detail = require('./vr_detail');




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

var Util = require('./../common/util')








var List_View = React.createClass({

  _pressButton:function() {


        const { navigator } = this.props;
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
    
       this.props.navigator.push({
              title: '关于',
              component: Map,
              
          });
    },
    _pressDetail:function() {
        const {navigator} = this.props;

        this.props.navigator.push({
          title:'详情',
          component:Vr_Detail,
        });

    },

	 // <TouchableOpacity style={styles.goDou} onPress={()=>{alert(11)}}>

    //request data

  render:function(){

      return (
           <ScrollView style={styles.flex}>
             
            <View style={[styles.flexDirection, styles.inputHeight]}>
              <View style={styles.flex}>
                <TextInput
                  style={styles.input}
                  returnKeyType="search"
                  placeholder="请输入关键字"
                 />
               </View>
              <View style={styles.btn}>
                <Text style={styles.search}>搜索</Text>
              </View>
            </View>


            <View>
                 <TouchableOpacity style={[styles.row,styles.item]} onPress={()=>this._pressDetail()}>
                    <View>
                      <Image style={styles.img}
                      	source={require('./../images/list_01.jpg')}
                      />
                    </View>
                    <View style={{flex:1}}>
                      <Text style={styles.textWitdh} numberOfLines={1}>
                        名称：大连星海VR体验馆
                      </Text>
                      <Text style={styles.textWitdh} numberOfLines={1}>
                        价钱：50元
                      </Text>
                      <Text style={styles.textWitdh} numberOfLines={1}>
                        评分：五星
                      </Text>
                      
                      <Text style={styles.textWitdh} numberOfLines={1}>
                        标签：刺激,真实
                      </Text>

                      <TouchableOpacity style={styles.goDou} onPress = {() => this._pressButton()}>
                        <Text>地图</Text>
                      </TouchableOpacity>
                    </View>
                </TouchableOpacity>

            </View>    	


             <View>
                 <View style={[styles.row,styles.item]}>
                  <View>
                    <Image style={styles.img}
                    	source={require('./../images/list_02.jpg')}
                    />
                  </View>
                  <View style={{flex:1}}>
                    <Text style={styles.textWitdh} numberOfLines={1}>
                      名称：VR体验馆
                    </Text>
                    <Text style={styles.textWitdh} numberOfLines={1}>
                      价钱：50元
                    </Text>
                    <Text style={styles.textWitdh} numberOfLines={1}>
                      评分：五星
                    </Text>
                    
                    <Text style={styles.textWitdh} numberOfLines={1}>
                      标签：刺激,真实
                    </Text>

                    <TouchableOpacity style={styles.goDou} onPress = {() => this._pressButton()}>
                      <Text>地图</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                
            </View>    	


             <View>
                 <View style={[styles.row,styles.item]}>
                  <View>
                    <Image style={styles.img}
                    	source={require('./../images/list_03.jpg')}
                    />
                  </View>
                  <View style={{flex:1}}>
                    <Text style={styles.textWitdh} numberOfLines={1}>
                      名称：万达广场VR体验馆
                    </Text>
                    <Text style={styles.textWitdh} numberOfLines={1}>
                      价钱：150元
                    </Text>
                    <Text style={styles.textWitdh} numberOfLines={1}>
                      评分：五星
                    </Text>
                    
                    <Text style={styles.textWitdh} numberOfLines={1}>
                      标签：刺激,真实
                    </Text>

                    <TouchableOpacity style={styles.goDou} onPress = {() => this._pressButton()}>
                      <Text>地图</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                
            </View>    	

            




        </ScrollView>



      )

  },
});

var styles = StyleSheet.create({
  flex:{
   flex:1,
  },
  flexDirection:{
    flexDirection:'row',
  },
  container:{
    flex:1,
    backgroundColor:'#ddd'

  },
   input:{

    height:45,
    borderWidth:1,
    marginLeft: 5,
    paddingLeft:5,
    borderColor: '#ccc',
    borderRadius: 4
  },
  inputHeight:{
    
    height:45,
  },
  btn:{
    width:55,
    marginLeft:-5,
    marginRight:5,
    backgroundColor:'#23BEFF',
    height:45,
    justifyContent:'center',
    alignItems: 'center'
  },
  search:{
    color:'#fff',
    fontSize:15,
    fontWeight:'bold'

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
