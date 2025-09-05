import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import {useContainerDimensions} from "../hooks/useContainerDimensions"
import {useWebRTC} from "../hooks/useWebRTC"
const LiveMeetScreen = () => {
  const {containerDimensions,onContainerLayout} =useContainerDimensions()
  const {participants,localStream,toggleMic,toggleVideo,switchCamera} = useWebRTC()
  return (
    <View style={styles.container}>
     <MeetHeader  switchCamera={switchCamera} />
    </View>
  );
};

export default LiveMeetScreen;

const styles = StyleSheet.create({
  container : {
    flex : 1,
    backgroundColor : "#121212"
  }
});
