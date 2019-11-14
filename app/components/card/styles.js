import {StyleSheet} from 'react-native';
import {orange} from '../../screens/styles';
const styles = StyleSheet.create({
  top20: {
    top: 20,
  },
  paddingTop40: {
    paddingTop: 40,
  },
  width50: {
    width: '50%',
  },
  width40: {
    width: '40%',
  },
  width60: {
    width: '60%',
  },
  width100: {
    width: '100%',
  },
  labelcontainer: {
    // backgroundColor: "#e6ca6b",
    backgroundColor: orange,
    width: 100,
    height: 20,
    zIndex: 4,
    elevation: 3,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  labelcontainerParallelogram: {
    backgroundColor: 'transparent',
    width: 10,
    height: 10,
    //borderStyle: 'solid',
    borderTopWidth: 9,
    borderRightWidth: 1,
    borderBottomWidth: 0,
    borderLeftWidth: 10,
    // borderTopColor: "#b2993d",
    // borderRightColor: "#b2993d",
    borderTopColor: orange,
    borderRightColor: orange,
    borderBottomColor: 'transparent',
    borderLeftColor: 'transparent',
    zIndex: 4,
    position: 'absolute',
  },
  text: {
    fontSize: 12,
    color: 'black',
    textAlign: 'center',
    fontWeight: '300',
    zIndex: 0,
    elevation: 0,
  },
  text16: {
    fontSize: 16,
    color: 'black',
  },
  text22: {
    fontSize: 22,
  },
  rowEnd: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  alignItemsEnd: {alignItems: 'flex-end'},
  textStyle: {
    fontSize: 14,
    color: '#777777',
    marginBottom: 5,
  },
  textAktif: {
    color: '#6b82e6',
    fontSize: 22,
  },
  textInAktif: {
    color: 'red',
    fontSize: 22,
  },

  text14: {
    fontSize: 14,
  },
  paddingLeft5: {paddingLeft: 5},
  text12: {
    fontSize: 12,
  },
  textBold: {
    fontWeight: '300',
  },
  greyColor: {
    color: '#777777',
  },
  marginBottom5: {marginBottom: 5},
  rightCenter: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  marginBottom10: {
    marginBottom: 10,
  },
  marginTop20: {
    marginTop: 20,
  },
  ribbonAbsolute: {
    padding: 5,
    borderRadius: 15,
    borderColor: '#fff',
    borderWidth: 2,
    position: 'absolute',
    top: 10,
    left: 10,
  },
  padding20: {padding: 20},
  containerCardView: {
    backgroundColor: '#f5f5fd',
    // backgroundColor: orange,
    width: '100%',
    marginBottom: 10,
    marginTop: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    elevation: 3,
    zIndex: 0,
    shadowRadius: 5,
    shadowOpacity: 1.0,
    borderRadius: 10,
  },
  hiddenRadius: {
    overflow: 'hidden',
    borderRadius: 10,
  },
  bottomMargin: {
    marginBottom: 5,
  },
  ribbonPosition: {
    top: '10%',
    left: 5,
  },
  ribbonGoldIOS: {
    zIndex: 10,
    elevation: 3,
  },
  paddingHorizontal20: {
    paddingHorizontal: 20,
  },
  styleRowButton: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  row100: {
    flexDirection: 'row',
    width: '100%',
  },
  positionCard: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
  },
  paddingBottom10: {
    paddingBottom: 10,
  },
  paddingRight5: {
    paddingRight: 5,
  },
  paddingLeft5: {
    paddingLeft: 5,
  },
});

export default styles;
