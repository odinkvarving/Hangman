import React, { Component, useState } from 'react';
import { RadioButton } from 'react-native-paper';
import AlphabetButtons from './components/AlphabetButtons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  Dimensions,
  Alert, 
  Button,
  } from 'react-native';

var SELECTED_LANGUAGE
var COUNTER = 0
var FIRST_RENDER = true
var COLOR = ""
var gjetteTekst = "Gjett ordet: "
var guessText = "Guess the word: "
var textBox = ""
var chooseLangText = "Select your preferred language: "
var velgSpråkTekst = "Velg ditt foretrukne språk: "
var langBox = "Velg ditt foretrukne språk: "

function changeInfo() {
  if(SELECTED_LANGUAGE === 0) {
    langBox = velgSpråkTekst
    return norwegianInfo()
  }
  else if(SELECTED_LANGUAGE == 1) {
    langBox = chooseLangText
    return englishInfo()
  }
  else {
    langBox = velgSpråkTekst
    return norwegianInfo()
  }
}

function norwegianInfo() {
  return `
Hangman er et spill for to personer. Den ene spilleren kommer på et ord (eller uttrykk), og den andre forsøker å finne frem til ordet ved å foreslå bokstaver. 

Ordet man skal forsøke å gjette seg frem til, angis med en rad med streker, der hver strek angir én bokstav. 
Hvis spilleren som gjetter foreslår en bokstav som finnes i ordet, skriver den andre spilleren denne bokstaven i alle de riktige posisjonene. 

Hvis bokstaven som foreslås ikke er med i ordet, tegner den andre spilleren ett av elementene i Hangman-diagrammet. 
Spillet er over når: spilleren som gjetter har løst hele ordet 
eller den andre spilleren fullfører diagrammet. 

For å starte et nytt spill - trykk på nullstill-knappen når du har enten vunnet eller tapt.
`
}

function englishInfo() {
  return `
Hangman is a game played by two people. One of the players comes up with a word (or expression), and the other player tries to find the word by suggesting letters.
  
The word that the player is trying to guess is represented by a row of lines, where each line represents one letter.
If the player that is guessing suggests a letter that exists in the word, the other player writes down this letter in all the correct positions.
  
If the letter that is suggested is not part of the word, the other player draws one of the elements in the Hangman-diagram.
The game is over when: the player that is guessing has solved the entire word
or the other player finishes the diagram. 

To start a new game - press the reset-button when have either lost or won. 
`
}

const data = [
  { key: 0}, { key: 1}, {key: 2}, { key: 3}, { key: 4}, { key: 5}, { key: 6}, { key: 7},
  { key: 8}, { key: 9}, {key: 10}, { key: 11}, { key: 12}, { key: 13}, { key: 14}, { key: 15},
  { key: 16}, { key: 17}, {key: 18}, { key: 19}, { key: 20}, { key: 21}, { key: 22}, { key: 23},
  { key: 24}, { key: 25}, {key: 26}, { key: 27}, { key: 28}, { key: 29}, { key: 30}, { key: 31},
  { key: 32}, { key: 33}, {key: 34}, { key: 35}, { key: 36}, { key: 37}, { key: 38}, { key: 39},
  { key: 40}, { key: 41}, {key: 42}, { key: 43}, { key: 44}, { key: 45}, { key: 46}, { key: 47},
  { key: 48}, { key: 49}, {key: 50}, { key: 51}, { key: 52}, { key: 53}, { key: 54}, { key: 55},
  { key: 56}, { key: 57}, {key: 58}, { key: 59}, { key: 60}, { key: 61}, { key: 62}, { key: 63},
  { key: 64}, { key: 65}, {key: 66}, { key: 67}, { key: 68}, { key: 69}, { key: 70}, { key: 71},
]

const words = ["POTATO", "BICYCLE", "SOUP", "COMPUTER", "ENGINEER", "ABSTRACT"]
const ord = ["POTET", "SYKKEL", "SUPPE", "DATAMASKIN", "INGENIØR", "ABSTRAKT"]

function generateWord() {
  if(SELECTED_LANGUAGE == 0) {
    wordIndex = Math.floor(Math.random() * (ord.length))
    return ord[wordIndex]
  }
  else if (SELECTED_LANGUAGE == 1) {
    wordIndex = Math.floor(Math.random() * (words.length))
    return words[wordIndex]
  }
  else {
    wordIndex = Math.floor(Math.random() * (ord.length))
    return ord[wordIndex]
  }
}

function firstWrong() {
  for(let i = 64; i < 67; i++) {
    data[i].value = "_______"
  }
}

function secondWrong() {
  let x = 1
  for(let i = 0; i < data.length; i++) {
    if(i % 9 === 0 && i !== 0 && i !== 9) {
      data[i - x].value = `I`
      x += 1
    }
  }
}

function thirdWrong() {
  for(let i = 9; i < 13; i++) {
    data[i].value = "_______"
  }
}

