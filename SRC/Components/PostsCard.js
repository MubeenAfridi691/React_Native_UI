import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { FontAwesome } from '@expo/vector-icons';

const PostsCard = ({
  username,
  profile_pic,
  Image1,
  likes,
  comments,
  shares
}) => {
  const [isLiked, setIsLiked] = useState(false);
  const [isCommented, setIsCommented] = useState(false);

  return (
      <View style={styles.container}>
          {/* Header Section */}
          <View style={styles.header}>
              <Image source={{ uri: profile_pic }} style={styles.profileImage} />
              <Text style={styles.username}>{username}</Text>
          </View>

          {/* Image Section */}
          <View style={styles.image}>
              <Image source={{ uri: Image1 }} style={styles.postImage} />
          </View>

          {/* Footer Section (Likes and Comments) */}
          <View style={styles.footer}>
              {/* Like Button */}
              <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
                  <AntDesign name={isLiked ? "heart" : "hearto"} size={30} color="white" />
              </TouchableOpacity>
              <Text style={styles.likes}>{isLiked ? likes.length + 1 : likes.length}</Text>

              {/* Comment Button */}
              <TouchableOpacity onPress={() => setIsCommented(!isCommented)}>
                  <FontAwesome name="comment" size={30} style={{ marginLeft: 10 }} color="white" />
              </TouchableOpacity>
          </View>

          {/* Comment Section */}
          {isCommented && (
              <View style={styles.commentSection}>
                  {comments.map((comment, index) => (
                      <View key={index} style={styles.commentContainer}>
                          <View style={styles.commentContent}>
                              <Text style={styles.commentUsername}>{comment.username}</Text>
                              <Text style={styles.commentText}>{comment.comments}</Text>
                          </View>
                      </View>
                  ))}
              </View>
          )}
      </View>
  );
};

export default PostsCard;

const styles = StyleSheet.create({
  container: {
      backgroundColor: 'white',
      width: '98%',
      marginVertical: 10,
      borderRadius: 10,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
      marginLeft: 10,
      marginRight: 10,
  },
  header: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'black',
      borderTopLeftRadius: 10,
      borderTopRightRadius: 10,
  },
  profileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      resizeMode: 'cover',
  },
  username: {
      fontSize: 20,
      color: 'white',
      marginLeft: 10,
      fontWeight: 'bold',
  },
  image: {
      width: '100%',
      height: 390,
      borderRadius: 10,
      resizeMode: 'cover',
      marginBottom: 10,
  },
  footer: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      backgroundColor: 'black',
  },
  likes: {
      fontSize: 20,
      color: 'white',
      marginLeft: 10,
      fontWeight: 'bold',
  },
  commentSection: {
      backgroundColor: 'white',
      marginTop: 10,
      marginLeft: 10,
      marginRight: 10,
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
  },
  commentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 10,
  },
  commentProfileImage: {
      width: 50,
      height: 50,
      borderRadius: 25,
      resizeMode: 'cover',
  },
  commentContent: {
      marginLeft: 10,
  },
  commentUsername: {
      fontSize: 16,
      fontWeight: 'bold',
  },
  commentText: {
      fontSize: 14,
  },
  postImage: {
      width: '100%',
      height: '100%',
      borderRadius: 10,
      resizeMode: 'cover',
  },
});
