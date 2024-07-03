import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import ScrollCard from './components/ScrollCard';
import Chats from './components/Chats';


export default function () {
  return (
    <SafeAreaView style={styles.container}>
  <View style={styles.headingContainer}>
    <Text style={styles.headingText}>SnapTalk</Text>
    <ScrollCard/>
  </View>
  <View>
  <Chats/>
  </View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  headingContainer:{
    padding: 10,
    fontWeight: '300',
  },
  headingText:{
    color: 'black',
    fontSize: 30,
   

  },

});
