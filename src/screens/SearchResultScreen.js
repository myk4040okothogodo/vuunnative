import React from 'react';
import {StyleSheet, Text, View, Dimensions, FlatList} from 'react-native';
import SearchResultCard from '../components/SearchResultCard';
import {farmData} from '../global/Data';


const SCREEN_WIDTH = Dimensions.get('window').width;

const SearchResultScreen = ({navigation, route}) => {
  return (
    <View style={styles.container}>
       <View>
        <Text style={{...styles.listHeader, paddingLeft:10}}>Farms that Produce {route.params.item}</Text>
       </View>
       <View>
         <FlatList 
             style={{backgroundColor:"white"}}
             data = {farmData}
             keyExtractor = {(item, index) => index.toString()}
             renderItem = {({item, index}) => (
             
              <SearchResultCard  
                 screenwidth = {SCREEN_WIDTH}
                 images = {item.images}
                 avarageReview = {item.avarageReview}
                 numberOfReviews = {item.numberOfReviews}
                 farmAddress = {item.farmAddress}
                 farAway = {item.farAway}
                 farmName = {item.farmName}
                 productData = {item.productData}
                 onPressFarmCard = {() => {navigation.navigate("FarmHomeScreen", {id:index, farm:item.farmName})}}
              /> 
         )}
         
         showsVerticalScrollIndicator={false}
         />
       </View>
       
     
    </View>
  )

}

export default SearchResultScreen

const styles = StyleSheet.create({

    container: {
      flex: 1,
      paddingTop:20
    },
    listHeader:{
      color:"grey",
      fontSize: 20,
      paddingHorizontal: 10,
      paddingVertical:10,
      fontWeight: "bold"
    }
})
