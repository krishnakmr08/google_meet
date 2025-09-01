import {
  ActivityIndicator,
  Animated,
  Keyboard,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  useAnimatedValue,
  View,
  Text,
} from 'react-native';
import React, { useEffect, useRef, useState } from 'react';
import authStyles from '../styles/authStyles';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Colors, darkColors } from '../utils/constants';

const IMAGE_HEIGHT = 250;
const IMAGE_MIN_HEIGHT = 150;

const DismissKeyboard = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      {children}
    </TouchableWithoutFeedback>
  );
};

const AuthScreen = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const imageRef = useRef(useAnimatedValue(IMAGE_HEIGHT)).current;

  useEffect(() => {
    const keyboardWillShowSub = Keyboard.addListener(
      'keyboardWillShow',
      keyboardWillShow,
    );
    const keyboardWillHideSub = Keyboard.addListener(
      'keyboardWillHide',
      keyboardWillHide,
    );

    return () => {
      keyboardWillHideSub.remove();
      keyboardWillShowSub.remove();
    };
  }, []);

  const keyboardWillHide = event => {
    Animated.timing(imageRef, {
      toValue: IMAGE_HEIGHT,
      duration: event.duration,
      useNativeDriver: false,
    }).start();
  };

  const keyboardWillShow = event => {
    Animated.timing(imageRef, {
      toValue: IMAGE_MIN_HEIGHT,
      duration: event.duration,
      useNativeDriver: false,
    }).start();
  };
  return (
    <DismissKeyboard>
      <View style={authStyles.container}>
        <SafeAreaView />
        <Text style={authStyles.headerText}>Google Meet</Text>
        <Animated.View style={authStyles.animatedContainer}>
          <Animated.Image
            source={require('../assets/icons/people.png')}
            style={[authStyles.meetIcon, { height: imageRef }]}
          />
          <Text style={authStyles.msgText}>
            Get started with your work, school, or
          </Text>
          <Text style={authStyles.msgText}>personal Google account</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            style={authStyles.input}
            placeholder="Enter email or phone"
            placeholderTextColor={darkColors[1]}
            autoFocus={true}
          />
          <TouchableOpacity
            activeOpacity={0.8}
            style={[
              authStyles.button,
              {
                backgroundColor: email ? Colors.primary : darkColors[3],
              },
            ]}
          >
            {loading ? (
              <ActivityIndicator size={'small'} color={'#fff'} />
            ) : (
              <Text style={authStyles.text}>Next</Text>
            )}
          </TouchableOpacity>
        </Animated.View>
      </View>
    </DismissKeyboard>
  );
};

export default AuthScreen;
