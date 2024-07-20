import { SafeAreaView, StyleSheet, Text, View,TextInput,Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';

const Signup_created_Account = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      
    </View>
    <View style={styles.email}>

    <Image
source={{uri:'https://img.freepik.com/premium-photo/social-media-icon-with-white-background_1037615-13950.jpg?w=900'}}
style={{width: 100, height: 100,borderRadius: 100,resizeMode:'cover',marginBottom:20}}
/>
<View style={{flexDirection:'row',alignItems:'center',padding:10}}>
<Text style={{fontSize:30,color:'white',marginBottom:20}} >
<AntDesign name="checkcircleo" size={30} color="green"/>
<Text style={{color:'white',fontSize:20}}>Account Created Successfully</Text>
</Text>
</View>

    
    <TouchableOpacity style={{marginBottom:20,height:50,width:300,backgroundColor:'black',borderRadius:10,marginTop:20,padding:10,fontSize:20,color:'white',borderWidth:1,borderBlockColor:'white'}} onPress={()=>navigation.navigate('MainPage')}>
<Text style={{alignSelf:'center',color:'white'}}>Let's Roll</Text>
</TouchableOpacity>


      </View>
  </SafeAreaView>
  )
}

export default Signup_created_Account

const styles = StyleSheet.create({
  container: {
height:'100%',

backgroundColor: 'black',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  goBackText: {
    color: 'white',
    fontSize: 20,
    marginLeft: 10,
  },
  email: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '70%',
  }
});