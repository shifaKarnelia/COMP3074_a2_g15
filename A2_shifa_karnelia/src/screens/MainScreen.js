import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';

import LabeledInput from '../components/LabeledInput';

//personal key
const API_KEY = 'fca_live_oArHFRyRp3VirauoebhqQra148zwQvtpfw3GR7Rg';

const MainScreen = ({ navigation }) => {

    const [baseCurrency, setBaseCurrency] = useState('CAD');
  const [destCurrency, setDestCurrency] = useState('USD');
  const [amount, setAmount] = useState('1');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);


const validateInputs = () => {
    setErrorMsg('');

    const currencyRegex = /^[A-Z]{3}$/;

    if (!currencyRegex.test(baseCurrency)) {
      return 'Base currency must be a 3-letter uppercase ISO code (e.g., CAD).';
    }

    if (!currencyRegex.test(destCurrency)) {
      return 'Destination currency must be a 3-letter uppercase ISO code (e.g., USD).';
    }

    const amt = parseFloat(amount);
    if (isNaN(amt) || amt <= 0) {
      return 'Amount must be a positive number.';
    }

    return '';
  };

  const handleConvert = async () => {
    const validationError = validateInputs();
    if (validationError) {
      setErrorMsg(validationError);
      return;
    }

    setLoading(true);
    setErrorMsg('');
    setConvertedAmount(null);
    setExchangeRate(null);

    try {
      const url = `https://api.freecurrencyapi.com/v1/latest?apikey=${API_KEY}&base_currency=${baseCurrency}&currencies=${destCurrency}`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`Server error: ${response.status}`);
      }

      const data = await response.json();

      // Expected shape: { data: { "USD": 0.75, ... } }
      if (!data || !data.data || data.data[destCurrency] == null) {
        throw new Error('Exchange rate not found for the given currency.');
      }

      const rate = data.data[destCurrency];
      const amt = parseFloat(amount);
      const converted = amt * rate;

      setExchangeRate(rate);
      setConvertedAmount(converted);
    } catch (error) {
      const msg = error.message || '';
      if (msg.includes('Network request failed')) {
        setErrorMsg('Network error: please check your internet connection.');
      } else if (msg.toLowerCase().includes('apikey')) {
        setErrorMsg('Invalid API key: please verify your FreeCurrencyAPI key.');
      } else {
        setErrorMsg(msg || 'Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false);
    }
};

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
        onPress={handleConvert}
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