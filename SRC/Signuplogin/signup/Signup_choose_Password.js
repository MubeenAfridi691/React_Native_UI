import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Signup_choose_Password = ({ navigation, route }) => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { username, useremail } = route.params;

  const handlePassword = () => {
    if (password === '' || confirmPassword === '') {
      alert('Please enter password');
    } else if (password !== confirmPassword) {
      alert('Passwords do not match');
    } else {
      fetch('http://10.0.2.2:3000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: useremail, username: username, password: password }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.message === "User created successfully") {
            alert(data.message);
            navigation.navigate('login');
          } else {
            alert("Failed to create user. Please try again.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("Network error. Please try again.");
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
          source={{ uri: 'https://img.freepik.com/premium-photo/social-media-icon-with-white-background_1037615-13950.jpg?w=900' }}
          style={{ width: 100, height: 100, borderRadius: 100, resizeMode: 'cover', marginBottom: 20 }}
        />
        <Text style={{ fontSize: 30, color: 'white', marginBottom: 20 }}>Choose Your Password</Text>
        <TextInput
          onChangeText={(text) => setPassword(text)}
          value={password}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Password"
        />
        <TextInput
          onChangeText={(text) => setConfirmPassword(text)}
          value={confirmPassword}
          secureTextEntry={true}
          style={styles.input}
          placeholder="Confirm Password"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handlePassword}
        >
          <Text style={styles.buttonText}>Next</Text>
        </TouchableOpacity>
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
    paddingHorizontal: 20,
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
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default Signup_choose_Password;
