import React from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
} from 'react-native';
import Header from '../../component/Header';
import {TextInput} from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

const LogIn = ({navigation}) => {
  return (
    <LinearGradient
      colors={['rgb(52,199,230)', 'rgb(52,152,162)', 'rgb(0,112,134)']}
      style={styles.bg}>
      <View style={styles.inside}>
        <Text style={{marginBottom: 50, color: 'rgb(193,233,237)'}}>
          Sign In
        </Text>
        <Image
          style={{height: 75, width: 50, tintColor: 'white'}}
          source={require('../../images/icon.png')}
        />
        <Text style={{marginTop: 20, fontSize: 15, color: 'white'}}>
          SOMOOTHIES TO DOOR
        </Text>
      </View>
      <View style={styles.inside}>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <View style={styles.input}>
            <Image
              style={{height: 20, width: 20, tintColor: 'white'}}
              source={require('../../images/user.png')}
            />
            <TextInput
              style={{marginLeft: 20}}
              placeholderTextColor="white"
              placeholder="User Name"
            />
          </View>
        </View>

        <View style={styles.input}>
          <Image
            style={{height: 20, width: 20, tintColor: 'white'}}
            source={require('../../images/password.png')}
          />
          <TextInput
            style={{marginLeft: 20}}
            placeholderTextColor="white"
            placeholder="Password"
          />
        </View>
      </View>
      <View style={styles.inside}>
        <View style={styles.cusbutton}>
          <Button
            title="Sign In"
            color="white"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
        <View style={{flexDirection: 'row', marginTop: 30}}>
          <Text style={{color: 'rgb(109,185,196)', marginRight: 15}}>
            Don't have an account?
          </Text>
          <TouchableOpacity
            style={{
              borderBottomWidth: 1,
              borderBottomColor: 'rgb(193,233,237)',
            }}
            onPress={() => navigation.navigate('SignIn')}>
            <Text style={{color: 'rgb(193,233,237)'}}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </LinearGradient>
  );
};
const styles = StyleSheet.create({
  bg: {
    height: '100%',
  },
  inside: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cusbutton: {
    borderWidth: 10,
    borderColor: '#4dd0e1',
    backgroundColor: '#4dd0e1',
    marginTop: '25%',
    width: '80%',
  },
  input: {
    flexDirection: 'row',
    width: '80%',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(193,233,237)',
    marginBottom: 10,
  },
});
export default LogIn;
