import React, { useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { View, Text, TextInput, TouchableOpacity, Image, ActivityIndicator, Alert } from 'react-native';
const Login =  ({ navigation }) => {
    const [Email, setEmail] = useState('');
    const [Password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    

    const handleSubmit = async() => {
        if (Email === '' || Password === '') {
            return alert('Please Enter Email and Password');
        } else {
            setLoading(true);
            fetch('http://10.0.2.2:3000/login', {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: Email,
                    password: Password
                })
            })
            .then(res => res.json()) // Parse response body as JSON
            .then(async data => {
                if (data.message === "User does not exist with this email") {
                    setLoading(false);
                    alert("User does not exist with this email");
                } else if (data.message === 'Login successful') {
                    setLoading(false);
                    alert("Login successful");
                    await AsyncStorage.setItem('userdata', JSON.stringify(data));
                    console.log(data);
                    
                    
                    navigation.navigate('MainPage', {data}); // Navigate to MainPage upon successful login
                } else {
                    setLoading(false);
                    alert("Incorrect password");
                }
            })
            .catch(error => {
                setLoading(false);
                console.error('Error:', error);
                Alert.alert('Error:', error.message);
            });
        }
    }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: '#000' }}>
            <Image
                source={{ uri: 'https://img.freepik.com/premium-photo/social-media-icon-with-white-background_1037615-13950.jpg?w=900' }}
                style={{ width: 100, height: 100, borderRadius: 100, resizeMode: 'cover' }}
            />
            <Text style={{ fontSize: 35, color: 'white', marginBottom: 20 }}>Login</Text>
            <TextInput
                value={Email}
                onChangeText={(text) => setEmail(text)}
                style={{ height: 50, width: 300, backgroundColor: 'white', borderRadius: 10, marginTop: 10, padding: 10, fontSize: 20 }}
                placeholder="Enter Your Email"
            />
            <TextInput
                value={Password}
                onChangeText={(text) => setPassword(text)}
                secureTextEntry={true}
                style={{ height: 50, width: 300, backgroundColor: 'white', borderRadius: 10, marginTop: 20, padding: 10, fontSize: 20 }}
                placeholder="Enter Your Password"
            />
            <Text
                style={{ color: 'white', marginRight: -140, fontSize: 20, marginTop: 10 }}
                onPress={() => navigation.navigate('Forget_password_Enter_email')}
            >
                Forget Password?
            </Text>
            {
                loading ?
                    <ActivityIndicator style={{ marginTop: 20 }} size="large" color="white" />
                    :
                    <TouchableOpacity
                        style={{ height: 50, width: 300, backgroundColor: 'black', borderRadius: 10, marginTop: 20, padding: 10, fontSize: 20, alignItems: 'center', justifyContent: 'center' }}
                        onPress={handleSubmit}
                    >
                        <Text style={{ color: 'white' }}>Submit</Text>
                    </TouchableOpacity>
            }
            <View style={{ width: '70%', backgroundColor: 'red', height: 1, marginTop: 40 }}></View>
            <View style={{ flexDirection: 'row', marginTop: 10 }}>
                <Text style={{ color: 'white', marginRight: 10 }}>Don't Have An Account?</Text>
                <Text onPress={() => navigation.navigate('Signup_enter_email')} style={{ color: '#c1c4c9' }}>SignUp</Text>
            </View>
        </View>
    );
}

export default Login;
