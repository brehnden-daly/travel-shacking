import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  landingContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#88b7b5',
    // alignItems: 'center',
    // justifyContent: 'center',
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

  primaryButton: {
    color: "#88B7B5"
  },

  secondaryButton: {
    color: "#2C4251"
  }
});

export default Styles;