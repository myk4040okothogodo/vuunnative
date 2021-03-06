import React, {useState} from 'react';
import {View,Image, Text,FlatList, Pressable,StyleSheet, TouchableOpacity, ScrollView} from 'react-native';
import {Icon} from 'react-native-elements';
import HomeHeader from '../components/HomeHeader';
import {colors, parameters} from '../global/styles'
import {filterData} from '../global/Data';



export default function HomeScreen({navigation}){
   const [delivery, setDelivery] = useState(true)
   const [indexCheck, setIndexCheck] = useState("0")
  return(
    <View style={styles.container}> 
       <HomeHeader  navigation={navigation}/>
       <ScrollView
         stickyHeaderIndices ={[0]}
         showsVericalScrollIndicator = {true}
       
       >
       <View>
       <View style={{marginTop:10, flexDirection:"row", justifyContent:"space-evenly"}}>
            <TouchableOpacity
              onPress={() => {
                setDelivery(true)
              
              }}
            >
              <View style={{...styles.deliveryButton,backgroundColor:delivery?"green" : colors.grey}}>
                <Text style={styles.deliveryText}>Delivery</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
               onPress={() => {
                setDelivery(false)
                navigation.navigate("HarvestingPoints")
              
              }}
            >
              <View style={{...styles.deliveryButton,backgroundColor:delivery? colors.grey : "green"}}>
                <Text style={styles.deliveryText}>Pick up</Text>
              </View>
            </TouchableOpacity>
     </View >
       </View> 
       <View style={ styles.filterview} >
       <View  style={styles.addressview}>
       <View style={{flexDirection:"row", alignItems:"center",marginLeft:5, paddingLeft:10}}>
          <Icon  
            type="material-community"
            name="map-marker"
            color= "green"
            size = {26}
          
          />
          <Text style={{ marginLeft:2,marginRight:15}}>great-wall,Beijing Road</Text>
       
       </View>
       <View style={styles.clockview}>
          <Icon  
            type="material-community"
            name="clock-time-four"
            color= "green"
            size = {26}
          
          />
          <Text style={{ marginLeft:3,padding:5,marginRight:12}}>Now</Text>
       
       </View>
       </View>
       <View>
         <Icon  
            type="material-community"
            name="tune"
            color= "green"
            size = {26}
          
          />
       </View>
       </View>
       <View style={styles.headerTextView}>
          <Text style={styles.headertext}>Categories</Text>
       </View>
       <View>
          <FlatList  
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data = {filterData}
            keysExtractor ={(item) => item.id}
            extraData = {indexCheck}
            renderItem = {({item, index}) => (
                <Pressable
                  onPress={() => {
                    setIndexCheck(item.id)
                  }}
                  >
                  <View style={indexCheck == item.id ? {...styles.smallCardSelected}:{...styles.smallCard}}>
                     <Image  
                        style={{height:70, width:70, borderRadius:30}}
                        source={item.image}
                     /> 
                     <View>
                       <Text style={indexCheck === item.id ? {...styles.smallCardTextSelected}:{...styles.smallCardText}}> {item.name}</Text>
                     </View>
                  </View>
                </Pressable> 
            
            )}
          
          /> 
       </View>
       <View style={styles.headerTextView}>
          <Text style={styles.headertext}>Free Delivery Now</Text>
       </View>
       </ScrollView>
       { delivery && 
       <View style={styles.floatButton}>
         <TouchableOpacity
           onPress={()=>{
           navigation.navigate('HarvestingPoints')}}
         >
           <Icon 
             name="place"
             type="material"
             size={30}
             color="green"
           
           />
           <Text style={{color:"grey"}} onP>Map</Text>
         </TouchableOpacity>
       </View>
       }
    </View>
  
  )
}

const styles = StyleSheet.create({
   container:{
     flex:1,
     
   },
   deliveryButton:{
     paddingHorizontal: 20,
     borderRadius: 14,
     paddingVertical:5
   
   },
   deliveryText:{
     marginLeft: 5,
     fontSize: 15
   
   },
   filterview:{
   flexDirection:"row",
    alignItems:"center", 
    justifyContent:"space-evenly", 
    marginHorizontal:10, 
    marginTop:10, 
    marginVertical:10
    },
    clockview:{
    flexDirection:"row", 
    alignItems:"center", 
    backgroundColor:"white", 
    borderRadius:10,
    marginRight:10
    },
    addressview: {
    flexDirection:"row", 
    backgroundColor:"grey", 
    borderRadius:15, 
    paddingVertical:5,
    justifyContent:"space-evenly",
    paddingHorizontal:14
    },
    headertext:{
      
    color:"green",
    fontSize:26,
    fontWeight:"bold",
    paddingLeft:20,
    
    },
    headerTextView:{
    marginTop: 10,
    backgroundColor: "grey",
    paddingVertical:3,
    
    },
    smallCard:{
      backgroundColor:"grey",
      justifyContent:"center",
      padding:5,
      borderRadius:30,
      alignItems: "center",
      width: 80,
      margin: 10,
      height: 100
    },
    smallCardSelected:{
     backgroundColor:"green",
      justifyContent:"center",
      padding:5,
      borderRadius:30,
      alignItems: "center",
      width: 80,
      margin: 10,
      height: 100
    },
    smallCardTextSelected: {
      fontWeight: "bold",
      color:colors.cardbackground,
      
    },
    smallCardText: {
      fontWeight: "bold",
      color:"green",
      
    },
    floatButton:{
      position: 'absolute',
      bottom: 10, right:15,
      backgroundColor: "white",
      elevation:10,
      width:60, height:60,
      borderRadius: 30,
      alignItems:'center'
    }
    
   

})
