import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function ManualScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Manual</Text>

      <Text style={styles.section}>Best Practices</Text>

      <View style={styles.card}>
        <Text style={styles.item}>✔ Operate in open area with good airflow</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.item}>✔ Avoid overload conditions</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.item}>✔ Monitor battery temperature regularly</Text>
      </View>

      <Text style={styles.section}>Warnings</Text>

      <View style={[styles.card, styles.warning]}>
        <Text style={styles.warningText}>⚠ Do NOT short the battery terminals</Text>
      </View>

      <View style={[styles.card, styles.warning]}>
        <Text style={styles.warningText}>⚠ Do NOT touch the turbine while running</Text>
      </View>
    </ScrollView>
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
  section: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
    color: '#2E7D32',
  },
  card: {
    backgroundColor: '#FFFFFF',
    padding: 14,
    borderRadius: 12,
    marginBottom: 10,
  },
  item: {
    fontSize: 15,
    color: '#333',
  },
  warning: {
    backgroundColor: '#FFF3E0',
  },
  warningText: {
    color: '#E65100',
    fontWeight: '600',
  },
});
