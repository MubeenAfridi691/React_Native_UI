import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const BottomNav = ({navigation}) => {
  // const {Email}=route.params
  return (
    <View style={styles.container}>
      <View style={styles.bottomNav}>
      <Entypo name="home" size={24} color="black"  onPress={()=>navigation.navigate('MainPage')} />
      <AntDesign name="search1" size={24} color="black" onPress={()=>navigation.navigate('Searchuserpage')} />
      <AntDesign name="user" size={24} color="black" onPress={()=>navigation.navigate('My_user_profile')} />
      <AntDesign name="heart" size={24} color="black"  onPress={()=>navigation.navigate('Notification')}/>

      </View>
      {/* <BottomNav/> */}
      
    </View>
  )
}

export default BottomNav

const styles = StyleSheet.create({
    container: {
        // backgroundColor: 'red', 
        width: '100%',
        height: 50,
        position: 'absolute',
        bottom: 0,
        zIndex:1000

       
    },
    bottomNav: {
        flexDirection: 'row',
        justifyContent:'space-around',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 10,
        zIndex:1000
    }
})