import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

const ItemList = ({item, navigation}) => {
  const places = [1, 1, 1, 1, 1];

  const _hnadleStar = (star) => {
    let temp = [];
    for (var i = 0; i < star; i++) {
      temp.push(
        <Image
          style={styles.star}
          source={require('../../images/star_dark.png')}
        />,
      );
    }
    return temp;
  };
  return (
    <View style={styles.mainview}>
      <Text style={styles.smoothie}>Smoothies</Text>
      <Image
        style={styles.customImg}
        resizeMode={'contain'}
        source={item.img_url}
      />
      <View style={{flexDirection: 'row'}}>
        {_hnadleStar(item.star)}
        {/* {item.star.map((u, index) => (
          <View>
            <Image style={styles.star} source={item.img_star} />
          </View>
        ))} */}
      </View>

      <Text style={styles.customItem}> {item.title}</Text>
      <Text style={styles.smoothieText}>Smoothies</Text>

      <TouchableOpacity
        onPress={() => navigation.navigate('Details')}
        style={styles.touch}>
        <Text style={styles.detail}>SEE DETAILS</Text>
      </TouchableOpacity>
      {/* {console.log('navigation', navigation)} */}
    </View>
  );
};

export default ItemList;
