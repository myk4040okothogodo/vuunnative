import React,{useState} from 'react';
import {StyleSheet, Text, View, ScrollView, Dimensions, TouchableOpacity,Modal} from 'react-native';
import  FarmHeader from '../components/FarmHeader';
import {farmData, produce} from '../global/Data';
import {fonts} from '../global/styles';
import {Icon} from 'react-native-elements';
import {TabView, TabBar} from 'react-native-tab-view';
import CropScreen from './FarmTabs/CropScreen';




const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;

const FarmHomeScreen = ({navigation, route}) => {

    const initialLayout = SCREEN_WIDTH;
    const [index, setIndex] = useState(0);
    
    const {id, farm} = route.params
    
    
    
    const[routes] = useState([
       {key:'first',  title:'CROP'},
       {key:'second', title:'INFO'},
       {key:'third',  title:'REVIEWS'},
       {key:'fourth', title:'GALLERY'},    
    ]);
    
    const renderTabBar = props =>(
      <TabBar  
        {...props}
        indicatorStyle = {{backgroundColor:"white"}}
        tabStyle = {styles.tabStyle}
        scrollEnabled = {true}
        style = {styles.tab}
        labelStyle = {styles.tabLabel}
        contentContainerStyle = {styles.tabContainer}
      />
    )
    
    
    const UpdateRoute1 = () => {
      return (
        <View></View>
      )
    }
    
    const menuPressed = () => {
      navigation.navigate("MenuProductScreen")
    
    }
    
    
    
    return (
  <View style={styles.container}>
    <ScrollView>
      <View>
          <FarmHeader  id={id} navigation={navigation} />
          {farmData[id].discount &&
          <View style={styles.view1}>
            <Text style={styles.text1}> GET {farmData[id].discount}% OFF on TOTAL </Text> 
          </View>
          }
        <View style={styles.view2}>
          <View style={styles.view3}>
            <Text style={styles.text2}>{farmData[id].farmName}</Text>
            <Text style={styles.text1}>{farmData[id].produceType}</Text>
              <View style={styles.view4}>
                <Icon 
                  name="star"
                  type="material-community"
                  color="grey"
                  size={15}
                />
                <Text style={styles.text4}>
                  {farmData[id].avarageReview}
                </Text>
                <Text style={styles.text5}>
                  {farmData[id].numberOfReview}
                </Text>
                <Icon 
                  name="map-marker"
                  type="material-community"
                  color="grey"
                  size={15}
                />
                <Text style={styles.text6}>{farmData[id].farAway} Km away</Text>
              </View>
          </View>
          <View style={styles.view5}>
            <Text style={styles.text6}>Collect</Text>
            <View style={styles.view7}>
              <Text style={styles.text7}>{farmData[id].collectTime}</Text>
              <Text style={styles.text8}>Hrs</Text>
            </View>
          </View>
          <View style={styles.view8}>
            <Text style={styles.text6}>Delivery</Text>
            <View style={styles.view9}>
              <Text style={styles.text9}>{farmData[id].deliveryTime}</Text>
              <Text style={styles.text11}>Hrs</Text>
            </View>  
          </View>
        </View>
      </View>
       <View style={styles.view10}>
          <TabView 
             navigationState={{ index, routes }}
             renderScene={UpdateRoute1}
             onIndexChange={setIndex}
             initialLayout={initialLayout}
             renderTabBar = {renderTabBar}
             tabBarPosition ="top"
          />
       </View>
        { index === 0 &&
        <CropScreen onPress={menuPressed}/>
        
        }
    </ScrollView>   
    <TouchableOpacity>
      <View style={styles.view11}>
        <View style={styles.view12}>
          <Text style={styles.text13}>View-Cart</Text>
          <View style={styles.view13}>
             <Text style={styles.text13}>0</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  </View>
 )
}

export default FarmHomeScreen;

const styles = StyleSheet.create({
    container:{
      flex:1
    },
    view1:{
      width: "100%",
      padding:3,
      alignItems:"center",
      justifyContent:"center"
    },
    text1:{
      color:"green",
      fontSize:14,
      fontWeight:"bold"  
    },
    view2:{
      flexDirection:"row",
      flex: 1,
      marginBottom:5,
      marginHorizontal:10,
      justifyContent:"space-between"
    
    },
    view3:{
       flex:8,
    
    },
    text2:{
      fontSize: 20,
      fontWeight:"bold",
      color:"grey",
    
    },
    text3:{
      fontSize: 15,
      color:"grey",
    
    },
    view4:{
      flexDirection:"row",
      alignItems:"center",
      marginTop:5
    
    },
    text4:{
      fontFamily: fonts.android.bold,
      fontSize: 13,
      color:"grey",
      marginLeft:2,
    
    },
    text5:{
      fontFamily: fonts.android.bold,
      fontSize:13,
      color:"grey",
      marginLeft:2,
      marginRight: 5
    
    },
    text6:{
      fontFamily: fonts.android.bold,
      fontSize: 13,
      color:"grey",
      marginLeft:0,
    
    },
    view5:{
      flex:3,
      alignItems:"center",
    
    },
    text6:{
      fontWeight:"bold",
      color:"grey",
      fontSize:15,
    },
    
    view7:{
      width: 40,
      height:40,
      alignItems: "center",
      borderRadius: 20,
      justifyContent: "space-around"
    },
    text7:{
      fontSize: 16,
      fontWeight: "bold",
      color:"black",
      marginTop:5
      
    },
    text8:{
      fontSize:13,
      color:"black",
      marginBottom:5,
    
    },
    
    view8:{
      flex:3,
      alignItems:"center"
    },
    
    text9:{
      fontSize:15,
      fontWeight:"bold",
      color:"grey"
    },
    
    view9:{
      width:40,
      height:40,
      backgroundColor:"green",
      alignItems:"center",
      borderRadius:20,
      justifyContent:"space-around",
     
    },
    text10:{
      fontSize:16,
      color:"white",
      marginTop:5
    
    },
    text11:{
      fontSize:13,
      color:"white",
      marginBottom:5
    },
    
    view10:{
      elevation:10,
      backgroundColor:"white",
    
    },
    
    view11:{
      backgroundColor:"green",
      height:50,
      alignContent:"center",
      marginBottom:0,
      justifyContent:"center"
    
    },
    
    view12:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      alignContent:"center",
   
    
    },
    
    text12:{
      padding:10,
      fontWeight:"bold",
      fontSize:18,
      color:"white",
    
    },
    view13:{
      borderWidth:1,
      marginRight:10,
      borderColor: "white",
      borderRadius:6,
      paddingBottom:2
    
    },
    
    text13:{
      paddingHorizontal:3,
      fontWeight:"bold",
      fontSize: 18,
      color:"white"
    
    },
    tab:{
      paddingTop:0,
      backgroundColor:"lightgreen",
      justifyContent:"space-between",
      alignItems:"center"
    
    },
    
    tabContainer: {
      alignItems: "center",
      alignContent:"center",
      justifyContent:"center",
    
    },
    tabLabel:{
      fontWeight:"bold",
      color:"white"
    
    },
    tabStyle:{
      width:SCREEN_WIDTH/4,
      maxHeight:45,
    
    },
    view14: {
      flexDirection: "row",
      alignItems:"center",
      padding:10,
      backgroundColor: "green",
      top:0,
      left:0,
      right:0,
      paddingTop:25
    },
    text14:{
      fontWeight:"bold",
      marginLeft:40,
      color:"black",
      fontSize:18
    },
    view15: {
      marginTop:5,
      paddingBottom:20
    
    }
})
