import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, StatusBar, Image, ScrollView, ActivityIndicator } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import BottomNav from '../../SRC/MainPage/BottomNav';

const MyUserProfile = ({ navigation }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  console.log(user);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const value = await AsyncStorage.getItem('userdata');
        console.log("value1",value);
        if (value !== null) {
          const userdata = JSON.parse(value);

          fetch('http://10.0.2.2:3000/userdata', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': "Bearer" + (userdata.token)
            },
            body: JSON.stringify({
              email: value,
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              if (data) {
                setUser(data);
                setLoading(false);
              } else {
                navigation.navigate('login');
                alert('User does not exist with this email');
              }
            })
            .catch((error) => {
              console.error('Error fetching user data:', error);
              setLoading(false);
            });
        }
      } catch (error) {
        console.error('Error retrieving user data from AsyncStorage:', error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#000000" barStyle="light-content" />
      <View style={styles.uppernav}>
        <Image
          source={{ uri: 'https://img.freepik.com/premium-photo/social-media-icon-with-white-background_1037615-13950.jpg?w=900' }}
          style={{ width: 40, height: 40, borderRadius: 100, resizeMode: 'cover' }}
        />
        <AntDesign name="setting" size={24} color="black" onPress={() => navigation.navigate('setting')} />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="black" style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} />
      ) : user ? (
        <>
          <BottomNav navigation={navigation} />
          <View style={styles.mainPage}>
            <Image
              source={{ uri: user.profile_pic || 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=' }}
              style={{ width: 100, height: 100, borderRadius: 100, resizeMode: 'cover', marginTop: 10 }}
            />
            <Text style={{ color: 'white', fontSize: 30, fontWeight: '800', backgroundColor: '#69665f', borderRadius: 30, padding: 5, marginTop: 5 }}>
              @{user.username}
            </Text>
          </View>
          {/* Render followers, following, posts, description, view post, and ScrollView */}
        </>
      ) : (
        <Text>No user data found.</Text>
      )}
    </View>
  );
};

export default MyUserProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  uppernav: {
    height: 50,
    backgroundColor: '#575353',
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainPage: {
    height: '30%',
    backgroundColor: 'black',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  // Define other styles as needed
});
