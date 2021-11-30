import React, { Component, useState } from 'react';
import { createBottomTabNavigator, createAppContainer, getActiveChildNavigationOptions} from 'react-navigation';  
import Icon from 'react-native-vector-icons/Ionicons';  
import { RadioButton } from 'react-native-paper';
import AlphabetButtons from './components/AlphabetButtons';
import { NavigationEvents } from 'react-navigation';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { 
  StyleSheet, 
  Text, 
  View, 
  FlatList,
  Dimensions,
  StatusBar,
  Alert, 
  Button,
  } from 'react-native';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

var SELECTED_LANGUAGE = 0
var COUNTER = 0
var FIRST_RENDER = true

function changeInfo() {
  if(SELECTED_LANGUAGE === 0) {
    return norwegianInfo()
  }
  else if(SELECTED_LANGUAGE == 1) {
    return englishInfo()
  }
}

function norwegianInfo() {
  return `
Hangman er et spill for to personer. Den ene spilleren kommer på et ord (eller uttrykk), og den andre forsøker å finne frem til ordet ved å foreslå bokstaver. 

Ordet man skal forsøke å gjette seg frem til, angis med en rad med streker, der hver strek angir én bokstav. 
Hvis spilleren som gjetter foreslår en bokstav som finnes i ordet, skriver den andre spilleren denne bokstaven i alle de riktige posisjonene. 

Hvis bokstaven som foreslås ikke er med i ordet, tegner den andre spilleren ett av elementene i Hangman-diagrammet. 
Spillet er over når: spilleren som gjetter har løst hele ordet 
eller den andre spilleren fullfører diagrammet
`
}

function englishInfo() {
  return `
Hangman is a game played by two people. One of the players comes up with a word (or expression), and the other player tries to find the word by suggesting letters.
  
The word that the player is trying to guess is represented by a row of lines, where each line represents one letter.
If the player that is guessing suggests a letter that exists in the word, the other player writes down this letter in all the correct positions.
  
If the letter that is suggested is not part of the word, the other player draws one of the elements in the Hangman-diagram.
The game is over when: the player that is guessing has solved the entire word
or the other player finishes the diagram
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

function generateWord() {
  wordIndex = Math.floor(Math.random() * (words.length))
  return words[wordIndex]
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
    if(!this.state.wordPlaceholder.includes(" __ ")) {
      Alert.alert("CONGRATULATIONS!", "Congratulations! You have guessed the entire word correctly!")
      this.componentDidMount()
    }
  }

  changeAndRender = () => {
    if(this.checkIfCorrect() == true) {
      console.log("\nCORRECT! This letter was part of the word.")
      this.checkIfWon()
    }
    else {
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
        Alert.alert("HANGED!", "Unfortunately, you have not been able to guess the word! GAME OVER.")
        this.componentDidMount()
      }
    }
  }

  changeLanguage = (e) => {
    if(SELECTED_LANGUAGE == 0) {
      this.setState({ language: 0})
      if(FIRST_RENDER = false) {
        Alert.alert(
          "Språkbytte detektert",
          "Språket har blitt endret under spillet. Bokstavene er endret til det norske tastaturet, men du kan fortsatt spille videre."
        )
      }
    }
    else if(SELECTED_LANGUAGE == 1) {
      this.setState({ language: 1})
      if(FIRST_RENDER = false) {
        Alert.alert(
          "Change of language detected",
          "The language was changed while playing. The letters are changed to the english keyboard, but you can still keep playing."
        )
      }
    }
  }

  handleCallback = (buttonData) => {
      this.setState({ button: buttonData }, () => {this.changeAndRender()})
  }
  
  render() {

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
          }}>Guess the word: </Text>
          <Text title={this.state.word}>{this.state.wordPlaceholder}</Text>
        </View>
        <View style={{
          height: 250
        }}>
        <AlphabetButtons
          //whenClicked={this.changeAndRender}
          language={this.state.language}
          extraData={this.state}
          parentCallback = {this.handleCallback}
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
  }

  selectedEnglish() {
    this.setState({ checked: 'English'})
    SELECTED_LANGUAGE = 1
    console.log("English was selected as language")
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
          <Text>Select preferred lagnuage: </Text>
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
          height: 400,
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
    <View>
      <SettingsScreen></SettingsScreen>
      <Button 
        title="test"
        onPress={() => {
          navigation.navigate("home")
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

const TabNavigator = createMaterialBottomTabNavigator(
  {
    Home: {screen: HomeScreen, 
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color:tintColor}]} size={25} name={"ios-home"}/>
          </View>
        )
      }
    },

    Settings: { screen: SettingsScreen,
      navigationOptions: {
        tabBarLabel: "Settings",
        tabBarIcon: ({tintColor}) => (
          <View>
            <Icon style={[{color:tintColor}]} size={25} name={"ios-settings"}/>
          </View>
        )
      }
    }
  }
)

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="settings">
        <Stack.Screen name="settings" component={settingsScreen}/>
        <Stack.Screen name="home" component={homeScreen}/>
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
    backgroundColor: "lightgrey"
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
