import { SafeAreaView, StyleSheet, Text, View,TextInput,Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

const Forget_passward_Enter_verificationcode = ({navigation,route}) => {
const {useremail,userVerificationCode} = route.params;
console.log(useremail,userVerificationCode);
const [code, setCode] = useState('');

const handlesubmit = () => {
  if(code ==0){
   return alert("Please enter your verification code")
  }else{
    if(code == userVerificationCode){
      navigation.navigate('Forget_Password_ChoosePassword',{
        useremail: useremail
        
      })
    }else{
      return alert("Please enter correct verification code")
  }

  }}

return (
    <SafeAreaView style={styles.container}>
    <View style={styles.header}>
      <AntDesign
        name="arrowleft"
        size={30}
        color="white"
        onPress={() => navigation.navigate('login')}
      />
      <Text style={styles.goBackText}>Go Back</Text>
      
    </View>
    <View style={styles.email}>

    <Image
source={{uri:'https://img.freepik.com/premium-photo/social-media-icon-with-white-background_1037615-13950.jpg?w=900'}}
style={{width: 100, height: 100,borderRadius: 100,resizeMode:'cover',marginBottom:20}}
/>
<Text style={{fontSize:10,color:'white',marginBottom:20}} >Verification Code Has been Sent to Your Email.</Text>

    <TextInput value={code} onChangeText={(text)=>setCode(text)} keyboardType='numeric' style={{height:50,width:300,backgroundColor:'white',borderRadius:10,padding:10,fontSize:15,justifyContent:'center',marginBottom:20}} placeholder="Enter Verification Code" />

    <TouchableOpacity style={{marginBottom:20,height:50,width:300,backgroundColor:'black',borderRadius:10,marginTop:20,padding:10,fontSize:20,color:'white',borderWidth:1,borderBlockColor:'white' }} onPress={handlesubmit}>
<Text style={{alignSelf:'center',color:'white'}}>Next</Text>
</TouchableOpacity>


      </View>
  </SafeAreaView>
  )
}

export default Forget_passward_Enter_verificationcode

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