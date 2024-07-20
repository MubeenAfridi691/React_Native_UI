import { SafeAreaView, StyleSheet, Text, View,TextInput,Image,TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
const Forget_password_Enter_email = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = () => {
    if(email ==0){
      alert("Please enter your email")

      
    }else{
    setLoading(true);
    fetch('http://10.0.2.2:3000/verifyp',{
      method:'post',
      headers:{
        'Content-Type':'application/json'
      },
      body: JSON.stringify({
        email: email
    })


    }).then(res => {
      if (res.message === "User does not exist with this email") {
          alert("User does not exist with this email");
      }
      return res.json();
  })
  .then(res => {
      if (res.message === "Verification code sent to your email") {
        console.log(res.verificationCode);
          setLoading(false);
          // alert("Verification code sent to your email");
          navigation.navigate('Forget_password_Enter_verification_Code', {
              useremail: email,
              userVerificationCode: res.verificationCode
          });
      } else {
          setLoading(false);
          alert("User does not exist with this email");
      }
  })
  .catch(error => {
      setLoading(false);
      console.error('Error:', error);
      Alert.alert('Error:', error.message);
  });
}
};
    
    
  

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
<Text style={{fontSize:30,color:'white',marginBottom:20}} >Verify Your Email</Text>

    <TextInput value={email} onChangeText={(text)=>setEmail(text)} style={{height:50,width:300,backgroundColor:'white',borderRadius:10,padding:10,fontSize:15,justifyContent:'center',marginBottom:20}} placeholder="Enter Your Email" />

    {
      loading?
      <ActivityIndicator/>:
      <TouchableOpacity style={{marginBottom:20,height:50,width:300,backgroundColor:'black',borderRadius:10,marginTop:20,padding:10,fontSize:20,color:'white',borderWidth:1,borderBlockColor:'white'}} onPress={handleSubmit}>
<Text style={{alignSelf:'center',color:'white'}}>Next</Text>
</TouchableOpacity>
    }


      </View>
  </SafeAreaView>
  )
}

export default Forget_password_Enter_email

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