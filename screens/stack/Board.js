import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
} from 'react-native';
import Swiper from 'react-native-swiper';

import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

/*const slides = [
  {
    key: 1,
    title: 'Discover smoothies',
    text: 'Discover thousands of tasty smoothies \nfor any drink enthuslast.',
    image: require('../../images/slider1.png'),
    backgroundColor: '#59b2ab',
  },
  {
    key: 2,
    title: 'Choose recipe',
    text:
      'Choose your favorite smoothies and see full \ndetails on the recipe and preparation.',
    image: require('../../images/slider2.png'),
    backgroundColor: '#febe29',
  },
  {
    key: 3,
    title: 'Next day delivery',
    text:
      'Order all your favoritr smoothies ingredients in \none click Next day delivery guaranteed.',
    image: require('../../images/slider3.png'),
    backgroundColor: '#22bcb5',
  },
];
*/

const Board = ({navigation}) => {
  return (
    <SafeAreaView style={styles.bg}>
      <Swiper style={styles.wrapper}>
        <View style={styles.slide1}>
          <Text style={styles.text}>Discover smoothies</Text>
          <Image
            style={{height: 250, width: 240}}
            source={require('../../images/slider1.png')}
          />
          <Text
            style={{
              color: 'grey',
              margin: 60,
              textAlign: 'center',
              fontSize: 16,
            }}>
            Discover thousands of tasty smoothies for any drink enthuslast.
          </Text>
        </View>
        <View style={styles.slide2}>
          <Text style={styles.text}>Choose recipe</Text>
          <Image
            style={{height: 250, width: 240}}
            source={require('../../images/slider2.png')}
          />
          <Text
            style={{
              color: 'grey',
              margin: 60,
              textAlign: 'center',
              fontSize: 16,
            }}>
            Discover thousands of tasty smoothies for any drink enthuslast.
          </Text>
        </View>
        <View style={styles.slide3}>
          <Text style={styles.text}>Next day delivery</Text>
          <Image
            style={{height: 250, width: 330}}
            source={require('../../images/slider3.png')}
          />
          <Text
            style={{
              color: 'grey',
              margin: 60,
              textAlign: 'center',
              fontSize: 16,
            }}>
            Order all your favoritr smoothies ingredients in one click Next day
            delivery guaranteed.
          </Text>
        </View>
      </Swiper>

      <TouchableOpacity
        onPress={() => navigation.navigate('LogIn')}
        style={{
          marginHorizontal: 30,
          height: 60,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#4dd0e1',
          marginBottom: 50,
        }}>
        <Text style={{fontSize: 20, color: 'white'}}> Continue</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bg: {
    height: '100%',
  },
  wrapper: {},
  slide1: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide2: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide3: {
    marginTop: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    fontSize: 30,
    marginBottom: 60,
  },
});
export default Board;
