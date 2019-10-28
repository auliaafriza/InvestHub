import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    height: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderColor: "transparent",
    borderWidth: 1
  },
  containerShadow: {
    backgroundColor: "transparent",
    height: 20,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 3,
    zIndex: 0,
    shadowRadius: 5,
    shadowOpacity: 1.0
  },
  text: {
    fontWeight: "300",
    fontSize: 15,
    color: "white"
  }
});

export default styles;
