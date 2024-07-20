import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const Signup_Choose_Username = ({ navigation, route }) => {
  const [name, setname] = useState('');
  const { useremail } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={30}
          color="white"
          onPress={() => navigation.navigate('Signup_choose_password', { useremail: useremail, username: name })}
        />
        <Text style={styles.goBackText}>Go Back</Text>
      </View>
      <View style={styles.email}>
        <Image
          source={{ uri: 'https://img.freepik.com/premium-photo/social-media-icon-with-white-background_1037615-13950.jpg?w=900' }}
          style={{ width: 100, height: 100, borderRadius: 100, resizeMode: 'cover', marginBottom: 20 }}
        />
        <Text style={{ fontSize: 30, color: 'white', marginBottom: 20 }}>Enter Your Username</Text>
        <TextInput
          value={name}
          onChangeText={(text) => setname(text)}
          style={{ height: 50, width: 300, backgroundColor: 'white', borderRadius: 10, padding: 10, fontSize: 15, justifyContent: 'center', marginBottom: 20 }}
          placeholder="Enter Your Username"
        />
        <TouchableOpacity
          style={{ marginBottom: 20, height: 50, width: 300, backgroundColor: 'black', borderRadius: 10, marginTop: 20, padding: 10, fontSize: 20, color: 'white', borderWidth: 1, borderColor: 'white' }}
          onPress={() => navigation.navigate('Signup_choose_password', { useremail: useremail, username: name })}
        >
          <Text style={{ alignSelf: 'center', color: 'white' }}>Next</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

export default Signup_Choose_Username;

const styles = StyleSheet.create({
  container: {
    height: '100%',
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
