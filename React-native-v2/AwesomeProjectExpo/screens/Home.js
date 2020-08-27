import React, { useCallback, useEffect, useState } from 'react';
import { Text, TouchableOpacity, FlatList } from 'react-native';
import PalettePreview from '../components/PalettePreview';
import { set } from 'react-native-reanimated';

const Home = ({ navigation }) => {
  const [palettes, setPalettes] = useState([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchPalettes = useCallback(async () => {
    const result = await fetch(
      'https://color-palette-api.kadikraman.now.sh/palettes',
    );

    if (result.ok) {
      const colors = await result.json();
      setPalettes(colors);
    }
  }, []);

  const refreshFetchPalette = useCallback(async () => {
    setIsRefreshing(true);
    await fetchPalettes();
    setIsRefreshing(false);
  }, []);

  useEffect(() => {
    fetchPalettes();
  }, []);

  return (
    <FlatList
      data={palettes}
      keyExtractor={(item) => item.paletteName}
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate('ColorPalette', item)}
        >
          <Text>{item.paletteName}</Text>
          <PalettePreview horizontal colors={item.colors.slice(0, 5)} />
        </TouchableOpacity>
      )}
      refreshing={isRefreshing}
      onRefresh={refreshFetchPalette}
    />
  );
};

export default Home;
