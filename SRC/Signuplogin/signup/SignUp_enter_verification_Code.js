import { SafeAreaView, StyleSheet, Text, View,TextInput,Image,TouchableOpacity } from 'react-native';
import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';

const SignUp_enter_verification_Code = ({navigation,route}) => {
  const [code, setCode] = useState('');

  const { useremail,userVerificationCode } = route.params;

  console.log(useremail,userVerificationCode)

// const handlecode = async () => {
//   if(code === ''){
//     alert('Please enter code');
//     return;
//   }else if(code!== userVerificationCode){
//     alert('Invalid code');
//     return;
//   }else{
//     code == userVerificationCode? alert('Verified') : alert('Invalid code');
//     alert('Verified');
//     navigation.navigate('Signup_Choose_Username');
//   }
// }

const handlecode = async () => {
  if(code == userVerificationCode){
    alert('Verified');
    navigation.navigate('Signup_Choose_Username',{
      useremail:useremail,
    });
  }else{
    alert('Invalid code');
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
<Text style={{fontSize:30,color:'white',marginBottom:20}} >Enter Your code</Text>

      <TextInput value={code} onChangeText={(Text)=>setCode(Text)} style={{height:50,width:300,backgroundColor:'white',borderRadius:10,padding:10,fontSize:15,justifyContent:'center',marginBottom:20}} placeholder="Enter Your 6 Digit Verification Code" />

      <TouchableOpacity style={{marginBottom:20,height:50,width:300,backgroundColor:'black',borderRadius:10,marginTop:20,padding:10,fontSize:20,color:'white',borderWidth:1,borderBlockColor:'white'}} onPress={handlecode}>
  <Text style={{alignSelf:'center',color:'white'}}>Next</Text>
</TouchableOpacity>


        </View>
    </SafeAreaView>
  )
}

export default SignUp_enter_verification_Code

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


