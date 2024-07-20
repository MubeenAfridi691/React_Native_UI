import { SafeAreaView, StyleSheet, Text, View,TextInput,Image,TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

const Forget_Password_ChoosePassword = ({navigation,route}) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
const {useremail} = route.params;

const handlesubmit = () => {
  if(password ==0 || confirmPassword ==0){
   return alert("Please enter your password")
  }else if(password!= confirmPassword){
    return alert("Passwords do not match")
  }else{
    setLoading(true);
    fetch('http://10.0.2.2:3000/changepassword',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email: useremail,
        password: password
      })

    }
  
  )
  navigation.navigate('Forget_password_account_recovery')

}
}


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
<Text style={{fontSize:30,color:'white',marginBottom:20}} >Choose Your Password</Text>

    <TextInput onChangeText={(text)=>setPassword(text)} secureTextEntry={true} style={{height:50,width:300,backgroundColor:'white',borderRadius:10,padding:10,fontSize:15,justifyContent:'center',marginBottom:20}} placeholder="Password" />
    <TextInput onChangeText={(text)=>setConfirmPassword(text)}  secureTextEntry={true} style={{height:50,width:300,backgroundColor:'white',borderRadius:10,padding:10,fontSize:15,justifyContent:'center',marginBottom:20}} placeholder="Confirm Password" />

{
  loading? <ActivityIndicator/>:
  <TouchableOpacity style={{marginBottom:20,height:50,width:300,backgroundColor:'black',borderRadius:10,marginTop:20,padding:10,fontSize:20,color:'white',borderWidth:1,borderBlockColor:'white'}} onPress={handlesubmit}>
  <Text style={{alignSelf:'center',color:'white'}}>Next</Text>
  </TouchableOpacity>
}


      </View>
  </SafeAreaView>
  )
}

export default Forget_Password_ChoosePassword

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