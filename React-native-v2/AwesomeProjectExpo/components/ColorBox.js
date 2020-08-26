import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ text, color }) => {
  const textColor =
    parseInt(color.replace('#', ''), 16) > 0xffffff / 1.2 ? 'black' : 'white';

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={{ color: textColor }}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 40,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ColorBox;
