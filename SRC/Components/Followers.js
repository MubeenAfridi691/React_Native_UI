import { StyleSheet, Text, View ,ScrollView} from 'react-native'
import React from 'react'
import PostCard from './PostsCard'

const Followers = () => {
    const data=[
        {
            id:1,
            username:'user1',
            profile_pic:'https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp',
            Image1:'https://media.gettyimages.com/id/1432094512/photo/face-of-young-black-man-urban-fashion-and-happy-guy-in-city-with-blurred-background-portrait.jpg?s=612x612&w=gi&k=20&c=vqo61FdY7vy7QEcsHCaHfMzsJBaEn99h7V0jxnGPq7w=',
            likes:[
                'asad',
                'umar'
            ],
            comments:[
                {
                    id:1,
                    username: 'user1',
                    comments: 'hello'
                }
            ]
            ,
            shares:[
                'asad',
                'umar'
            ],
            likes:[
                'asad',
                'umar'
            ]

        },
        {
            id:2,
            username:'user1',
            profile_pic:'https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp',
            Image1:'https://media.gettyimages.com/id/1432094512/photo/face-of-young-black-man-urban-fashion-and-happy-guy-in-city-with-blurred-background-portrait.jpg?s=612x612&w=gi&k=20&c=vqo61FdY7vy7QEcsHCaHfMzsJBaEn99h7V0jxnGPq7w=',
            likes:[
                'asad',
                'umar'
            ],
            comments:
            [
                {
                    id:1,
                username: 'user1',
                comments: 'hello'
                }
            ]
            ,
            shares:[
                'asad',
                'umar'
            ],
            likes:[
                'asad',
                'umar'
            ]

        },
        {
            id:3,
            username:'user1',
            profile_pic:'https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp',
            Image1:'https://media.gettyimages.com/id/1432094512/photo/face-of-young-black-man-urban-fashion-and-happy-guy-in-city-with-blurred-background-portrait.jpg?s=612x612&w=gi&k=20&c=vqo61FdY7vy7QEcsHCaHfMzsJBaEn99h7V0jxnGPq7w=',
            likes:[
                'asad',
                'umar'
            ],
            comments:
            [
                {
                    id:1,
                    username: 'user1',
                    comments: 'hello'
                }   
            ] 
            ,
            shares:[
                'asad',
                'umar'
            ],
            likes:[
                'asad',
                'umar'
            ]

        },
        {
            id:4,
            username:'user1',
            profile_pic:'https://pics.craiyon.com/2023-07-15/dc2ec5a571974417a5551420a4fb0587.webp',
            Image1:'https://media.gettyimages.com/id/1432094512/photo/face-of-young-black-man-urban-fashion-and-happy-guy-in-city-with-blurred-background-portrait.jpg?s=612x612&w=gi&k=20&c=vqo61FdY7vy7QEcsHCaHfMzsJBaEn99h7V0jxnGPq7w=',
            likes:[
                'asad',
                'umar'
            ],
            comments:
           [
            {
                id:1,
                username: 'user1',
                comments: 'hello'
            }    
           ]
            ,
            shares:[
                'asad',
                'umar'
            ],
            likes:[
                'asad',
                'umar'
            ]

        }
    ]
  return (
    <ScrollView style={styles.container}>
      {data.map((data,index)=>{
        
            return <PostCard key={index}
            username={data.username}
            profile_pic={data.profile_pic}
            Image1={data.Image1}
            likes={data.likes}
            comments={data.comments}
            shares={data.shares}
        


            />
            
        })}
    </ScrollView>
  )
}

export default Followers

const styles = StyleSheet.create({
    container: {
        width:'100%',
        height:300,
        // backgroundColor:'white',
        marginVertical:10,
        padding:10,
       
       

    }
})