function fourthWrong() {
  data[20].value = "I"
}

function fifthWrong() {
  data[28].value = "O"
}

function sixthWrong() {
  data[36].value = "I"
  data[44].value = "I"
}

function seventhWrong() {
  data[35].value = "/"
}

function eigthWrong() {
  data[37].value = "\\"
}

function ninthWrong() {
  data[51].value = "/"
}

function tenthWrong() {
  data[53].value = "\\"
}
  
const numColumns = 8
class HomeScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "",
      language: 0,
      word: "",
      wordPlaceholder: [],
      button: "",
      color: "",
      gameOver: false,
      finishedResetting: false,
    }
  }

  renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <Text style={styles.itemText}>{item.value}</Text>
      </View> 
    )
  }

  componentDidMount() {
    this.changeLanguage()
    let generated = generateWord()
    this.setState({ word: generated})
    console.log("\nThe generated word was: " + generated)
    let placeholder = []
    for(let i = 0; i < generated.length; i++) {
      placeholder.push(" __ ")
    }
    this.setState({ wordPlaceholder: placeholder})
    data.forEach(e => {
      e.value = ""
    })
    COUNTER = 0
    this.setState({ gameOver: false})
  }

  checkIfCorrect() {
    let wordToGuess = this.state.word
    let guessedLetter = this.state.button
    let index = []
    let placeHolder = this.state.wordPlaceholder

    if(guessedLetter !== "" && wordToGuess.includes(guessedLetter)) {
      for(let i = 0; i < wordToGuess.length; i++) {
        if(wordToGuess.charAt(i) == guessedLetter)
          index.push(i)
      }
      index.forEach(index => {
        placeHolder[index] = guessedLetter
      });
    this.setState({ wordPlaceholder: placeHolder})
    return true
    }
    else
      return false
  }

  checkIfWon() {
    if(!this.state.wordPlaceholder.includes(" __ ") && this.state.language == 0) {
      this.setState({ gameOver: true})
      Alert.alert("GRATULERER", "Gratulerer! Du har gjettet hele ordet riktig! \n\n Trykk på NULLSTILL for å prøve igjen!")
    }
    else if(!this.state.wordPlaceholder.includes(" __ ") && this.state.language == 1) {
      this.setState({ gameOver: true})
      Alert.alert("CONGRATULATIONS!", "Congratulations! You have guessed the entire word correctly! \n\n Click on RESET to try again!")
    }
  }

  changeAndRender = () => {
    if(this.checkIfCorrect() == true) {
      this.checkLetter()
      this.sendLetter()
      console.log("\nCORRECT! This letter was part of the word.")
      this.checkIfWon()
    }
    else {
      this.checkLetter()
      this.sendLetter()
      console.log("\nWRONG! This letter was not part of the word.")
      if(COUNTER == 0) {
        firstWrong()
        this.setState({ data: Math.random})
        COUNTER += 1
      }
      else if(COUNTER == 1) {
        secondWrong()
        this.setState({ data: Math.random})
        COUNTER += 1
      }
      else if(COUNTER == 2) {
        thirdWrong()
        this.setState({ data: Math.random})
        COUNTER += 1
      }
      else if(COUNTER == 3) {
        fourthWrong()
        this.setState({ data: Math.random})
        COUNTER += 1
      }
      else if(COUNTER == 4) {
        fifthWrong()
        this.setState({ data: Math.random})
        COUNTER += 1
      }
      else if(COUNTER == 5) {
        sixthWrong()
        this.setState({ data: Math.random})
        COUNTER += 1
      }
      else if(COUNTER == 6) {
        seventhWrong()
        this.setState({ data: Math.random})
        COUNTER += 1
      }
      else if(COUNTER == 7) {
        eigthWrong()
        this.setState({ data: Math.random})
        COUNTER += 1
      }
      else if(COUNTER == 8) {
        ninthWrong()
        this.setState({ data: Math.random})
        COUNTER += 1
      }
      else if(COUNTER == 9) {
        tenthWrong()
        this.setState({ data: Math.random})
        this.setState({ gameOver: true})
        if(this.state.language == 0) {
          Alert.alert("HENGT!", "Desverre, du har ikke klart å gjette det riktige ordet! GAME OVER! \n\nTrykk på nullstill for å prøve igjen")
        }
        else {
          Alert.alert("HANGED!", "Unfortunately, you have not been able to guess the word! GAME OVER! \n\nClick reset to try again")
        }
        COUNTER += 1
      }    
    }
  }

  changeLanguage = (e) => {
    if(SELECTED_LANGUAGE == 0 && FIRST_RENDER == false) {
      this.setState({ language: 0})
      Alert.alert(
        "Språkbytte detektert",
        "Språket har blitt endret underveis i spillet. Du spiller nå med norske ord istedenfor engelske. Lykke til!"
      )
      textBox = gjetteTekst 
    }
    else if(SELECTED_LANGUAGE == 0 && FIRST_RENDER == true) {
      this.setState({ language: 0})
      FIRST_RENDER = false
      textBox = gjetteTekst
    } 
    else if(SELECTED_LANGUAGE == 1 && FIRST_RENDER == false) {
      this.setState({ language: 1})
      textBox = guessText
    }
    else if(SELECTED_LANGUAGE == 1 && FIRST_RENDER == true) {
      this.setState({ language: 1})
      Alert.alert(
        "Change of language detected",
        "The language was changed while playing. You are now playing with english words instead of norwegian. Good luck!"
      )
      FIRST_RENDER = false
      textBox = guessText
    }
    else {
      textBox = gjetteTekst
    }
  }

  handleCallback = (buttonData) => {
      this.setState({ button: buttonData }, () => {this.changeAndRender()})
  }

  checkLetter = () => {
    let button = this.state.button
    let placeholder = this.state.wordPlaceholder
    if(placeholder.includes(button)) {
      this.setState({ color: "green"})
    }
    else {
      this.setState({ color: "red"})
    } 
  }

  sendLetter = () => {
    let button = this.state.button
    this.setState({ button: button})
  }

  endGame = () => {
    this.setState({ finishedResetting: true}, () => { this.componentDidMount()})
  }
  
  render() {
    const {color} = this.state
    const {button} = this.state
    const {gameOver} = this.state
    return (
      <View style={{
      }}>
        <View>
          <FlatList
            data={data}
            style={{
            }}
            renderItem={this.renderItem}
            numColumns={numColumns}
            extraData={this.state}
            />
        </View>
        <View style={{
          backgroundColor: "#fff", 
          marginBottom: 10,
          alignItems: "center",
          height: 80
        }}>
          <Text style={{
            paddingTop: 5,
            paddingBottom: 20
          }}>{textBox}</Text>
          <Text title={this.state.word}>{this.state.wordPlaceholder}</Text>
        </View>
        <View style={{
          height: 250
        }}>
        <AlphabetButtons
          language={this.state.language}
          extraData={this.state}
          parentCallback = {this.handleCallback}
          colorAfterClick = {color}
          buttonClicked = {button}
          gameOver = {gameOver}
          endTheGame = {this.endGame}
        ></AlphabetButtons>
        </View>
      </View>
    )
  }
}  

