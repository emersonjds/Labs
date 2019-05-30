import React, { Component } from "react";

import {
  View,
  Image,
  Text,
  Platform,
  StatusBar,
  StyleSheet,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Animated
} from "react-native";

import User from "./components/User";

const { width } = Dimensions.get("window");

export default class App extends Component {
  state = {
    scrollOfSet: new Animated.Value(0),
    listProgress: new Animated.Value(0),
    userInfoProgress: new Animated.Value(0),
    userSelected: null,
    userInfoVisible: false,
    users: [
      {
        id: 1,
        name: "Diego Fernandes",
        description: "Head de programação!",
        avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4",
        thumbnail:
          "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&w=400&q=80",
        likes: 200,
        color: "#57BCBC"
      },
      {
        id: 2,
        name: "Robson Marques",
        description: "Head de empreendedorismo!",
        avatar: "https://avatars2.githubusercontent.com/u/861751?s=460&v=4",
        thumbnail:
          "https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=400&q=80",
        likes: 350,
        color: "#E75A63"
      },
      {
        id: 3,
        name: "Cleiton Souza",
        description: "Head de mindset!",
        avatar: "https://avatars0.githubusercontent.com/u/4669899?s=460&v=4",
        thumbnail:
          "https://images.unsplash.com/photo-1506440905961-0ab11f2ed5bc?auto=format&fit=crop&w=400&q=80",
        likes: 250,
        color: "#2E93E5"
      },
      {
        id: 4,
        name: "Robson Marques",
        description: "Head de empreendedorismo!",
        avatar: "https://avatars2.githubusercontent.com/u/861751?s=460&v=4",
        thumbnail:
          "https://images.unsplash.com/photo-1490633874781-1c63cc424610?auto=format&fit=crop&w=400&q=80",
        likes: 350,
        color: "#E75A63"
      }
    ]
  };

  selectUser = user => {
    this.setState({ userSelected: user });
    Animated.sequence([
      Animated.timing(this.state.listProgress, {
        toValue: 100,
        duration: 300
      }),
      Animated.timing(this.state.userInfoProgress, {
        toValue: 100,
        duration: 500
      })
    ]).start(() => {
      this.setState({ userInfoVisible: true });
    });
  };

  renderDetail = () => (
    <View>
      <User user={this.state.userSelected} onPress={() => {}} />
    </View>
  );

  renderList = () => (
    <View style={styles.container}>
      <ScrollView
        scrollEventThrottle={16}
        onScroll={Animated.event([
          {
            nativeEvent: {
              contentOffset: {
                y: this.state.scrollOfSet
              }
            }
          }
        ])}
      >
        {this.state.users.map(user => (
          <User
            key={user.id}
            user={user}
            onPress={() => this.selectUser(user)}
          />
        ))}
      </ScrollView>
    </View>
  );

  render() {
    const { userSelected } = this.state;

    return (
      <Animated.View
        style={[
          styles.container,
          {
            transform: [
              {
                translateX: this.state.listProgress.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, width]
                })
              }
            ]
          }
        ]}
      >
        <StatusBar barStyle="light-content" />

        <Animated.View
          style={[
            styles.header,
            {
              height: this.state.scrollOfSet.interpolate({
                inputRange: [0, 140],
                outputRange: [200, 70],
                extrapolate: "clamp"
              })
            }
          ]}
        >
          <Animated.Image
            style={[
              styles.headerImage,
              {
                opacity: this.state.userInfoProgress.interpolate({
                  inputRange: [0, 100],
                  outputRange: [0, 1]
                })
              }
            ]}
            source={userSelected ? { uri: userSelected.thumbnail } : null}
          />

          <Animated.Text
            style={[
              styles.headerText,
              {
                fontSize: this.state.scrollOfSet.interpolate({
                  inputRange: [120, 140],
                  outputRange: [24, 16],
                  extrapolate: "clamp"
                }),
                transform: [
                  {
                    translateX: this.state.userInfoProgress.interpolate({
                      inputRange: [0, 100],
                      outputRange: [0, width]
                    })
                  }
                ]
              }
            ]}
          >
            GoNative
          </Animated.Text>

          <Animated.Text
            style={[
              styles.headerText,
              {
                transform: [
                  {
                    translateX: this.state.userInfoProgress.interpolate({
                      inputRange: [0, 100],
                      outputRange: [width * -1, 0]
                    })
                  }
                ]
              }
            ]}
          >
            {userSelected ? userSelected.name : null}
          </Animated.Text>
        </Animated.View>
        {this.state.userInfoVisible ? this.renderDetail() : this.renderList()}
      </Animated.View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },

  header: {
    paddingTop: Platform.OS === "ios" ? 40 : 20,
    paddingHorizontal: 15,
    backgroundColor: "#2E93E5"
  },

  headerImage: {
    ...StyleSheet.absoluteFillObject
  },

  headerText: {
    fontSize: 24,
    fontWeight: "900",
    color: "#FFF",
    backgroundColor: "transparent",
    position: "absolute",
    left: 15,
    bottom: 20
  }
});
