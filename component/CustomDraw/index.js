import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CustomDraw = (props) => {
  return (
    <View>
      <View
        style={{
          paddingTop: 40,
          alignItems: 'center',
          borderBottomWidth: 1,
          borderColor: 'grey',
        }}>
        <Image
          style={{height: 80, width: 80, tintColor: 'rgb(33,202,219)'}}
          source={require('../../images/userd.png')}
        />
        <Text style={{marginTop: 10, fontSize: 25, color: 'rgb(33,202,219)'}}>
          John Cena
        </Text>
        <Text
          style={{
            color: 'grey',
            fontSize: 15,
            borderBottomWidth: 20,
          }}>
          cen@hotmail.com
        </Text>
      </View>
      <View>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Menu')}
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            marginTop: 25,
          }}>
          <Image
            style={{height: 25, width: 25, marginLeft: 15, tintColor: 'grey'}}
            source={require('../../images/yogurt.png')}
          />
          <Text style={{fontSize: 20, marginLeft: 10, color: 'grey'}}>
            Smoothies
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Orders')}
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            marginTop: 25,
          }}>
          <Image
            style={{height: 25, width: 25, marginLeft: 15, tintColor: 'grey'}}
            source={require('../../images/order.png')}
          />
          <Text style={{fontSize: 20, marginLeft: 10, color: 'grey'}}>
            My Orders
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => props.navigation.navigate('Home')}
          style={{
            flexDirection: 'row',
            alignContent: 'center',
            marginTop: 25,
          }}>
          <Image
            style={{height: 20, width: 20, marginLeft: 15, tintColor: 'grey'}}
            source={require('../../images/logout.png')}
          />
          <Text style={{fontSize: 20, marginLeft: 15, color: 'grey'}}>
            Sign Out
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CustomDraw;

const styles = StyleSheet.create({});
