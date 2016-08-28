

import React, { Component } from 'react';

module.exports = React.createClass({
  render(){
    var obj = this.props.initObj;
    return (
      <View style={[styles.header, styles.row, styles.center]}>
         <Text>有态度</Text>
        </View>
    
    );
  },

  _pop: function(){
    this.props.navigator.pop();
  }
});

var styles = StyleSheet.create({
  row:{
    flexDirection:'row'
  },
  header:{
    height:Util.navigationHeight ,
    backgroundColor:Util.navigationBarBGColor,
  },
  fontFFF:{
    color:'#fff',
    fontSize:17,
    fontWeight:'bold'
  },
  title:{
    flex:1
  },
  titlePos:{
    marginLeft:-20,
    width:200,
  },
  center:{
    justifyContent:'center',
    alignItems:'center'
  }
});