import React from 'react';
import { View, Text, StyleSheet} from 'react-native';
const AboutScreen = () => {
     return (
    <View style={styles.container} >
        <Text style={styles.header}>Group 15</Text>
      <Text style={styles.name}>Name:- shifa karnleia</Text>
      <Text style={styles.studentId}>Student ID: 101487402</Text>
      <Text style={styles.name}>Name:- sana karnleia</Text>
      <Text style={styles.studentId}>Student ID: 101487075</Text>
       <Text style={styles.header}>About This Application</Text>
      <Text style={styles.description}>
        This application converts an amount from one currency to another using
        live exchange rates from FreeCurrencyAPI. The user enters a base
        currency code, a destination currency code, and an amount. The app
        validates the inputs, sends a request to the API, handles potential
        errors such as invalid codes or network problems, and displays the
        exchange rate and converted amount when the request is successful.
      </Text>
    </View>
     );

     
}
const styles = StyleSheet.create({
  container: {
            flex: 1,
            padding: 16,
            backgroundColor: '#e6f7e9ff',
        },
     header: {
            fontSize: 28,
            fontWeight: '800',
            marginBottom: 20,
            textAlign: 'center',
             borderBottomWidth: 2,     
             borderBottomColor: '#000',
            paddingBottom: 8,         
        },
    name: {
            fontSize: 22,
            fontWeight: '700',
            marginBottom: 4,
        },
    studentId: {
            fontSize: 16,
            marginBottom: 16,
        },
    
    description: {
        fontSize: 15,
        lineHeight: 22,
    },
});

export default AboutScreen;
