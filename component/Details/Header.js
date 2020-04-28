import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Header = (navigation) => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderColor: 'rgb(197,197,197)',
          height: 40,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={{height: 20, width: 20, marginLeft: 10, tintColor: 'grey'}}
            source={require('../../images/back.png')}
          />
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 2,
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderColor: 'rgb(197,197,197)',
          alignItems: 'center',
          height: 40,
        }}>
        <Text style={{fontSize: 20}}>Red Fruit</Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          borderBottomWidth: 1,
          borderColor: 'rgb(197,197,197)',
          height: 40,
          alignItems: 'flex-end',
        }}>
        <TouchableOpacity>
          <Image
            style={{height: 25, width: 25, marginRight: 10, tintColor: 'grey'}}
            source={require('../../images/heart.png')}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
