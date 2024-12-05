import React from "react";
import { ImageBackground, StyleSheet, Text, Image, View } from "react-native";

const image = require('../assets/images/Picture1.png');

const App = () => (
  <View style={styles.container}>
    <ImageBackground source={image} resizeMode="cover" style={styles.image}>
      <Text style={styles.text}>ROI HR System</Text>
      <Image source={require('../images/roi.png')} />
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center"
  },
  text: {
    color: "#ffffff",
    fontSize: 35,
    lineHeight: 84,
    fontWeight: "normal",
    textAlign: "center",
    backgroundColor: "#941a1d"
  }
});

export default App;
