import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import LabeledInput from '../components/LabeledInput';

const MainScreen = ({ navigation }) => {

    const [baseCurrency, setBaseCurrency] = useState('CAD');
  const [destCurrency, setDestCurrency] = useState('USD');
  const [amount, setAmount] = useState('1');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);




     return (
     <View style={styles.container}>
      <View style={styles.headerRow}>
        <Text style={styles.title}>Currency Converter</Text>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text style={styles.linkText}>About</Text>
        </TouchableOpacity>
      </View>
        <LabeledInput
        label="Base Currency Code"
        value={baseCurrency}
        onChangeText={(text) => setBaseCurrency(text.toUpperCase())}
        placeholder="e.g. CAD"
        maxLength={3}
        autoCapitalize="characters"
      />

      <LabeledInput
        label="Destination Currency Code"
        value={destCurrency}
        onChangeText={(text) => setDestCurrency(text.toUpperCase())}
        placeholder="e.g. USD"
        maxLength={3}
        autoCapitalize="characters"
      />

      <LabeledInput
        label="Amount"
        value={amount}
        onChangeText={setAmount}
        placeholder="e.g. 1"
        keyboardType="numeric"
      />

      {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}

      <TouchableOpacity
        style={[styles.button, loading && styles.buttonDisabled]}
        onPress={alert("press button")}
        disabled={loading}
      >
        {loading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.buttonText}>Convert</Text>
        )}
      </TouchableOpacity>

      {exchangeRate != null && convertedAmount != null && !loading && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>
            Exchange Rate ({baseCurrency} → {destCurrency}):{' '}
            {exchangeRate.toFixed(4)}
          </Text>
          <Text style={styles.resultText}>
            Converted Amount: {convertedAmount.toFixed(4)} {destCurrency}
          </Text>
        </View>
      )}
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
  button: {
    marginTop: 12,
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    borderRadius: 6,
    alignItems: 'center',
  },
  buttonDisabled: {
    opacity: 0.6,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  errorText: {
    color: 'red',
    marginTop: 8,
  },
  resultBox: {
    marginTop: 20,
    padding: 12,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 6,
    backgroundColor: '#f9f9f9',
  },
  resultText: {
    fontSize: 16,
    marginBottom: 4,
  },
});
export default MainScreen;