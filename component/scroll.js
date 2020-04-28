<ScrollView
  horizontal={true}
  pagingEnabled={true}
  showsHorizontalScrollIndicator={true}
  scrollIndicatorInsets={{top: 10, left: 10, bottom: 10, right: 10}}>
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 50,
    }}>
    <Text style={{marginBottom: 60, fontSize: 25}}>Discover smoothies</Text>
    <Image
      style={{height: 190, width: 190}}
      source={require('../../images/slider1.png')}
    />
    <Text style={{marginTop: 40, fontSize: 14, color: 'grey'}}>
      Discover thousands of tasty smoothies <br />
      for any drink enthuslast.
    </Text>
  </View>
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 50,
    }}>
    <Text style={{marginBottom: 95, fontSize: 25}}>Choose recipe</Text>
    <Image
      style={{height: 158, width: 188}}
      source={require('../../images/slider2.png')}
    />
    <Text style={{marginTop: 40, fontSize: 14, color: 'grey'}}>
      Order all your favoritr smoothies ingredients in
    </Text>
    <Text style={{fontSize: 14, color: 'grey'}}>
      details on the recipe and preparation.
    </Text>
  </View>
  <View
    style={{
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal: 50,
    }}>
    <Text style={{marginBottom: 100, fontSize: 25}}>Next day delivery</Text>
    <Image
      style={{height: 160, width: 220}}
      source={require('../../images/slider3.png')}
    />
    <Text
      style={{
        marginTop: 40,
        fontSize: 14,
        backgroundColor: 'red',
        color: 'grey',
      }}>
      Choose your favorite smoothies and see full
    </Text>
    <Text style={{fontSize: 14, color: 'grey'}}>
      none click Next day delivery guaranteed.
    </Text>
  </View>
</ScrollView>;
