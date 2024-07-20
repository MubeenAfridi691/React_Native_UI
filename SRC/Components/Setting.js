import { StyleSheet, Text, View,TextInput,TouchableOpacity} from 'react-native'
import React, { startTransition } from 'react'
import { AntDesign } from '@expo/vector-icons';

const Setting = ({navigation}) => {
  return (
    <View style={styles.upper}>
      <View style={styles.container}>
      <AntDesign name="back" size={30} color="white"  onPress={()=>navigation.navigate('My_user_profile')} style={{marginLeft:10,marginTop:10}}/>
      </View>
      <View style={styles.settings}>
        <Text style={styles.text}>Edit Profile</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Changepassword')}>
<Text style={styles.text}>Change Password</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate('Uploadpic')}>
<Text style={styles.text}>Upload Image</Text>
        </TouchableOpacity>
      </View>
      </View>
   
  )
}

export default Setting

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        borderColor: 'white',
        backgroundColor:'black',
        color:'white',
       
        
      },settings:{
        backgroundColor:'black',
        flexDirection:'column',
      
        marginTop:10
      },upper:{
        backgroundColor:'black',
        width:'100%',
        height:'100%'
      },text:{
        color:'white',
        fontSize:20,
        fontWeight:'bold',
        marginLeft:10,
        marginTop:10,
        borderBottomWidth:1,
        borderBottomColor:'white',
      }
      
})