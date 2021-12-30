import React, {useState} from 'react';
import {Text, View, Dimensions, StyleSheet} from 'react-native';
import {Route1,Route2, Route3, Route4} from './MenuTabs';
import {farmData, produce} from '../global/Data';
import {TabView, TabBar} from 'react-native-tab-view';
import {Icon} from 'react-native-elements';


const SCREEN_WIDTH = Dimensions.get('window').width
const initialLayout = SCREEN_WIDTH;


const MenuProductScreen =({navigation, route}) => {

  const [index, setIndex] = useState(0);
  const [routes] =useState(produce)
  
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
    
    const renderScene = ({route}) => {
      switch(route.key){
        case 1:
          return <Route1  name={navigation}/>
       case 2:
          return <Route2  name={navigation} />
       case 3:
          return <Route3  name={navigation} />
       case 4:
          return <Route4  name={navigation} />      
             
       default:
         return null
      }
    
    }
    
  return (
    <View style={styles.container} >
      <View style={styles.view1}> 
      <Icon  
         name="arrow-left"
         type="material-community"
         color ="black"
         size={25}
         onPress ={() =>{
           navigation.goBack();
         }}
      />
      
      <Text style={styles.text1}>Produce</Text>
      </View>
        
       <TabView 
             navigationState={{ index, routes }}
             renderScene={renderScene}
             onIndexChange={setIndex}
             initialLayout={initialLayout}
             renderTabBar = {renderTabBar}
             tabBarPosition ="top"
             navigation = {navigation}
             route = {route}
          /> 
          
    </View>
  
  )
}

export default MenuProductScreen

const styles = StyleSheet.create({

  scene: {
    flex: 1,
  },
  container: {
    flex:1,
    top:0,
    left:0,
    right:0
  },
  
  view1:{
    flexDirection:"row",
    alignItems:"center",
    padding:10,
    backgroundColor:"green",
    top:0,
    left:0,
    right:0,
    paddingTop: 25
  },
  
  text1: {
    fontWeight:"bold",
    marginLeft:40,
    color:"black",
    fontSize:18
  },
  view2: {
    marginTop:5,
    paddingBottom:20
  },
  tab:{
    paddingTop: 0,
    backgroundColor:"grey",
    justifyContent:"space-between",
  },
  tabContainer: {
    alignItems: "center",
    alignContent:"center",
    justifyContent:"center"
  
  },
  
  tabLabel:{
    fontWeight: 'bold',
    color: 'black',
    
  },
  tabStyle:{
    width:SCREEN_WIDTH/4,
    maxHeight:45,
  },
  
  scene2: {
    backgroundColor:"steelblue"
  }

})
