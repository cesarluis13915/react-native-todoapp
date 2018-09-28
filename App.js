import React, { Component } from "react";
import { Platform, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import Footer from "./Footer";

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
        </View>
        <Footer />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },
  content: {
    flex: 1
  }
});