class SettingsScreen extends React.Component {
  state = {
    checked: "Norsk"
  }

  selectedNorwegian() {
    this.setState({ checked: 'Norsk'})
    SELECTED_LANGUAGE = 0
    console.log("Norwegian was selected as language")
    langBox = velgSpråkTekst
  }

  selectedEnglish() {
    this.setState({ checked: 'English'})
    SELECTED_LANGUAGE = 1
    console.log("English was selected as language")
    langBox = chooseLangText
  }

  selectedSystem() {
  }
  
  render() {
    const {checked} = this.state
    return (
      <View style={{
        flexDirection: "column"
        }}>
        <View style={{
          backgroundColor: "#fff",
          justifyContent: "center",
          alignItems: "center",
          height: 50
          }}>
          <Text>{langBox}</Text>
        </View>
        <View 
          style={{
            backgroundColor: "#fff",
            flexDirection: 'row',
          }}>
          <View style={styles.container}>
            <Text>Norsk</Text>
            <RadioButton
              value="Norsk"
              status={ checked === 'Norsk' ? 'checked' : 'unchecked'}
              onPress={() => this.selectedNorwegian()}
              />
          </View>
          <View style={styles.container}>
            <Text>English</Text>
            <RadioButton
              value="Engelsk"
              status={ checked === 'English' ? 'checked' : 'unchecked'}
              onPress={() => this.selectedEnglish()}
              />
          </View>
        </View>
        <View style={{
          backgroundColor: "#fff",
          alignItems: "center",
          height: 500,
          padding: 30
        }}>
          <Text>
            {changeInfo()}
          </Text>
        </View>
      </View>
    )
  }
}

function settingsScreen({ navigation }) {
  return (
    <View style={{
      flex: 1
    }}>
      <SettingsScreen></SettingsScreen>
      <Button 
        title="START"
        onPress={() => {
          navigation.navigate("Hangman")
        }}
      ></Button>
    </View>
    
  )
}

function homeScreen({ navigation }) {
  return (
    <View>
      <HomeScreen></HomeScreen>
    </View>
  )
}

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Instillinger">
        <Stack.Screen name="Instillinger" component={settingsScreen}/>
        <Stack.Screen name="Hangman" component={homeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center",

  },
  item: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    height: (Dimensions.get('window').width / numColumns) * 0.8,
    backgroundColor: "#fffaf0"
  },
  itemText: {
    color: 'black',
    fontSize: 15,
  },
  grid: {
    flex: 1,
    marginVertical: 20,
  },
  flatList: {
    backgroundColor: "#fff"
  }

});
