import React, { useState, useEffect } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Changepassword = ({ navigation }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [oldpassword, setOldpassword] = useState('');
  const [email, setEmail] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const value = await AsyncStorage.getItem('userdata');
        if (value !== null) {
          const userData = JSON.parse(value);
          setEmail(userData.email); // Set email state with the retrieved email
        } else {
          console.log('No userdata found in AsyncStorage');
        }
      } catch (error) {
        console.error('Error retrieving userdata:', error);
        // Handle error as needed
      }
    };

    fetchData();
  }, []); // Empty dependency array ensures this effect runs only once on component mount

  const handlesubmit = () => {  
    if (password === "" || confirmPassword === "") {
      return Alert.alert("Please enter your password");
    } else if (password !== confirmPassword) {
      return Alert.alert("Passwords do not match");
    } else {
      fetch('http://10.0.2.2:3000/change', {
        method: 'post',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          newpassword: password,
          oldpassword: oldpassword,
          email: '' 
        }),
      })
      .then((res) => res.json())
      .then((data) => {
        if (data.message === 'Password changed successfully') {
          Alert.alert('Password updated successfully');
          navigation.navigate('setting'); // Navigate to 'setting' screen after successful password change
        } else {
          Alert.alert('Password update failed');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        Alert.alert('An error occurred. Please try again.');
      });
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
          source={{uri: 'https://img.freepik.com/premium-photo/social-media-icon-with-white-background_1037615-13950.jpg?w=900'}}
          style={styles.image}
        />
        <Text style={styles.title}>Choose Your Password</Text>

        <TextInput
          onChangeText={(text) => setPassword(text)}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Choose Password"
        />
        <TextInput
          onChangeText={(text) => setConfirmPassword(text)}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Confirm Password"
        />
        <TextInput
          onChangeText={(text) => setOldpassword(text)}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Old Password"
        />

        <TouchableOpacity style={styles.button} onPress={handlesubmit}>
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 100,
    resizeMode: 'cover',
    marginBottom: 20,
  },
  title: {
    fontSize: 30,
    color: 'white',
    marginBottom: 20,
  },
  input: {
    height: 50,
    width: 300,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    fontSize: 15,
    marginBottom: 20,
  },
  button: {
    height: 50,
    width: 300,
    backgroundColor: 'black',
    borderRadius: 10,
    marginTop: 20,
    justifyContent: 'center',
  },
  buttonText: {
    alignSelf: 'center',
    color: 'white',
    fontSize: 18,
  },
});

export default Changepassword;
