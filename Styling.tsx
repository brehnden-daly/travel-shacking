import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  generalContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#88b7b5',
    gap: 25,
    height: '100%',
    width: '100%',
    marginHorizontal: 0,
    marginVertical: 0
  },

  tightContainer: {
    justifyContent: 'space-between',
    gap: 15,
    width: "100%",
    maxWidth: 200
  },

  textInfoTitle: {
    color: "#2F2F2F",
    fontSize: 16,
    fontFamily: 'courier',
    fontWeight: 'bold',
    textAlign: 'center'
  },

  textInfoDescription: {
    fontSize: 14,
    fontFamily: 'courier',
    fontWeight: 'normal',
    textAlign: 'left'
  },

  textInputGeneral: {
    fontSize: 14,
    fontFamily: 'courier',
    fontWeight: 'bold',
    textAlign: 'left',
    backgroundColor: '#FFFFFF',
    color: '#2C4251',
    height: 35,
    borderRadius: 10,
    padding: 10
  },

  primaryButton: {
    color: "#88B7B5"
  },

  secondaryButton: {
    color: "#2C4251"
  }
});

export default Styles;