import { Dimensions } from "react-native";

const darkMode = false;
const tint = darkMode ? '#fff' : '#121212';

const possibilities = [
  '#2557F8',
  '#346A85',
  '#348569',
  '#3B94D9',
  '#4A913C',
  '#7F3485',
  '#992B41',
  '#A1A1A1',
  '#AAD3E6',
  '#AFE356',
  '#F1741C',
  '#F33131',
  '#F3315E',
  '#F6A43D',
  '#FCB304'
]

export function random_color() {
  return possibilities[Math.floor(Math.random() * possibilities.length)]
}

export const colors = {
  tint,
  gray: '#a1a1a1',
  lightgray: '#f6f6f6',
  background: '#fff',

  red: '#f33131',
  green: '#6dc993',
  blue: '#458eff',

  pink: '#f3315e',
  orange: '#f1741c',
  yellow: '#fcb304',

  safearea: darkMode ? '#121212' : '#f6f6f6', 
};

export const layout = {
  paddingHorizontal: 20,
  inputContainerHeight: 50,

  deviceWidth: Dimensions.get('window').width, //full width
  deviceHeight: Dimensions.get('window').height, //full height
}

