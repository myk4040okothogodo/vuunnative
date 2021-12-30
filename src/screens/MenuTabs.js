import React from 'react';
import {View, StyleSheet, FlatList, TouchableOpacity, Text} from 'react-native';
import {cropData, cropdetailedData} from "../global/Data";
import MenuCard from '../components/MenuCard';


export function Route1(){
  return(
    <View style={{flex:1}}>
       <View style={styles.view2}>
         <FlatList 
           style={{backgroundColor:"white"}}
           data = {cropdetailedData}
           keyExtractor = {(item, index) =>index.toString()}
           renderItem = {({item, index}) => (
             <TouchableOpacity>
                <MenuCard 
                     productName = {item.crop}
                     image ={item.image}
                     price = {item.price}
                     productDetails = {item.details}
                />
             
             </TouchableOpacity>
           )}
           showsVerticalScrollIndicator = {false}
         
         
         />
       </View>
    
    </View>
  
  )

}


export const Route2 = () => (<View style={styles.scene}/>)
export const Route3 = () => (<View style={{...styles.scene, backgroundColor:"purple"}}/>)
export const Route4 = () => (<View style={{...styles.scene2, backgroundColor:"steelblue"}}/>)

const styles = StyleSheet.create({
  scene:{
    flex:1,
    backgroundColor: "purple"
  },
  view2:{
    marginTop:5,
    paddingBottom:2
  },
  
  scene2: {
    backgroundColor: "purple"
  }

});
