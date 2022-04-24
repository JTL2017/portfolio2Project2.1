import { useState, useEffect } from 'react';
import { Text,StyleSheet } from 'react-native'


export default function Timer()
{
    
    let [updatedTime, setStartTime] = useState(new Date())
    let [timerStarted, setTimerStarted] = useState(false)
    let [frame, setFrame] = useState(0)
    
    useEffect(() => {
        
        setTimerStarted(true)
        let intId = 
            setInterval(() => {
                if (timerStarted)
                {
                setFrame(frame => frame + 1)
                console.log("Every Frame Duration: " + frame)
                }
            }, 
           1000/ 30)
           return () => clearInterval(intId)
        })
        let currentTime = new Date()
    let prevTime = undefined

    if (timerStarted == true) {
        prevTime = new Date(currentTime.valueOf() - updatedTime.valueOf())
    }
    else {
        prevTime = updatedTime
    }
    return (
        <>
            <Text style = {styles.timer}>Time Taken: {String(prevTime.getMinutes()).padStart(2,'0')}:{String(prevTime.getSeconds()).padStart(2,'0')} </Text>
        </>
    )
}
const styles = StyleSheet.create({
    timer:{
     fontSize:22,
     color: 'green'
    }
     
   });