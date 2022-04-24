import { useCallback, useState } from 'react';
import { Text, TextInput, StyleSheet, View} from 'react-native'
import { Button, Card, CheckBox } from 'react-native-elements';
import Quiz from './Quiz';
export default function BeginMenu()
{
    let [begin,setBegin] = useState(false)
    if(begin == true)
    {
        return <><Quiz></Quiz></>
    }
    
    return(
        <>
        <Card>
        <Card.Title>You're about to take a exam. Click Begin to start the exam</Card.Title>
        <Text>You have unlimited time to complete the exam</Text>
        <Button title = "Begin" onPress={() => setBegin(true)}></Button>
   
    </Card>
        </>
        )
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
 