import { StyleSheet, Text, View ,ScrollView,TextInput} from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import Chatcard from './Chatcard'
import { useState } from 'react';


const All_Chating = ({navigation}) => {
  const [keyboard,setkeyboard]=useState('')
  console.log(keyboard)

  const chat =[
    {
      id:1,
username:'user1',
profile_pic:'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
lastmessage:'hello',
time:'10:00'
    },
    {
      id:2,
username:'user2',
profile_pic:'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
lastmessage:'hello',
time:'10:00'
    },
    {
      id:3,
username:'user3',
profile_pic:'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
lastmessage:'hello',
time:'10:00'
    },
    {
      id:4,
username:'user4',
profile_pic:'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
lastmessage:'hello',
time:'10:00'
    },
    {
      id:5,
username:'user5',
profile_pic:'https://media.sproutsocial.com/uploads/2022/06/profile-picture.jpeg',
lastmessage:'hello',
time:'10:00'
    }
  ]
  return (
    <ScrollView  style={{backgroundColor:'black'}}>
      <View style={styles.container}>
      <View style={{backgroundColor:'black',width:'90%',height:50,flexDirection:'row',alignItems:'center'}}>
      <AntDesign name="back" size={30} color="white"  onPress={()=>navigation.navigate('MainPage')} style={{marginLeft:10,marginTop:10}}/>
      <Text style={{color:'white',fontSize:20,marginLeft:10,marginTop:10}}>Your Chat</Text>
      </View>
    <View style={{backgroundColor:'black',width:'90%',marginHorizontal:'auto',padding:15,flexDirection:'row', marginTop:10}}>
<TextInput onChangeText={(text)=>setkeyboard(text)}  style={{backgroundColor:'white',width:'100%',height:50,borderRadius:30,marginLeft:10,padding:10,fontSize:15}} placeholder="Search" />

    </View>
      </View>
      <View>
        {
          chat.filter((chat)=>{
            if(keyboard==''){
              return chat
            }else if(chat.username.toLocaleLowerCase().includes(keyboard.toLocaleLowerCase())){
              return chat
            }
          })
          
          .map((item)=>(
            <Chatcard key={item.id} username={item.username} profile_pic={item.profile_pic} lastmessage={item.lastmessage} time={item.time} />
          ))
        }

      </View>
      
    </ScrollView>
  )
}

export default All_Chating

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    borderWidth: 1,
    borderColor: 'white',
    width:'90%',
    marginHorizontal:'auto',
    borderRadius: 10,
   
    
  },

})