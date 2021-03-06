import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import {specialData, cropData} from '../../global/Data';

const CropScreen = ({navigation, farm, onPress}) =>{

 
  return (
    <View style={styles.container}>
       <View>
           {specialData.map((items)=>
             <View key = {items.key} style={styles.view1}>
                <TouchableOpacity onPress={onPress}>
                   <View style={styles.view2}>
                     <Icon 
                       name ="star"
                       type ="material-community"
                       color="gold"
                     />
                     <Text style={styles.text1}>{items.title}</Text>
                   </View>
                </TouchableOpacity>
             </View>
           
           )
           
           
           
           }
       </View> 
       <View>
           {cropData.map((items)=>
             <View key = {items.key} style={styles.view1}>
                <TouchableOpacity onPress={onPress}>
                   <View style={styles.view2}>
                     
                     <Text style={styles.text1}>{items.title}</Text>
                   </View>
                </TouchableOpacity>
             </View>
           
           )
           
           
           
           }
       </View> 
    </View>
  
  )
}

export default CropScreen


const styles = StyleSheet.create({
   
   container:{
     flex:1,
     marginTop:20
   },
   view1:{
     paddingHorizontal:5
   },
   
   view2:{
     flexDirection: "row",
     alignItems:"center",
     borderBottomWidth:0.25,
     padding:10,
     borderBottomColor: "#C0C0C0"
     
   
   },
   text1 :{
   color:"grey",
   fontSize:18,
   fontWeight:"bold"
   
   }


})
