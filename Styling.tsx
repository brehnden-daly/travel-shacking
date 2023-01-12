import { StyleSheet } from 'react-native';

const Styles = StyleSheet.create({
  spaciousContainer: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 25,
    marginHorizontal: 32,
    marginVertical: 16
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
    color: "#88B7B5",
  },

  secondaryButton: {
    color: "#2C4251",
  }
});

export default Styles;