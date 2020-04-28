import React from 'react';
import {View, Text, Image} from 'react-native';
import ItemList from '../../component/ItemList';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import img1 from '../../images/smoothie1.png';
import img2 from '../../images/smoothie2.png';
import img3 from '../../images/smoothie3.png';
import star from '../../images/star_dark.png';
import {SafeAreaView} from 'react-native-safe-area-context';

const DATA = [
  {
    id: 1,
    title: 'Red Fruit',
    img_url: img1,
    star: 3,
  },
  {
    id: 2,
    title: 'Green',
    img_url: img2,
    star: 5,
  },
  {
    id: 3,
    title: 'Peach',
    img_url: img3,
    star: 2,
  },
];

const Menu = ({navigation}) => {
  // const Img = DATA.map((img_star) => {
  //   { }
  // });
  return (
    <SafeAreaView style={{backgroundColor: 'white'}}>
      <View style={{backgroundColor: 'white'}}>
        <TouchableOpacity onPress={() => navigation.openDrawer()}>
          <Image
            style={{height: 15, width: 20, marginLeft: 20}}
            source={require('../../images/menu.png')}
          />
        </TouchableOpacity>
      </View>
      <FlatList
        pagingEnabled={true}
        data={DATA}
        renderItem={({item}) => {
          return <ItemList item={item} navigation={navigation} />;
        }}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

export default Menu;
