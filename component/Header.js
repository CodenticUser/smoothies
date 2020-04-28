import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';

const Header = ({navigation, title}) => {
  return (
    <SafeAreaView
      style={{
        flexDirection: 'row',
        height: 40,
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'red',
        }}>
        <Text></Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'red',
          alignItems: 'center',
        }}>
        <Text>{title}</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: 'red',
        }}>
        <Text></Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  myhead: {
    flex: 1,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'red',
  },
});

export default Header;
