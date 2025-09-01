import { darkColors, lightColors } from '../utils/constants';
import { screenHeight, screenWidth } from '../utils/constants';

import { StyleSheet } from 'react-native';

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  headerText: {
    color: '#4385F4',
    fontSize: 35,
    fontWeight: '400',
    fontFamily: 'okra-Regular',
  },
  meetIcon: {
    width: '100%',
    resizeMode: 'contain',
  },
  msgText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'gray',
  },
  input: {
    width: screenWidth * 0.8,
    height: 45,
    backgroundColor: darkColors[3],
    borderWidth: 1,
    padding: 10,
    borderRadius: 8,
    fontSize: 15,
    fontWeight: '400',
  },
  button: {
    width: screenWidth * 0.8,
    height: 45,
  },
  animatedContainer: {
    height: screenHeight * 0.5,
    width: screenWidth,
    alignItems: 'center',
    gap: 12,
  },
  buttonText: {
    color: '#6E6BF2',
  },
  text: {
    fontSize: 18,
    fontFamily: 'okra-medium',
    fontWeight: '400',
    color: '#fff',
  },
});

export default authStyles;
