import { StyleSheet, Text, View ,StatusBar,Image,TextInput,ScrollView} from 'react-native'
import React from 'react'
import BottomNav from './BottomNav'
import { AntDesign } from '@expo/vector-icons';
import Followers from '../../SRC/Components/Followers'
import { useState } from 'react';
import Usercard from '../../SRC/Components/Usercard'

const Searchuserpage = ({ navigation }) => {
const [keyboard,setkeyboard]=useState('')
const users = [
    { username: 'alice', profileImage: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png' },
    { username: 'bob', profileImage: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png' },
    { username: 'charlie', profileImage: 'https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png' }
    
  ]

  return (
//   <View style={styles.container}>
//       <StatusBar backgroundColor="#000000" barStyle="light-content" />
      
//         <View style={styles.uppernav}>
//       <Image
// source={{uri:'https://img.freepik.com/premium-photo/social-media-icon-with-white-background_1037615-13950.jpg?w=900'}}
// style={{width: 40, height: 40,borderRadius: 100,resizeMode:'cover'}}
// />
// {/* <AntDesign onPress={()=>navigation.navigate('All_chating')} name="wechat" size={35} color="black" /> */}

//       </View>
      
      
      

//       <BottomNav navigation={navigation} />

//     </View>

    
<View style={styles.container}>
      <View style={{backgroundColor:'black',width:'90%',height:50,flexDirection:'row',alignItems:'center'}}>
      <AntDesign name="back" size={30} color="white"  onPress={()=>navigation.navigate('MainPage')} style={{marginLeft:10,marginTop:10}}/>
      <Text style={{color:'white',fontSize:20,marginLeft:10,marginTop:10}}>Your Friends</Text>
      </View>
    <View style={{backgroundColor:'black',width:'90%',marginHorizontal:'auto',padding:15,flexDirection:'row', marginTop:10}}>
<TextInput onChangeText={(text)=>setkeyboard(text)}  style={{backgroundColor:'white',width:'100%',height:50,borderRadius:30,marginLeft:10,padding:10,fontSize:15}} placeholder="Search" />

    </View>
    <ScrollView>
      {
        users.filter((user)=>{
          if(keyboard===''){
            return null
          }else if(user.username.toLocaleLowerCase().includes(keyboard.toLocaleLowerCase())){
            return user
          }
        })
        
        .map((user,index)=>{
          return <Usercard username={user.username} profileImage={user.profileImage}/>
        })
      }
    </ScrollView>

      </View>


    
    
  )
}

export default Searchuserpage

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

