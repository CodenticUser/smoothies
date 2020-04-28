import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  SafeAreaView,
  Button,
} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';

const Place = ({navigation}) => {
  const [count, setCount] = useState(0);
  const [banana, setBanana] = useState(true);
  const [straw, setStraw] = useState(true);
  const [blue, setBlue] = useState(true);
  const [milk, setMilk] = useState(true);
  const [mint, setMint] = useState(true);
  const [glass, setGlass] = useState(true);

  return (
    <SafeAreaView
      style={{
        backgroundColor: 'white',
        height: '100%',
      }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
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
            borderBottomWidth: 1,
            borderColor: 'rgb(197,197,197)',
            height: 40,
          }}></View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity onPress={() => setCount(count - 1)}>
          <Text style={{fontSize: 60, marginRight: 50, color: 'grey'}}>-</Text>
        </TouchableOpacity>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <TextInput
            style={{fontSize: 40, fontWeight: 'bold'}}
            placeholder={count.toString()}
            placeholderTextColor="#4dd0e1"
          />
          <Text> SERVINGS</Text>
        </View>

        <TouchableOpacity onPress={() => setCount(count + 1)}>
          <Text style={{fontSize: 50, marginLeft: 50, color: 'grey'}}> +</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 35}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 15, color: 'grey'}}>1/2 banana</Text>
          <TouchableOpacity onPress={() => setBanana(!banana)}>
            <Image
              style={{height: 30, width: 30, tintColor: '#4dd0e1'}}
              source={
                banana
                  ? require('../../images/checkbox.png') // Use object with 'uri'
                  : require('../../images/checkbox-dark.png')
              }
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 15, color: 'grey'}}>
            2 large strawberries
          </Text>
          <TouchableOpacity onPress={() => setStraw(!straw)}>
            <Image
              style={{height: 30, width: 30, tintColor: '#4dd0e1'}}
              source={
                straw
                  ? require('../../images/checkbox.png') // Use object with 'uri'
                  : require('../../images/checkbox-dark.png')
              }
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            marginBottom: 20,
          }}>
          <Text style={{fontSize: 15, color: 'grey'}}>1/4 cup blueberries</Text>
          <TouchableOpacity onPress={() => setBlue(!blue)}>
            <Image
              style={{height: 30, width: 30, tintColor: '#4dd0e1'}}
              source={
                blue
                  ? require('../../images/checkbox.png') // Use object with 'uri'
                  : require('../../images/checkbox-dark.png')
              }
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            marginBottom: 30,
          }}>
          <Text style={{fontSize: 15, color: 'grey'}}>
            1/2 cup coconut milk
          </Text>
          <TouchableOpacity onPress={() => setMilk(!milk)}>
            <Image
              style={{height: 30, width: 30, tintColor: '#4dd0e1'}}
              source={
                milk
                  ? require('../../images/checkbox.png') // Use object with 'uri'
                  : require('../../images/checkbox-dark.png')
              }
            />
          </TouchableOpacity>
        </View>
        <Text style={{fontWeight: 'bold', marginBottom: 10, marginLeft: 20}}>
          Garnish:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            marginBottom: 30,
          }}>
          <Text style={{fontSize: 15, color: 'grey'}}>Mint leaves</Text>
          <TouchableOpacity onPress={() => setMint(!mint)}>
            <Image
              style={{height: 30, width: 30, tintColor: '#4dd0e1'}}
              source={
                mint
                  ? require('../../images/checkbox.png') // Use object with 'uri'
                  : require('../../images/checkbox-dark.png')
              }
            />
          </TouchableOpacity>
        </View>
        <Text style={{fontWeight: 'bold', marginBottom: 10, marginLeft: 20}}>
          Drinkware:
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 20,
            marginBottom: 40,
          }}>
          <Text style={{fontSize: 15, color: 'grey'}}>
            Long glass and straw
          </Text>
          <TouchableOpacity onPress={() => setGlass(!glass)}>
            <Image
              style={{height: 30, width: 30, tintColor: '#4dd0e1'}}
              source={
                glass
                  ? require('../../images/checkbox.png') // Use object with 'uri'
                  : require('../../images/checkbox-dark.png')
              }
            />
          </TouchableOpacity>
        </View>
        <View
          style={{
            borderTopWidth: 0.2,
            borderBottomWidth: 0.2,
            height: 70,
            marginHorizontal: 20,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 40,
          }}>
          <Text style={{fontSize: 25, color: 'grey'}}> TOTAL</Text>
          <Text style={{fontSize: 20, color: 'grey'}}> 50 USD</Text>
        </View>
      </View>
      <View style={styles.cusbutton}>
        <TouchableOpacity onPress={() => navigation.navigate('Confirm')}>
          <Text
            style={{
              borderColor: '#4dd0e1',
              backgroundColor: '#4dd0e1',
              marginHorizontal: 30,
              color: 'white',
              fontSize: 20,
            }}>
            Place Order
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Place;

const styles = StyleSheet.create({
  cusbutton: {
    borderWidth: 17,
    borderColor: '#4dd0e1',
    backgroundColor: '#4dd0e1',
    marginHorizontal: 30,
    alignItems: 'center',
  },
});
