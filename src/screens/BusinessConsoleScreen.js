import React, {useState} from 'react';
import {View,Image, Text,FlatList, Pressable,StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';

export default function BusinessConsoleScreen(){
  return (
     <View  style={styles.container}> 
        <Text >Business Console Screen</Text>
     </View>
  
  )
}

styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  }

})
