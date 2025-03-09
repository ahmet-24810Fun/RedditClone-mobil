import { Pressable, Text, View, StyleSheet, TextInput } from "react-native";
import { SafeAreaView } from 'react-native-safe-area-context';
import {AntDesign} from '@expo/vector-icons';
import {router}  from 'expo-router'

export default function CreateScreen() {
  return (
    <SafeAreaView style={{ backgroundColor: 'white', flex: 1, paddingHorizontal: 10}}>
      {/* Header */}
      <View style={{ flexDirection: 'row' , alignItems: 'center'}}>
       <AntDesign name="close" size={30} color="black" onPress={() => router.back()}/>
      <Pressable onPress={() => console.error('Pressed')} style={{marginLeft: 'auto'}}>
        <Text style={styles.postText}>Post</Text>
      </Pressable>
      </View>
      {/* Community Selector */}
      <View style={ styles.communityContainer}>
        <Text style={styles.rStyles}>r/</Text>
        <Text style={{fontWeight: '600'}}>Select a Community</Text>
      </View>
       {/* Inputs */}
       <TextInput
        placeholder="Title"
        style={{fontSize: 20, fontWeight: 'bold', paddingVertical: 20}}
       />
       <TextInput
        placeholder="body text (optional)" />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({ 
  postText: {
    color: 'white', 
    backgroundColor: '#115BCA', 
    fontWeight: 'bold', 
    paddingVertical: 2, 
    paddingHorizontal:7,
    borderRadius: 10
  },
  rStyles: {
    backgroundColor: 'black',
    color: 'white',
    paddingVertical: 1,
    paddingHorizontal: 5,
    borderRadius: 10,
    fontWeight: 'bold',
  },
  communityContainer: {
    backgroundColor: '#EDEDED',
    flexDirection: 'row',
    padding: 10,
    borderRadius: 20,
    gap: 5,
    alignSelf: 'flex-start',
    marginVertical: 10
  }
});