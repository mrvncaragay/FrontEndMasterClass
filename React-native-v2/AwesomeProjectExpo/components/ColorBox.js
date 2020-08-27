import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ text, color }) => {
  const textColor =
    parseInt(color.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white';

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Text style={{ color: textColor }}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 5,
    minWidth: 40,
    height: 40,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
});

export default ColorBox;
