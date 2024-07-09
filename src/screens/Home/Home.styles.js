import {StyleSheet} from 'react-native';
import {GlobalFonts} from '../../globalStyles/appFonts.android';
import { normalizePixel } from '../../helpers/normalizePixel';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontFamily: GlobalFonts.fontBold,
    color: '#393C40',
    fontSize: 28,
    lineHeight: 28,
    textAlign: 'center',
  },
  subTitle: {
    fontFamily: GlobalFonts.fontMedium,
    color: '#393C40',
    fontSize: 24,
    lineHeight: 25,
    textAlign: 'center',
  },
  listContainer: {
    marginTop: 30,
  },
  iconContainer: {
    position: 'absolute',
    top: 20,
    right: 20,
  },
  icon: {
    width: 24,
    height: 24,
  },
});
