import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  top20: {
    top: 20
  },
  width50: {
    width: "50%"
  },
  labelcontainer: {
    backgroundColor: "#e6ca6b",
    width: 100,
    height: 20,
    zIndex: 4,
    elevation: 3,
    position: "absolute",
    justifyContent: "center",
    alignItems: "center"
  },
  labelcontainerParallelogram: {
    backgroundColor: "transparent",
    width: 10,
    height: 10,
    //borderStyle: 'solid',
    borderTopWidth: 9,
    borderRightWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 10,
    borderTopColor: "#b2993d",
    borderRightColor: "#b2993d",
    borderBottomColor: "transparent",
    borderLeftColor: "transparent",
    zIndex: 4,
    position: "absolute"
  },
  text: {
    fontSize: 12,
    color: "black",
    textAlign: "center",
    fontWeight: "300",
    zIndex: 0,
    elevation: 0
  },
  text16: {
    fontSize: 16,
    color: "black"
  },
  ribbonAbsolute: {
    padding: 5,
    borderRadius: 15,
    borderColor: "#fff",
    borderWidth: 2,
    position: "absolute",
    top: 10,
    left: 10
  },
  containerCardView: {
    backgroundColor: "#fefefe",
    width: "100%",
    marginBottom: 10,
    marginTop: 10,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 3
    },
    elevation: 3,
    zIndex: 0,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    borderRadius: 10
  },
  hiddenRadius: {
    overflow: "hidden",
    borderRadius: 10
  },
  bottomMargin: {
    marginBottom: 5
  },
  ribbonPosition: {
    top: "10%",
    left: 5
  },
  ribbonGoldIOS: {
    zIndex: 10,
    elevation: 3
  },
  paddingHorizontal20: {
    paddingHorizontal: 20
  },
  row100: {
    flexDirection: "row",
    width: "100%"
  },
  positionCard: {
    position: "absolute",
    top: 80,
    left: 0,
    right: 0
  }
});

export default styles;
