import { StyleSheet } from "react-native";
import { color1 } from "../../screens/styles";

const styles = StyleSheet.create({
  container: {
    backgroundColor: "transparent",
    height: 20,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderColor: "transparent",
    borderWidth: 1
  },
  containerShadow: {
    backgroundColor: "transparent",
    height: 20,
    borderRadius: 10,
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
  },
  containerBottom: {
    backgroundColor: "transparent",
    height: 20,
    borderRadius: 100,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    borderColor: "red",
    borderWidth: 3,
    position: "absolute",
    bottom: 0,
    color: "red"
  }
});

export default styles;
