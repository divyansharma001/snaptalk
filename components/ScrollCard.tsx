import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function ScrollCard() {
    const users = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Aarav'
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D',
            name: 'Anaya'
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Vihaan'
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Aadhya'
        },
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHVzZXJ8ZW58MHx8MHx8fDA%3D',
            name: 'Krishna'
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1546961329-78bef0414d7c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            name: 'Ishita'
        }
    ]
    
  return (
    <ScrollView horizontal={true} style={styles.container}>
        { users.map((user)=>(
      <View style={styles.elementContainer} key={user.id}>
        <Image
        source={{
            uri:user.image,
        }}
        style={styles.userImage}
        />
        <Text style={styles.userName}>{user.name}</Text>
      </View>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10
    },

    userImage:{
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#9BEC00'
    },
    userName:{
        color: 'black',
        padding: 5,
        paddingLeft: 6,
        fontWeight: 'semibold',
        fontSize: 17
    },
    elementContainer: {
        padding: 10,
    },
})