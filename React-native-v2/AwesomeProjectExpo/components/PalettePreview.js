import React from 'react';
import { FlatList } from 'react-native';
import ColorBox from './ColorBox';

const PalettePreview = ({ colors, horizontal, showColorName }) => {
  return (
    <FlatList
      data={colors}
      keyExtractor={(item) => item.colorName}
      horizontal={horizontal ? true : false}
      renderItem={({ item }) => (
        <ColorBox
          text={showColorName ? item.colorName : ''}
          color={item.hexCode}
        />
      )}
    />
  );
};

export default PalettePreview;
