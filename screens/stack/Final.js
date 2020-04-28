import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, Image, SafeAreaView} from 'react-native';
import Bar from '../../component/Bar';

const Final = () => {
  const [progress, setProgress] = useState(0);
  const [indeterminate, setIndeterminate] = useState(true);

  const animate = () => {
    console.log('krupal');
    let progress = 0;
    setProgress(progress);
    setTimeout(() => {
      setIndeterminate(false);
      setInterval(() => {
        progress += Math.random() / 5;
        if (progress > 1) {
          progress = 1;
        }
        setProgress(progress);
      }, 500);
    }, 1500);
  };
  useEffect(() => {
    animate();
    return () => {
      setProgress(0);
    };
  });

  return (
    <SafeAreaView style={{marginHorizontal: 30}}>
      <View style={styles.inside}>
        <Image
          style={{tintColor: 'grey', height: 75, width: 50}}
          source={require('../../images/icon.png')}
        />
        <Text style={{marginTop: 25, fontSize: 18, color: 'grey'}}>
          PREPARING INDREDIENTS
        </Text>
      </View>
      <View style={{marginTop: 20, alignItems: 'center'}}>
        {/* <Bar progress={0.8} width={200} /> */}
        <Bar progress={progress} indeterminate={indeterminate} />
      </View>
    </SafeAreaView>
  );
};

export default Final;

const styles = StyleSheet.create({
  inside: {
    justifyContent: 'center',
    marginTop: '30%',
    alignItems: 'center',
  },
});
