import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function SupportScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Support</Text>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Report an Issue</Text>
        <Text style={styles.cardDesc}>Let us know if something went wrong</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Ask a Question</Text>
        <Text style={styles.cardDesc}>Get help from our support team</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>Upload Logs</Text>
        <Text style={styles.cardDesc}>Send system logs for diagnosis</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card}>
        <Text style={styles.cardTitle}>View Ticket Status</Text>
        <Text style={styles.cardDesc}>Track your support requests</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FAF7',
    padding: 16,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2E7D32',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2E7D32',
  },
  cardDesc: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
});
