import React from "react";
import { View, StyleSheet } from "react-native";
import AppContainer from "../navigation/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

const App = () => (
  //<View style={styles.container}>
  <AppContainer />
  //</View>
);

export default App;
