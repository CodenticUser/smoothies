import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import Swiper from 'react-native-swiper';
import {SafeAreaView} from 'react-native-safe-area-context';
import {TouchableOpacity} from 'react-native-gesture-handler';

const Orders = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        height: '100%',
        backgroundColor: 'rgb(225,225,225)',
      }}>
      <View style={{flexDirection: 'row', marginBottom: 15}}>
        <View style={{flex: 1}}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image
              style={{height: 15, width: 20, marginLeft: 20}}
              source={require('../../images/back.png')}
            />
          </TouchableOpacity>
        </View>
        <View style={{flex: 2}}>
          <Text style={{fontSize: 20, marginLeft: 10}}>My Orders</Text>
        </View>
      </View>

      <Swiper style={styles.wrapper}>
        <View
          style={{
            marginHorizontal: 25,
            backgroundColor: 'white',
            shadowRadius: 5,
          }}>
          <View
            style={{
              alignItems: 'center',
              height: '95%',
            }}>
            <Image
              style={{height: 300, width: 130}}
              source={require('../../images/smoothie1.png')}
            />
            <Text style={{fontSize: 30}}> Red Fruit</Text>
            <Text
              style={{marginTop: 35, color: 'rgb(117,142,154)', fontSize: 16}}>
              NUMBER OF SERVINGS
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontWeight: 'bold',
                color: 'rgb(117,142,154)',
                fontSize: 18,
              }}>
              20
            </Text>
            <Text
              style={{marginTop: 35, color: 'rgb(117,142,154)', fontSize: 15}}>
              ESTIMATED ARRIVAL
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: 'rgb(117,142,154)',
                fontSize: 20,
                marginBottom: 40,
                fontWeight: 'bold',
              }}>
              TOMORROW
            </Text>
            <View
              style={{
                width: '100%',
                borderTopWidth: 1,
                borderColor: 'black',
              }}>
              <Text></Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 30}}>
              <Text
                style={{
                  marginRight: 30,
                  fontSize: 20,
                  color: 'rgb(117,142,154)',
                }}>
                PRICE: 50 USD
              </Text>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>SHIPPED</Text>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 25, backgroundColor: 'white'}}>
          <View style={{alignItems: 'center', height: '95%'}}>
            <Image
              style={{height: 280, width: 150, marginTop: 10}}
              source={require('../../images/sm2.png')}
            />
            <Text style={{fontSize: 30, marginTop: 20}}> Oatmeal Fruit</Text>
            <Text
              style={{marginTop: 35, color: 'rgb(117,142,154)', fontSize: 16}}>
              NUMBER OF SERVINGS
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontWeight: 'bold',
                color: 'rgb(117,142,154)',
                fontSize: 18,
              }}>
              10
            </Text>
            <Text
              style={{marginTop: 35, color: 'rgb(117,142,154)', fontSize: 15}}>
              DELIVERED ON
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: 'rgb(117,142,154)',
                fontSize: 20,
                marginBottom: 40,
                fontWeight: 'bold',
              }}>
              5 JUL
            </Text>
            <View
              style={{
                width: '100%',
                borderTopWidth: 1,
                borderColor: 'black',
              }}>
              <Text></Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 30}}>
              <Text
                style={{
                  marginRight: 60,
                  fontSize: 20,
                  color: 'rgb(117,142,154)',
                }}>
                PRICE: 25 USD
              </Text>
              <Text
                style={{
                  marginLeft: 80,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}></Text>
            </View>
          </View>
        </View>
        <View style={{marginHorizontal: 25, backgroundColor: 'white'}}>
          <View style={{alignItems: 'center', height: '95%'}}>
            <Image
              style={{height: 300, width: 140, marginTop: 10}}
              source={require('../../images/sm3.png')}
            />
            <Text style={{fontSize: 30}}> Blackcurrant</Text>
            <Text
              style={{marginTop: 35, color: 'rgb(117,142,154)', fontSize: 16}}>
              NUMBER OF SERVINGS
            </Text>
            <Text
              style={{
                marginTop: 5,
                fontWeight: 'bold',
                color: 'rgb(117,142,154)',
                fontSize: 18,
              }}>
              50
            </Text>
            <Text
              style={{marginTop: 35, color: 'rgb(117,142,154)', fontSize: 15}}>
              DELIVERY ON
            </Text>
            <Text
              style={{
                marginTop: 5,
                color: 'rgb(117,142,154)',
                fontSize: 20,
                marginBottom: 40,
                fontWeight: 'bold',
              }}>
              13 JUNE
            </Text>
            <View
              style={{
                width: '100%',
                borderTopWidth: 1,
                borderColor: 'black',
              }}>
              <Text></Text>
            </View>
            <View style={{flexDirection: 'row', marginTop: 30}}>
              <Text
                style={{
                  marginRight: 70,
                  fontSize: 20,
                  color: 'rgb(117,142,154)',
                }}>
                PRICE: 125 USD
              </Text>
              <Text
                style={{
                  marginLeft: 40,
                  fontSize: 20,
                  fontWeight: 'bold',
                }}></Text>
            </View>
          </View>
        </View>
      </Swiper>
    </SafeAreaView>
  );
};

export default Orders;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgb(225,225,225)',
    alignSelf: 'center',
  },

  slide1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
    fontWeight: 'bold',
  },
});
