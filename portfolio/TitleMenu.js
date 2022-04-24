
import { useCallback, useState } from 'react';
import { Text, TextInput, StyleSheet, View} from 'react-native'
import { Button, Card, CheckBox } from 'react-native-elements';
import BeginMenu from './BeginMenu';
import Quiz from './Quiz';
import Results from './Results';

export default function TitleMenu()
{
    let [password, setPassword] = useState("")
    let [checked, setchecked] = useState(false)
    let doCheck = useCallback(() => {
        
        if(password == "testing" )
        {
            
            setchecked(true)
        }

    }
    
    )
    if(checked)
    {
        return <><BeginMenu></BeginMenu></>
    }
    return ( 
        <>
        <Card>

        <View styles = {styles.container}>
    

    <Text style = {styles.intro}> Welcome, Please have a faculty member enter the schools five letter password to start the Quiz. </Text>
    <TextInput secureTextEntry={true} value={password} onChangeText={text => setPassword(text)} placeholder="Password" style = {styles.input}></TextInput>
        <Button title = "Submit" onPress={() => doCheck()}></Button>
        <Text>Password: "testing"</Text>
        
        </View>
        </Card>
    </>
    )
}
const styles = StyleSheet.create({
    intro:{
    fontSize: 30,
    
    },
    innercontainer:
  {
    maxWidth: 300,
    
    
  },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 3,
        padding: 10,
        fontSize: 20,
        placeholder: 'black',

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