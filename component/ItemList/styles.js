import {StyleSheet, Dimensions} from 'react-native';

const styles = StyleSheet.create({
  mainview: {
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  star: {
    height: 20,
    width: 20,
    tintColor: '#4dd0e1',
    marginRight: 5,
  },
  touch: {
    alignItems: 'center',
    justifyContent: 'center',
    color: '#4dd0e1',
    marginBottom: 50,
  },
  detail: {
    fontSize: 20,
    color: '#4dd0e1',
    fontWeight: 'bold',
    marginTop: 30,
  },
  smoothie: {
    fontSize: 20,
    marginBottom: 60,
    color: 'rgb(111, 113, 114)',
  },
  customImg: {
    height: 420,
    width: Dimensions.get('window').width,
  },
  startView: {
    flexDirection: 'row',
    marginBottom: 30,
    backgroundColor: 'red',
    height: 30,
  },
  customItem: {
    marginTop: 15,
    fontSize: 30,
    marginBottom: 10,
  },
  smoothieText: {
    fontSize: 15,
    color: 'rgb(111, 113, 114)',
  },
  StarImage: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});

export default styles;
