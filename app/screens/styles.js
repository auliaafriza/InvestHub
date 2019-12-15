import {StyleSheet, Dimensions} from 'react-native';

export const burgundy = '#800020';
export const black = '#252525';
export const orange = 'rgb(254,111,77)';
export const yellow = 'rgb(255,164,0)';
export const white = '#ffff';
export const mainColor = 'rgb(38,34,94)'; //262261

export const color1 = '#676490';
export const color2 = '#514e80';
export const color3 = '#3b3870';
export const color = '#262261	';

export const widthMap = Dimensions.get('window').width * 0.79;
// color1="#fffd9b"
// color2="#e6ca6b"
// color3="#b2993d"
// color="#b2993d"

export const styles = StyleSheet.create({
  text16: {
    fontSize: 16,
  },
  text14: {
    fontSize: 14,
  },
  text12: {
    fontSize: 12,
  },
  container: {
    flex: 1,
    backgroundColor: mainColor,
  },
  containerWhite: {
    flex: 1,
    backgroundColor: white,
  },
  marginBottom10: {
    marginBottom: 10,
  },
  marginTop20: {
    marginTop: 20,
  },
  searchBarList: {
    backgroundColor: 'white',
    width: '100%',
    borderTopWidth: 0,
    borderBottomWidth: 0,
  },
  searcBarInputStyle: {backgroundColor: '#f4f4f4', borderRadius: 10},

  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm: {
    width: '100%',
    height: '100%',
  },
  cardUserHome: {
    width: '100%',
    height: 100,
    borderColor: '#252525',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    backgroundColor: 'white',
  },
  cardMapView: {
    width: Dimensions.get('window').width * 0.8,
    height: Dimensions.get('window').height * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    alignSelf: 'center',
    borderColor: '#252525',
    borderWidth: 2,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    elevation: 3,
    zIndex: 0,
    shadowRadius: 10,
    shadowOpacity: 2.0,
  },
  stylesMap: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
  text18: {
    fontSize: 18,
    color: white,
  },
  borderRadius10: {borderRadius: 10},
  row100: {
    flexDirection: 'row',
    width: '100%',
  },
  width50: {
    width: '50%',
  },
  paddingLeft5: {
    paddingLeft: 5,
  },
  width60: {
    width: '60%',
  },
  textBold: {
    fontWeight: '300',
  },
  width40: {
    width: '40%',
  },
  rightCenter: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  greyColor: {
    color: '#777777',
  },
  redColor: {
    color: 'red',
  },
  blueColor: {
    color: '#6b82e6',
  },
  marginBottom5: {
    marginBottom: 5,
  },
  width100: {
    width: '100%',
  },
  marginBottom20: {
    marginBottom: 20,
  },
  rowEnd: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  rowStart: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  padding40: {
    padding: 40,
  },
  padding20: {
    padding: 20,
  },
  paddingtop10: {
    paddingTop: 10,
  },
  padding10: {
    padding: 10,
  },
  cardNotif: {
    width: '100%',
    height: 50,
    marginBottom: 30,
    padding: 10,
    backgroundColor: color1,
    opacity: 20,
  },
  textNotif: {
    width: '100%',
    borderBottomColor: '#252525',
    borderBottomWidth: 1,
    padding: 10,
  },
  texttextAlignVertical: {
    textAlignVertical: 'bottom',
  },
  paddingLogin: {
    paddingLeft: 40,
    paddingRight: 40,
  },
  cardLogin: {
    width: '90%',
    height: '30%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    alignSelf: 'center',
    borderColor: yellow,
    borderWidth: 2,
    borderRadius: 10,
    top: -40,
    zIndex: 0,
    backgroundColor: yellow,
  },
  containerBottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    left: 0,
    right: 0,
    bottom: 0,
  },
  modal: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: mainColor,
    height: 200,
    width: '80%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    marginTop: 80,
    marginLeft: 40,
  },
  styleRowButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  paddingRight5: {
    paddingRight: 5,
  },
});
