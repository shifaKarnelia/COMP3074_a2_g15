// src/components/LabeledInput.js
import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

const LabeledInput = ({
  label,
  value,
  onChangeText,
  keyboardType = 'default',
  placeholder,
  maxLength,
  autoCapitalize = 'none',
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        placeholder={placeholder}
        maxLength={maxLength}
        autoCapitalize={autoCapitalize}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 12,
  },
  label: {
    fontSize: 14,
    marginBottom: 4,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    paddingVertical: 8,
    fontSize: 16,
  },
});

export default LabeledInput;
