import { Colors, darkColors, lightColors } from '../utils/constants';
import { screenHeight, screenWidth } from '../utils/constants';

import { StyleSheet } from 'react-native';

const authStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  subContainer: {
    height: screenHeight * 0.4,
  },
  headerText: {
    color: '#228B22',
    fontSize: 35,
    fontFamily: 'okra-Medium',
  },
  meetIcon: {
    width: '100%',
    resizeMode: 'contain',
  },
  msgText: {
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
    fontFamily: 'Okra-Regular',
  },
  input: {
    width: screenWidth * 0.8,
    height: 45,
    backgroundColor: darkColors[3],
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    fontSize: 15,
    fontWeight: '400',
    borderColor: 'black',
  },
  button: {
    width: screenWidth * 0.8,
    height: 45,
  },

  buttonText: {
    color: '#6E6BF2',
  },
  text: {
    fontSize: 18,
    fontFamily: 'okra-medium',
    fontWeight: '400',
    color: 'black',
  },
});

export default authStyles;
