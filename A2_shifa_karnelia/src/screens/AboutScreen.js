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
    </View>
     );

     
}
const styles = StyleSheet.create({
  container: {
            flex: 1,
            padding: 16,
            backgroundColor: '#fff',
        },
     header: {
    fontSize: 28,
    fontWeight: '800',
    marginBottom: 20,
    textAlign: 'center',
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
});

export default AboutScreen;
