import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const Confirm = ({navigation}) => {
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          borderBottomWidth: 0.2,
        }}>
        <Image
          style={{height: 20, width: 20, marginLeft: 10, marginBottom: 10}}
          source={require('../../images/back.png')}
        />
        <Text style={{marginRight: 10, fontSize: 20, marginBottom: 10}}>
          Confirm order
        </Text>
        <Text> </Text>
      </View>
      <View style={{marginHorizontal: 20}}>
        <Text style={{marginTop: 30, fontWeight: 'bold'}}> Smoothie:</Text>
        <Text style={{marginTop: 15, color: 'grey'}}>
          Red Fruit x 20 servings
        </Text>
        <Text style={{marginTop: 30, fontWeight: 'bold'}}> Order items:</Text>
        <Text style={{marginTop: 15, color: 'grey'}}> 1/2 banana </Text>
        <Text style={{marginTop: 25, color: 'grey'}}>2 large strawberries</Text>
        <Text style={{marginTop: 25, color: 'grey'}}>1/4 cup blueberries</Text>
        <Text style={{marginTop: 25, color: 'grey'}}>1/2 cup coconut milk</Text>
        <Text style={{marginTop: 25, color: 'grey'}}> Mint leaves </Text>
        <Text style={{marginTop: 25, color: 'grey'}}>long glass and straw</Text>

        <View
          style={{
            flexDirection: 'row',
            marginTop: 50,
            borderBottomWidth: 0.2,
            borderTopWidth: 0.2,
            justifyContent: 'space-between',
            height: 60,
            alignItems: 'center',
            marginBottom: 30,
          }}>
          <Text
            style={{
              fontSize: 25,
              color: 'grey',
            }}>
            TOTAL:
          </Text>
          <Text style={{color: 'grey', fontSize: 20}}>50 USD</Text>
        </View>
        <View
          style={{
            height: 60,
            backgroundColor: 'grey',
            marginBottom: 20,
            justifyContent: 'center',
          }}>
          <Image
            style={{height: 30, width: 200, marginLeft: 20}}
            source={require('../../images/visa.png')}
          />
        </View>
        <View style={styles.cusbutton}>
          <TouchableOpacity onPress={() => navigation.navigate('Final')}>
            <Text
              style={{
                borderColor: '#4dd0e1',
                backgroundColor: '#4dd0e1',
                color: 'white',
                fontSize: 20,
              }}>
              Confirm Order
            </Text>
          </TouchableOpacity>
        </View>

        <View style={{flexDirection: 'row', justifyContent: 'center'}}>
          <Text style={{color: 'grey'}}>I have read and accept the </Text>
          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
            }}>
            <Text style={{color: 'grey'}}>Terms of Service</Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 5,
          }}>
          <Text style={{color: 'grey'}}>and </Text>
          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'grey',
            }}>
            <Text style={{color: 'grey'}}>Privacy Policy</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Confirm;

const styles = StyleSheet.create({
  cusbutton: {
    borderWidth: 17,
    borderColor: '#4dd0e1',
    backgroundColor: '#4dd0e1',
    alignItems: 'center',
    marginBottom: 20,
  },
});
