import React, {useEffect, useRef} from 'react';
import {useNavigation} from '@react-navigation/native';
import {
  BackHandler,
  View,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Text,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from './Layout.styles';

export const Layout = ({
  children,
  container = true,
  containerTop = 15,
  hardwareBack = true,
  paddingContainer = false,
  backgroundDefault = false,
  showMessage = false,
  isLoading = false,
}) => {
  const navigation = useNavigation();
  const backHandlerRef = useRef(null);
  useEffect(() => {
    const backAction = () => {
      if (hardwareBack === false) {
        return true;
      } else {
        navigation.goBack();
        return true;
      }
    };

    backHandlerRef.current = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => {
      if (backHandlerRef.current) {
        backHandlerRef.current.remove();
      }
    };
  }, [hardwareBack, navigation]);

  const insets = useSafeAreaInsets();

  return isLoading ? (
    <View style={[{flex: 1}]}>
      {showMessage && (
        <View style={{position: 'absolute', top: 100}}>
          <View
            style={[
              styles.paddingContainer,
              {flexDirection: 'column'},
            ]}>
            <Text style={styles.textMessage}>Cargando</Text>
          </View>
        </View>
      )}
    </View>
  ) : (
    <View
      style={[
        {paddingTop: container ? insets.top + containerTop : null},
        container && styles.container,
        backgroundDefault && styles.backgroundDefault,
      ]}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[
          paddingContainer && styles.paddingContainer,
          container && {paddingTop: 15},
        ]}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>{children}</View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </View>
  );
};

export const BottomSeparator = () => {
  const insets = useSafeAreaInsets();
  return <View style={[{height: insets.bottom + 15}]} />;
};
