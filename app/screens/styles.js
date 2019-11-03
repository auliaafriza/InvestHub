import { StyleSheet } from "react-native";

export const burgundy = "#800020";
export const black = "#252525";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#efefef"
  },
  searchBarList: {
    backgroundColor: "white",
    borderWidth: 1,
    borderRadius: 5,
    borderColor: "white"
  },
  searcBarInputStyle: { backgroundColor: "#f4f4f4" },
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
    fontSize: 18
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
    borderColor: "#252525",
    borderWidth: 1,
    marginBottom: 30,
    padding: 10
  },
  textNotif: {
    width: "100%",
    borderBottomColor: "#252525",
    borderBottomWidth: 1,
    marginBottom: 10
  },
  texttextAlignVertical: {
    textAlignVertical: "bottom"
  }
});
