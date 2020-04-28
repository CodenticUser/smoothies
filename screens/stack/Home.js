import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  SafeAreaView,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Home = ({navigation}) => {
  return (
    <LinearGradient
      colors={['rgb(52,199,230)', 'rgb(52,152,162)', 'rgb(0,112,134)']}
      style={styles.bg}>
      <View style={styles.inside}>
        <Image
          style={{tintColor: 'white'}}
          source={require('../../images/icon.png')}
        />
        <Text style={{marginTop: 25, fontSize: 20, color: 'white'}}>
          SOMOOTHIS TO DOOR
        </Text>
      </View>
      <View style={styles.inside}>
        <View style={styles.cusbutton}>
          <Button
            title="Start the tour"
            color="white"
            onPress={() => navigation.navigate('Board')}
          />
        </View>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  bg: {
    flexDirection: 'column',
    height: '100%',
  },
  inside: {
    flex: 1,
    justifyContent: 'center',
    marginTop: '40%',
    alignItems: 'center',
  },
  cusbutton: {
    borderWidth: 10,
    marginTop: '5%',
    borderColor: '#4dd0e1',
    backgroundColor: '#4dd0e1',
    width: '80%',
  },
});

export default Home;
