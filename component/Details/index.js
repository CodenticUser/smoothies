import * as React from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import star from '../../images/star_dark.png';
import Header from './Header';

const FirstRoute = () => (
  <View style={[styles.scene]}>
    <Text style={styles.detailText}>1/2 large banana</Text>
    <Text style={styles.detailText}>2 large fresh strawberries</Text>
    <Text style={styles.detailText}>1/4 cup bluebarries</Text>
    <Text style={styles.detailText}>1/2 cup coconut milk</Text>
    <View style={{flexDirection: 'row', marginBottom: 20}}>
      <Text style={{fontWeight: 'bold', color: 'grey'}}>Served:</Text>
      <Text style={{color: 'grey'}}> poured over ice </Text>
    </View>
    <View style={{flexDirection: 'row', marginBottom: 20}}>
      <Text style={{fontWeight: 'bold', color: 'grey'}}>Standard garnish:</Text>
      <Text style={{color: 'grey'}}> sliced strawberies,mint leaves </Text>
    </View>
    <View style={{flexDirection: 'row', color: 'grey', marginBottom: 20}}>
      <Text style={{fontWeight: 'bold', color: 'grey'}}>Drinkare:</Text>
      <Text style={{color: 'grey'}}> long glass, straw</Text>
    </View>
  </View>
);

const SecondRoute = () => (
  <View style={[styles.scene]}>
    <Text
      style={{
        fontSize: 15,
        lineHeight: 25,
        color: 'grey',
        textAlign: 'justify',
      }}>
      Place the banana, strawberries, bluebarries and coconuts, milk with lots
      of ice in a blender, Blend until smooth. Add some ice cubes, straw and
      garnish with strawberries and mint leaves. ready to serve! Enjoy.
    </Text>
  </View>
);

const initialLayout = {width: Dimensions.get('window').width};

const Details = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'INGREDINTS'},
    {key: 'second', title: 'PREPARATION'},
  ]);

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const _hnadleStar = (star) => {
    let temp = [];
    for (var i = 2; i < star; i++) {
      temp.push(
        <Image
          style={styles.star}
          source={require('../../images/star_dark.png')}
        />,
      );
    }
    return temp;
  };
  const renderTabBar = (props) => (
    <TabBar
      {...props}
      indicatorStyle={{backgroundColor: '#4dd0e1'}}
      style={{backgroundColor: '#4dd0e1'}}
    />
  );
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <Header />
      <View style={{marginHorizontal: 30, height: '95%'}}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View
            style={{
              flex: 2,
              justifyContent: 'center',
              borderBottomWidth: 1,
              borderColor: 'rgb(197,197,197)',
              alignItems: 'center',
              height: 300,
            }}>
            <Image
              style={{
                marginLeft: 130,
                height: 200,
                width: 100,
              }}
              resizeMode={'contain'}
              source={require('../../images/smoothie1.png')}
            />
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <Text style={{fontSize: 25, marginRight: 15}}>Red Fruit</Text>
              {_hnadleStar(star)}
            </View>
            <Text style={{marginRight: 140, color: 'grey'}}>Smoothie</Text>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              borderBottomWidth: 1,
              borderColor: 'rgb(197,197,197)',
              height: 300,
              width: 350,
              alignItems: 'center',
            }}>
            <Image
              style={{
                height: 55,
                width: 55,
                marginTop: 180,
                marginLeft: 40,
                tintColor: 'rgb(33,202,219)',
              }}
              source={require('../../images/clock.png')}
            />
          </View>
        </View>
        <View></View>
        <TabView
          navigationState={{index, routes}}
          renderScene={renderScene}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
          renderTabBar={renderTabBar}
        />
        <TouchableOpacity
          style={{
            borderWidth: 18,
            borderColor: '#4dd0e1',
            backgroundColor: '#4dd0e1',
            width: '100%',
          }}
          onPress={() => navigation.navigate('Place')}>
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              fontSize: 18,
              color: 'white',
            }}>
            Order Ingredients
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  scene: {
    flex: 1,
    marginTop: 15,
  },
  star: {
    height: 17,
    width: 17,
    tintColor: '#4dd0e1',
    marginRight: 5,
  },
  detailText: {
    marginBottom: 20,
    color: 'grey',
  },
});

export default Details;
