import { StyleSheet } from "react-native";

export const burgundy = "#800020";
export const black = "#252525";
export const orange = "rgb(254,111,77)";
export const yellow = "rgb(255,164,0)";
export const white = "#ffff";
export const mainColor = "rgb(38,34,94)"; //262261

export const color1 = "#676490";
export const color2 = "#514e80";
export const color3 = "#3b3870";
export const color = "#262261	";
// color1="#fffd9b"
// color2="#e6ca6b"
// color3="#b2993d"
// color="#b2993d"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: mainColor
  },
  containerWhite: {
    flex: 1,
    backgroundColor: white
  },
  center: {
    justifyContent: "center",
    alignItems: "center"
  },
  containerForm: {
    width: "100%",
    height: "100%"
  },
  cardUserHome: {
    width: "100%",
    height: 100,
    borderColor: "#252525",
    borderWidth: 1,
    marginBottom: 10,
    padding: 10
  },
  cardMapView: {
    width: "90%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "center",
    borderColor: "#252525",
    borderWidth: 2,
    borderRadius: 10,
    top: -40,
    shadowColor: "black",
    shadowOffset: {
      width: 0,
      height: 5
    },
    elevation: 3,
    zIndex: 0,
    shadowRadius: 10,
    shadowOpacity: 2.0
  },
  stylesMap: {
    borderRadius: 8,
    height: "100%",
    width: "100%",
    shadowOffset: { width: 16.4, height: 1.6 }
  },
  text18: {
    fontSize: 18,
    color: white
  },
  borderRadius10: { borderRadius: 10 },
  row100: {
    flexDirection: "row",
    width: "100%"
  },
  width50: {
    width: "50%"
  },
  width60: {
    width: "60%"
  },
  width40: {
    width: "40%"
  },
  rowEnd: {
    justifyContent: "flex-end",
    alignItems: "flex-end"
  },
  rowStart: {
    justifyContent: "flex-start",
    alignItems: "flex-start"
  },
  padding40: {
    padding: 40
  },
  padding20: {
    padding: 20
  },
  paddingtop10: {
    paddingTop: 10
  },
  cardNotif: {
    width: "100%",
    height: 50,
    // borderColor: "#252525",
    // borderWidth: 1,
    marginBottom: 30,
    padding: 10,
    backgroundColor: color1,
    opacity: 20
  },
  textNotif: {
    width: "100%",
    borderBottomColor: "#252525",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  texttextAlignVertical: {
    textAlignVertical: "bottom"
  },
  paddingLogin: {
    paddingLeft: 40,
    paddingRight: 40
  },
  cardLogin: {
    width: "90%",
    height: "30%",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    alignSelf: "center",
    borderColor: yellow,
    borderWidth: 2,
    borderRadius: 10,
    top: -40,
    // shadowColor: yellow,
    // shadowOffset: {
    //   width: 0,
    //   height: 5
    // },
    // elevation: 3,
    zIndex: 0,
    // shadowRadius: 10,
    // shadowOpacity: 2.0,
    backgroundColor: yellow
  },
  containerBottom: {
    // backgroundColor: "transparent",
    // height: 20,
    // borderRadius: 100,
    // alignItems: "center",
    // justifyContent: "center",
    // alignContent: "center",
    // borderColor: "red",
    // borderWidth: 3,
    position: "absolute",
    bottom: 0,
    width: "100%"
    // height: "100%"
    // color: "red"
  }
});
