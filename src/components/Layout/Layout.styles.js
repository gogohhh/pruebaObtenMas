import {StyleSheet, Platform} from 'react-native';
import {GlobalFonts as GlobalFontsAndroid} from '../../globalStyles/appFonts.android';
import {GlobalFontsIos} from '../../globalStyles/appFonts.ios';
import {paddingHorizontal} from '../../globalStyles/appLayout';

const GlobalFonts = Platform.select({
  ios: GlobalFontsIos,
  android: GlobalFontsAndroid,
});

export const styles = StyleSheet.create({
  backgroundDefault: {
    backgroundColor: 'transparent',
  },
  container: {
    flex: 1,
    backgroundColor: 'white',
    position: 'relative',
  },
  textMessage: {
    fontSize: 30,
    color: '#000000',
    fontFamily: GlobalFonts.fontBold,
    marginBottom: 10,
  },
  paddingContainer: {
    paddingHorizontal: paddingHorizontal,
  },
  footer: {
    backgroundColor: 'white',
    paddingTop: 15,
    paddingHorizontal: 35,
  },
});
