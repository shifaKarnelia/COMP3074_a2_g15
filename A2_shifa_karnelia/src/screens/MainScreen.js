import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

const MainScreen = ({ navigation }) => {




     return (
     <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Currency Converter</Text>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text style={styles.linkText}>About</Text>
        </TouchableOpacity>
      </View>
</View>
     )
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
  },
  linkText: {
    fontSize: 14,
    color: '#007AFF',
  },
});
export default MainScreen;