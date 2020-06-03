import { Dimensions } from "react-native";

const darkMode = false;
const tint = darkMode ? '#fff' : '#121212';


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

  deviceWidth: Dimensions.get('window').width, //full width
  deviceHeight: Dimensions.get('window').height, //full height
}

