
import { StyleSheet } from "react-native";
import { GlobalFonts } from '../../globalStyles/appFonts.android';

export const stylesItem = StyleSheet.create({
  bankContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    backgroundColor: '#F4EEF9',
    minHeight: 80,
    paddingHorizontal: 5,
  },
  bankAge: {
    color: '#000',
    fontSize: 19,
    flex: 1,
    textAlign: 'center',
  },
  bankImage: {
    flex: 1,
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  bankInfoContainer: {
    flex: 3,
    flexDirection: 'column',
    marginLeft: 10,
  },
  bankName: {
    color: 'black',
    fontFamily: GlobalFonts.fontBold,
    fontSize: 19,
  },
  bankAge: {
    color: 'black',
    fontFamily: GlobalFonts.fontBold,
    fontSize: 19,
    paddingRight: 5, 
  },
  bankDescription: {
    color: 'black',
    fontSize: 16,
  },
});
