import { useCallback, useState } from 'react';
import { Text, TextInput, StyleSheet, View} from 'react-native'
import { Button, Card, CheckBox } from 'react-native-elements';


export default function Results({score})
{
    console.log({score})
        return (<>
        <Card>
            <Card.Title>Quiz Results</Card.Title>

        <View style = {styles.inner}>
            <Text>Questions Total: 3</Text>
       <Text> Final Score: <Text style = {styles.result}>{score}</Text> </Text>

        </View>
        </Card>
        
        
        </>)
}
const styles = StyleSheet.create({
   inner:{
    fontSize:25
   },
    result:{
        color:"blue",
        fontSize: 25
    },
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
