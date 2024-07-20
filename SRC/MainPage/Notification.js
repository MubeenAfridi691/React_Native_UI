import { StyleSheet, Text, View ,StatusBar,Image} from 'react-native'
import React from 'react'
import BottomNav from './BottomNav'
import { AntDesign } from '@expo/vector-icons';
import Followers from '../../SRC/Components/Followers'

const Notification = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      
        <View style={styles.uppernav}>
      <Image
source={{uri:'https://img.freepik.com/premium-photo/social-media-icon-with-white-background_1037615-13950.jpg?w=900'}}
style={{width: 40, height: 40,borderRadius: 100,resizeMode:'cover'}}
/>
{/* <AntDesign onPress={()=>navigation.navigate('All_chating')} name="wechat" size={35} color="black" /> */}

      </View>
      
      
      

      <BottomNav navigation={navigation} />

    </View>
  )
}

export default Notification

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



