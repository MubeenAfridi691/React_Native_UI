import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Chatcard = ({
    username,
    profile_pic,
    lastmessage,
    time,
}) => {
    // console.log(username, profile_pic, lastmessage, time)
  return (
    <View style={styles.container}>
       
       <Image source={{uri:profile_pic}} style={styles.image}/>
       <View style={{flexDirection:'column',marginLeft:10,marginTop:10}}>
       <Text style={{color:'black',fontSize:20,fontWeight:'800',fontStyle:'italic',marginLeft:10,marginTop:5}}>{username}</Text>
       
      
       <Text style={{color:'black',fontSize:10,marginLeft:10,marginTop:10}}>{lastmessage}</Text>
       </View>

      
    </View>
  )
}

export default Chatcard

const styles = StyleSheet.create({
    container: {
        width: '90%',
        backgroundColor: 'darkgray',
        flexDirection:'row',
       height: 70,
       marginVertical:'auto',
       marginLeft:10,
       borderRadius:30,
       marginTop:10,
       

       
    },
    image: {
        width: 50,
        height: 50,
        borderRadius: 100,
        resizeMode:'cover',
        marginLeft:10,
        marginTop:10,
        marginRight:10,
        marginBottom:10,
    }
    
})