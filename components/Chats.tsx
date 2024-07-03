import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Chats() {
  const details = [
    {
      id: 1,
      name: 'Aryan Reddy',
      photo: 'https://randomuser.me/api/portraits/men/7.jpg',
      time: '10:30',
      message: 'How do I implement authentication in React?',
    },
    {
      id: 2,
      name: 'Saanvi Desai',
      photo: 'https://images.unsplash.com/photo-1491349174775-aaafddd81942?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      time: '11:15',
      message: 'What is the difference b/w state and props?',
    },
    {
      id: 3,
      name: 'Meera Nair',
      photo: 'https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      time: '12:00',
      message: 'Can you explain the virtual DOM in React?',
    },
    {
      id: 4,
      name: 'Kabir Verma',
      photo: 'https://images.unsplash.com/photo-1500048993953-d23a436266cf?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      time: '12:45',
      message: 'How do I use Redux for state management?',
    },
    {
      id: 5,
      name: 'Priya Sharma',
      photo: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      time: '01:30',
      message: 'What is the purpose of React hooks?',
    }, 
    {
      id: 6,
      name: 'Kabir Verma',
      photo: 'https://randomuser.me/api/portraits/men/9.jpg',
      time: '04:30 PM',
      message: 'Can u explain the lifecycle methods in React?',
    },
    {
      id: 7,
      name: 'Saanvi Desai',
      photo: 'https://randomuser.me/api/portraits/women/8.jpg',
      time: '03:45 PM',
      message: 'How do I handle forms in React?',
    }, {
      id: 8,
      name: 'Diya Malhotra',
      photo: 'https://randomuser.me/api/portraits/women/10.jpg',
      time: '05:15 PM',
      message: 'How do I optimize performance in a React app?',
    },
  ]
  return (
    <View style={styles.container}>
    <View>
      <Text style={styles.headingText}>Chats</Text>
    </View>

 { details.map((user)=>(
    <View style={styles.cardContainer} key={user.id}>
     <View style={styles.imageContainer}>
      <Image 
      source={{
        uri: user.photo 
      }}
      style={styles.userImage}
      />
     </View>
     <View style={styles.msgContainer}>
     <View style={styles.infoContainer}>
      <Text style={styles.userName}>{user.name}</Text>
     <Text style={styles.timeText}>{user.time}</Text>
     </View>
     <View>
      <Text style={styles.message}>{user.message}</Text>
     </View>
     </View>
    
     </View>
     ))}

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
  padding: 5,
  },
    headingText: {
      padding: 10,
      color: 'black',
      fontSize: 25,
    },
    userImage:{
      height: 70,
      width: 70,
      borderRadius: 35,
      borderWidth: 2,
      borderColor: '#FFF455'
    },
    imageContainer:{
      padding: 8,
    },
    cardContainer:{
      flexDirection: 'row',
      padding: 1,
  

    },
    userName:{
      fontSize: 19,
      color: 'black',
      fontWeight: '500',
      paddingTop:5

    },
    infoContainer:{
      flexDirection: 'row',
      
    },
    timeText:{
      paddingTop: 8,
      paddingLeft: 10,
    
    },
    msgContainer:{
      flexDirection: 'column'
    },
    message:{
      fontSize: 15,
      fontWeight:'500',
      paddingTop: 10,
      
    }
    

    
})