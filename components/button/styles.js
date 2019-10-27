import EStyleSheet from "react-native-extended-stylesheet";

const styles = EStyleSheet.create({
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
    "@media ios": {
      shadowColor: "#d8d8d8"
    },
    "@media android": {
      shadowColor: "black"
    },
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
    "@media ios": {
      fontWeight: "600"
    },
    "@media android": {
      fontWeight: "300"
    },
    fontSize: 15,
    color: "white"
  }
});

export default styles;
