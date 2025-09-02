import { StyleSheet, Text, View ,SafeAreaView, TouchableOpacity} from 'react-native';
import React, { useEffect, useState } from 'react';

import InquiryModal from "../home/InquiryModel"
import {headerStyles} from "../../styles/headerStyles"
import {useUserStore} from  "../../service/userStore"
import { Menu } from 'lucide-react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { Colors } from '../../utils/constants';

const HomeHeader = () => {
  const [visible, setVisible] = useState(false);
  const { user } = useUserStore();

  useEffect(() => {
    const checkUserName = () => {
      const storedName = user?.name;
      if (!storedName) {
        setVisible(true);
      }
    };
    checkUserName();
  }, []);

  
  return (
    <>
      <SafeAreaView />
      <View style={headerStyles.container}>
        <Menu name='menu' size={RFValue(20)} color={Colors.text} />
<TouchableOpacity></TouchableOpacity>
      </View>

      <InquiryModal onClose={() => setVisible(false)} visible={visible} />
    </>
  );
};

export default HomeHeader;

const styles = StyleSheet.create({});