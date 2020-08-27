import React from 'react';
import { View } from 'react-native';
import PalettePreview from '../components/PalettePreview';

const ColorPalette = ({ route }) => {
  const { colors } = route.params;
  return (
    <View>
      <PalettePreview showColorName colors={colors} />
    </View>
  );
};

export default ColorPalette;
