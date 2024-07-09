import React, {useState, useEffect} from 'react';
import {View, Animated, StyleSheet} from 'react-native';

export const LoaderLine = ({onAnimationComplete, duration = 6000}) => {
  const [progress] = useState(new Animated.Value(0));
  const [animationStarted, setAnimationStarted] = useState(false);

  useEffect(() => {
    if (!animationStarted) {
      Animated.timing(progress, {
        toValue: 1,
        duration: duration,
        useNativeDriver: false,
      }).start(() => {
        // Llama a la función onAnimationComplete solo la primera vez que la animación termina
        onAnimationComplete && onAnimationComplete();
        setAnimationStarted(true); // Marca que la animación ya se ha iniciado
      });
    }
  }, [progress, onAnimationComplete, animationStarted]);

  const animatedLineStyle = {
    left: '-50%',
    height: '100%',
    width: progress.interpolate({
      inputRange: [0, 1],
      outputRange: ['0%', '150%'],
    }),
    backgroundColor: 'blue', // Color de la barra
    borderRadius: 20,
  };

  return (
    <View style={styles.loaderLine}>
      <Animated.View style={[styles.loaderBar, animatedLineStyle]} />
    </View>
  );
};

const styles = StyleSheet.create({
  loaderLine: {
    width: '100%',
    height: 3,
    position: 'relative',
    overflow: 'hidden',
    backgroundColor: '#ddd', // Color de fondo de la barra
    marginVertical: 100,
    borderRadius: 20,
  },
  loaderBar: {
    position: 'absolute',
    borderRadius: 20,
  },
});
