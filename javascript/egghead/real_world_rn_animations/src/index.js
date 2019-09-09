import React, { Component } from 'react';
import {
  View,
  Text,
  Dimensions,
  ScrollView,
  Image,
  Animated,
  StyleSheet,
} from 'react-native';
const { width, height } = Dimensions.get('window');
import Moment from './moment';

const Images = [
  {
    id: 1,
    image: require('./assets/img/img_1.jpg'),
    title: 'Vodka Cran',
  },
  {
    id: 2,
    image: require('./assets/img/img_2.jpg'),
    title: 'Old Fusion',
  },
  {
    id: 3,
    image: require('./assets/img/img_3.jpg'),
    title: 'Mule',
  },
  {
    id: 4,
    image: require('./assets/img/img_4.jpg'),
    title: 'Strawberry Daiquiri',
  },
];

const getInterpolate = (animatedScroll, i, imageLength) => {
  const inputRange = [
    (i - 1) * width,
    i * width,
    (i + 1) * width
  ]
  const outputRange = i === 0 ? [0,0,150] : [-300, 0, 150];
  return animatedScroll.interpolate({
    inputRange,
    outputRange,
    extrapolate: "clamp"
  })
}

const getSeparate = i =>  <View key={i} style={[styles.separate, { left: (i - 1) * width - 2.5 }]} />;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      animatedScroll: new Animated.Value(0),
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <ScrollView
          pagingEnabled
          horizontal
          scrollEventThrottle={16}
          onScroll={Animated.event([
            {
              nativeEvent: {
                contentOffset: {
                  x: this.state.animatedScroll,
                },
              },
            },
          ])}>
          {Images.map((image, i) => (
            <Moment key={i} {...image}
              translateX={getInterpolate(this.state.animatedScroll, i, Images.length)}
            />
          ))}
          {Array.apply(null, {length: Images.length + 1}).map((_, i) => getSeparate(i))}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
  separate: {
    backgroundColor: '#000',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: 5
  }
});

export default App;
