import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { homeStyles } from '../styles/homeStyles';
import  HomeHeader from "../components/home/HomeHeader"
import { navigate } from '../utils/NavigationUtils';
import { RFValue } from 'react-native-responsive-fontsize';
import { Video } from 'lucide-react-native';

const HomeScreen = () => {


  const handleNavigation = () => {
      const storedName = user?.name;
      if (!storedName) {
        setVisible(true);
        return;
      }
      navigate('JoinMeetScreen');
    };
  return (
    <View style={homeStyles.container}>
      <HomeHeader />

      <TouchableOpacity
        style={homeStyles.absoluteButton}
        onPress={handleNavigation}
      >
        <Video size={RFValue(14)} color="fff" />
        <Text style={homeStyles.buttonText}>Join </Text>
      </TouchableOpacity>
    </View>
  );
};

export default HomeScreen;

