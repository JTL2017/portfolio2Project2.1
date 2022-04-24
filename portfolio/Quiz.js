import { StatusBar } from 'expo-status-bar';
import { useCallback, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { Button, Card, CheckBox } from 'react-native-elements';
import Results from './Results';
import Timer from './Timer';



let questions = [
  {
    title: "Question 1",
    multipleAnswers: true,
    answers: [
      { correct: false, title: "Answer 1" },
      { correct: true, title: "Answer 2" },
      { correct: true, title: "Answer 3" },
      { correct: true, title: "Answer 4" },
    ]
  },
  {
    title: "Question 2",
    answers: [
      { correct: false, title: "Answer A" },
      { correct: false, title: "Answer B" },
      { correct: false, title: "Answer C" },
      { correct: true, title: "Answer D" },
    ]
  },
  {
    title: "Question 3",
    answers: [
      { correct: true, title: "Answer A" },
      { correct: false, title: "Answer B" },
      { correct: false, title: "Answer C" },
      { correct: false, title: "Answer D" },
    ]
  },




]
export default function Quiz() {
  let [score, setScore] = useState()
  let [menu, setMenu] = useState("")
  let [answers, setAnswers] = useState([])
  let checkAnswer = useCallback((data, qAnswers) => {
    let answersCorrect = true;
    for (let i = 0; i < data.answers.length; i++) {
      let qCorrect
      if (data.answers[i].correct) {
        qCorrect = qAnswers.includes(i)
      }
      else {
        console.log(!qAnswers)
        console.log(qAnswers)
        qCorrect = !qAnswers.includes(i)
      }
      answersCorrect = answersCorrect && qCorrect
    }
    if (answersCorrect) {
      console.log("Adding 1")
      setScore(prevscore => {
        if (prevscore !== undefined) {
         prevscore = prevscore + 1
          return prevscore
        }
        else {
          
          return 1
         
        }
      }
      )


    }
    else {
      setScore(prevscore => prevscore === undefined ? 0 : prevscore)
      
    }
  }, [answers, score]
  )
  
  return (<>
  
    <View style={styles.container}>
      <Text style = {styles.title}>Quiz Application</Text>
      {score === undefined ? <Timer></Timer> : undefined}
      <FlatList data = {questions} renderItem={({item, index})=>
      <Question showAnswers = {score !== undefined}data={item} key={index} setAnswers={(answers) => 
        setAnswers(prev => {
        prev[index] = answers
        return [...prev]
        
      })
     
        } 
        answers={answers[index]}
        ></Question>
      }></FlatList>

      

      <Button title="Submit" onPress={() => questions.forEach((q, i) => checkAnswer(q, answers[i]))} disabled={answers.length == 0}></Button>
      {score !== undefined ? doSubmit({score}) : undefined}
      <StatusBar style="auto" />
    </View>
  </>)

}
 function doSubmit({score}) {
  return (<><Results score = {score}></Results></>)
}
function Question({ data, answers, showAnswers, setAnswers }) {

  let selectAnswer = useCallback((index) => {
    console.log("onPress()",index, answers);
    if (answers === undefined) {
      answers = []
    }
    if (!answers.includes(index)) {
      answers.push(index);
      setAnswers([...answers])

    }
    else {
      answers = answers.filter(i => i !== index)
      setAnswers([...answers])
    }

  }, [answers])
  return (
    <>
      <Card>
        <Card.Title>{data.title}</Card.Title>
        <View>
          {data.answers.map(
            (answer, index) =>
              <CheckBox key={index}
              textStyle = {showAnswers && !answer.correct ? styles.incorrect: undefined}
              checked={answers ? answers.includes(index) : false}
                onIconPress={() => selectAnswer(index)}
                onPress={() => selectAnswer(index)}




                title={answer.title}></CheckBox>
          )}




        </View>
      </Card>



    </>
  );
}

const styles = StyleSheet.create({
  title:{
fontSize:25
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

