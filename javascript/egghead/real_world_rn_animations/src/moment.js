import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';

const { width, height } = Dimensions.get('window');

export class Moment extends Component {
  render() {
    const { image, title } = this.props;
    return (
      <View style={styles.container}>
        <Animated.Image
          source={image}
          style={styles.image}
          resizeMode="cover"
        />
        <View style={[StyleSheet.absoluteFill, styles.center]}>
          <View style={styles.textWrap}>
            <Text style={styles.title}>{title}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width,
    height,
    overflow: 'hidden',
  },
  image: {
    flex: 1,
    width: null,
    height: null,
  },
  center: {
    justifyContent: 'center',
  },
  textWrap: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 10,
  },
  title: {
    backgroundColor: 'transparent',
    fontSize: 30,
    color: '#FFF',
    textAlign: 'center',
  },
});

export default Moment;
