import React, {useState, useEffect, useRef} from 'react';
import { View, Text, StyleSheet, Dimensions,Image, TextInput} from 'react-native';
import {colors, parameters, title} from "../../global/styles";
import {Icon, Button, SocialIcon} from 'react-native-elements';
import Header from '../../components/Header';
import * as Animatable from 'react-native-animatable';
import Swiper from 'react-native-swiper';
import {kales, avocado, matoke, sugarcane, maize, sweetpotatoe, tomatoes, oranges }  from './imports';


export default function SignInWelcomeScreen({navigation}){
   return(
   <View  style={{flex:1, backgroundColor:"powderblue"}}>
     <View style={{flex:3, justifyContent:"flex-start",alignItems:"center", paddingTop:20}}>
       <Text style={{fontSize:26, color:"green", fontWeight:"bold"}}>Harvest Directly from Farms</Text>
       <Text style={{fontSize:26, color:"green", fontWeight:"bold"}}> All Over the Country</Text>
     </View>
     
     <View style={{flex:14, justifyContent:"center"}}>
       <Swiper autoplay={true} autoplayTimeout={2} >
         <View style={styles.slide1}>
           <Image  
             source ={kales}
             style = {{height:"100%", width:"100%"}}
           />
         </View>
         <View style={styles.slide2}>
           <Image  
             source ={maize}
             style = {{height:"100%", width:"100%"}}
           />
         </View>
         <View style={styles.slide3}>
           <Image  
             source ={avocado}
             style = {{height:"100%", width:"100%"}}
           />
         </View>
         <View style={styles.slide3}>
           <Image  
             source ={tomatoes}
             style = {{height:"100%", width:"100%"}}
           />
         </View>
         <View style={styles.slide3}>
           <Image  
             source ={oranges}
             style = {{height:"100%", width:"100%"}}
           />
           </View>
           <View style={styles.slide3}>
           <Image  
             source ={sweetpotatoe}
             style = {{height:"100%", width:"100%"}}
           />
         </View>
         <View style={styles.slide4}>
           <Image  
             source ={maize}
             style = {{height:"100%", width:"100%"}}
           />
         </View>
         <View style={styles.slide4}>
           <Image  
             source ={matoke}
             style = {{height:"100%", width:"100%"}}
           />
         </View>
       </Swiper>
       </View>
       <View style={{flex:5}}>
          <View style={{marginHorizontal:29, marginTop:30, marginBottom:0}}>
           <Button 
             title="SIGN IN"
             buttonStyle= {{...parameters.styledButton, backgroundColor:"green"}}
             titleStyle = {{...parameters.buttonTitle, color:"white"}}
             onPress={() => {
                 navigation.navigate("SignInScreen")
             
             }}
           />
         </View>
         <View style={{marginHorizontal:29, marginTop:10}}>
             <Button  
               title="create an account"
               buttonStyle={{...parameters.styledButton, backgroundColor:"light-green"}}
               titleStyle ={{...parameters.buttonTitle, color:"green"}}
             />
           </View>
       </View>
 </View>
   )
}

const styles = StyleSheet.create({
  slide1:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9D06EB'
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#97CAE5'
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#92B8D9'
  },
  slide4: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue'
  },
  createButton: {
    backgroundColor:"#00A36C",
    alignContent:"center",
    justifyContent:"center",
    borderRadius:12,
    borderWidth:1,
    borderColor:"blue",
    //height:30,
    //paddingHorizontal:10,
    height: 50,
    paddingHorizontal:20,
    width: "100%",
    
  },
  createButtonTitle:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    alignItems:"center",
    justifyContent:"center",
  }
  
  

})
