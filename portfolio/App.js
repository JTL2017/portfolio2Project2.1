import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { StyleSheet} from 'react-native';
import TitleMenu from './TitleMenu';



export default function App() {
  
  return <TitleMenu></TitleMenu>
}
const styles = StyleSheet.create({
  incorrect:{
    textDecorationLine: "line-through",
    textDecorationStyle: "solid"
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

