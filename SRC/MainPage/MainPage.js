import { StyleSheet, Text, View ,StatusBar,Image} from 'react-native'
import React from 'react'
import BottomNav from './BottomNav'
import { AntDesign } from '@expo/vector-icons';
import Followers from '../../SRC/Components/Followers'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect,useState } from 'react';

const MainPage =({ navigation, }) => {
  // const {data,Email}=route.params
// const {Email}=route.params
  const [user, setUser] = useState('');
  useEffect(() => {
    const getUser = async () => {
      const user = await AsyncStorage.getItem('user');
      setUser(user);
    };
    getUser();
  }, []);


//  console.log('hello',user)
  
  // console.log(Email)
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <View style={styles.uppernav}>
      <Image
source={{uri:'https://img.freepik.com/premium-photo/social-media-icon-with-white-background_1037615-13950.jpg?w=900'}}
style={{width: 40, height: 40,borderRadius: 100,resizeMode:'cover'}}
/>
<AntDesign onPress={()=>navigation.navigate('All_chating')} name="wechat" size={35} color="black" />

      </View>
      {/* <View style={styles.mainPage}>
        <Text style={{color:'white'}}>Main Page</Text>
        <Followers />

      </View> */}
            <Followers />

      <BottomNav navigation={navigation} />

    </View>
  )
}

export default MainPage

const styles = StyleSheet.create({

  container: {
    backgroundColor: '#000000',
    width: '100%',
    height: '100%',
       
  },
  mainPage: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  uppernav: {
    width: '100%',
    height: 50,
    backgroundColor: '#575353',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    flexDirection: 'row',
    justifyContent:'space-between',
    alignItems: 'center',

  }
 

})