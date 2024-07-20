import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Signup_enter_email = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  // const handleEmail = async () => {
  //   // Check if email is provided
  //   if (email === '') {
  //     Alert.alert('Please enter email');
  //     return;
  //   }

  //   setLoading(true); // Set loading state to true before making the request

  //   try {
  //     const response = await fetch('http://192.168.1.10:3000/verify', {
  //       method: 'POST',
  //       headers: {
  //         'Accept': 'application/json',
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({
  //         email: email
  //       })
  //     });

  //     const data = await response.json();

  //     // Handle different response scenarios
  //     if (response.status === 200) {
  //       if (data.message === "Invalid Credentials") {
  //         Alert.alert('Invalid Credentials');
  //       } else if (data.message === "Verification Code Sent to your Email") {
  //         Alert.alert(data.message);
  //         navigation.navigate('Signup_EnterVerificationCode', {
  //           useremail: data.email,
  //           userVerificationCode: data.VerificationCode
  //         });
  //       } else {
  //         Alert.alert('Unknown response from server');
  //       }
  //     } else {
  //       Alert.alert('Failed to verify email');
  //     }
  //   } catch (error) {
  //     // Handle fetch errors
  //     console.error('Error during fetch:', error);
  //     Alert.alert('Failed to communicate with server');
  //   } finally {
  //     setLoading(false); // Always set loading state to false after request completes
  //   }
  // };

  const handleEmail = () => {
    if (email === '') {
        Alert.alert('Please enter email');
    } else {
        setLoading(true);
        fetch('http://10.0.2.2:3000/verify', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email
            })
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            if (data.message === "Verification code sent to your email") {
              console.log(data.verificationCode);
                setLoading(false);
                Alert.alert(data.message);
                navigation.navigate('Signup_enter_verification_Code', {
                    useremail: email,
                    userVerificationCode: data.verificationCode
                });
            } else {
                setLoading(false);
                Alert.alert('Invalid credentials');
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
          style={{width: 100, height: 100, borderRadius: 100, resizeMode:'cover', marginBottom: 20}}
        />
        <Text style={{fontSize: 15, color: 'white', marginBottom: 20}}>A Verification Code Has Been Sent To Your Email.</Text>

        <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="Enter Your Email"
        />

        {loading ?
          <ActivityIndicator size="large" color="white" style={{ marginTop: 20 }} />
          :
          <TouchableOpacity
            style={styles.button}
            onPress={handleEmail}>
            <Text style={{ alignSelf: 'center', color: 'white', fontSize: 18 }}>Next</Text>
          </TouchableOpacity>
        }
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 10,
    fontSize: 15,
    marginBottom: 20,
  },
  button: {
    height: 50,
    width: 300,
    backgroundColor: 'black',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
});

export default Signup_enter_email;
