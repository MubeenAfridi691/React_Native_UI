import { StyleSheet, Text, View, Image, TextInput,SafeAreaView, TouchableOpacity, ActivityIndicator} from 'react-native'
import React, { useState } from 'react'
import { AntDesign } from '@expo/vector-icons';

// import { containerFull, goback, hr80, logo1 } from '../../CommonCss/pagecss'
// import logo from '../../../assets/logo.png'
// import { formbtn, formHead, formHead2, formHead3, formInput, formTextLinkCenter, formTextLinkRight } from '../../CommonCss/formcss'
import { MaterialIcons } from '@expo/vector-icons';
import { firebase } from '../Firebase/config'
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Uploadpic = ({ navigation }) => {

    const [image, setImage] = useState(null);

    const [loading, setLoading] = useState(false)

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })
        // console.log(result)


        if (!result.cancelled) {
            const source = { uri: result.uri };
            setImage(source);

            const response = await fetch(result.uri);
            const blob = await response.blob();
            const filename = result.uri.substring(result.uri);

            const ref = firebase.storage().ref().child(filename);
            const snapshot = await ref.put(blob);
            const url = await snapshot.ref.getDownloadURL();

            console.log(url)
            return url
        }
        else {
            return null
        }
    }

    const handleUpload = () => {
        // pickImage()
        AsyncStorage.getItem('user')
            .then(data => {
                setLoading(true)

                pickImage().then(url => {
                    fetch('http://10.0.2.2:3000/setprofilepic', {
                        method: 'post',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            email: JSON.parse(data).user.email,
                            profilepic: url
                        })
                    })
                        .then(res => res.json()).then(
                            data => {
                                if (data.message === "Profile picture updated successfully") {
                                    setLoading(false)
                                    alert('Profile picture updated successfully')
                                    navigation.navigate('Settings_1')
                                }
                                else if (data.error === "Invalid Credentials") {
                                    alert('Invalid Credentials')
                                    setLoading(false)
                                    navigation.navigate('Login')
                                }
                                else {
                                    setLoading(false)
                                    alert("Please Try Again");
                                }
                            }
                        )
                        .catch(err => {
                            console.log(err)
                        })

                })
            })
    }
    return (
      <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <AntDesign
          name="arrowleft"
          size={30}
          color="white"
          // onPress={() => navigation.navigate('login')}
        />
        <Text style={styles.goBackText}>Go Back</Text>
      </View>
      <View style={styles.email}>
        <Image
          source={{uri:'https://img.freepik.com/premium-photo/social-media-icon-with-white-background_1037615-13950.jpg?w=900'}}
          style={{width: 100, height: 100, borderRadius: 100, resizeMode:'cover', marginBottom: 20}}
        />

        {/* <TextInput
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
          placeholder="Enter Your Email"
        /> */}

      
          <TouchableOpacity
            style={styles.button}
            onPress={handleUpload}
            >
            <Text style={{ alignSelf: 'center', color: 'white', fontSize: 18 }}>Upload An Image</Text>
          </TouchableOpacity>
        
      </View>
    </SafeAreaView>
    )
}





export default Uploadpic
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

