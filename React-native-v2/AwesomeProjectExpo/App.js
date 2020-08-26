import React from 'react';
import { View, Text, SafeAreaView, StyleSheet } from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View>
        <View style={[styles.container, styles.cyan]}>
          <Text>Cyan</Text>
        </View>

        <View style={[styles.container, styles.blue]}>
          <Text>Blue</Text>
        </View>

        <View style={[styles.container, styles.magenta]}>
          <Text>Magenta</Text>
        </View>

        <View style={[styles.container, styles.orange]}>
          <Text>Orange</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cyan: {
    backgroundColor: '#2aa198',
  },

  blue: {
    backgroundColor: '#268bd2',
  },

  magenta: {
    backgroundColor: '#d33682',
  },

  orange: {
    backgroundColor: '#cb4b16',
  },

  container: {
    height: 40,
    marginVertical: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  safeArea: {
    flex: 1,
  },
});

export default App;
