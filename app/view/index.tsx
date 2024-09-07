import React from 'react';
import { StyleSheet, FlatList, Text, View } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

// Data yang disediakan
const data = [
  { "id": "1", "name": "Google Pixel 6 Pro", "data": { "color": "Cloudy White", "capacity": "128 GB" } },
  { "id": "2", "name": "Apple iPhone 12 Mini, 256GB, Blue", "data": null },
  { "id": "3", "name": "Apple iPhone 12 Pro Max", "data": { "color": "Cloudy White", "capacity GB": 512 } },
  { "id": "4", "name": "Apple iPhone 11, 64GB", "data": { "price": 389.99, "color": "Purple" } },
  { "id": "5", "name": "Samsung Galaxy Z Fold2", "data": { "price": 689.99, "color": "Brown" } },
  { "id": "6", "name": "Apple AirPods", "data": { "generation": "3rd", "price": 120 } },
  { "id": "7", "name": "Apple MacBook Pro 16", "data": { "year": 2019, "price": 1849.99, "CPU model": "Intel Core i9", "Hard disk size": "1 TB" } },
  { "id": "8", "name": "Apple Watch Series 8", "data": { "Strap Colour": "Elderberry", "Case Size": "41mm" } },
  { "id": "9", "name": "Beats Studio3 Wireless", "data": { "Color": "Red", "Description": "High-performance wireless noise cancelling headphones" } },
  { "id": "10", "name": "Apple iPad Mini 5th Gen", "data": { "Capacity": "64 GB", "Screen size": 7.9 } },
  { "id": "11", "name": "Apple iPad Mini 5th Gen", "data": { "Capacity": "254 GB", "Screen size": 7.9 } },
  { "id": "12", "name": "Apple iPad Air", "data": { "Generation": "4th", "Price": "419.99", "Capacity": "64 GB" } },
  { "id": "13", "name": "Apple iPad Air", "data": { "Generation": "4th", "Price": "519.99", "Capacity": "256 GB" } }
];

type Props = {
  items: typeof data; // Tipe props mencakup 'items' dengan tipe data yang diberikan
};

export default function HomeScreenView({ items }: Props) {
  const renderItem = ({ item }: { item: { name: string, data: any } }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemName}>{item.name}</Text>
      {item.data ? (
        <View style={styles.detailsContainer}>
          {Object.entries(item.data).map(([key, value], index) => (
            <View key={index} style={styles.detailRow}>
              <Text style={styles.detailKey}>{key}:</Text>
              <Text style={styles.detailValue}>{String(value)}</Text>
            </View>
          ))}
        </View>
      ) : (
        <Text style={styles.noDetails}>No details available</Text>
      )}
    </View>
  );

  return (
    <ThemedView style={styles.container}>
      <View style={styles.headerContainer}>
        <ThemedText type="title" style={styles.title}>Binus MVC!</ThemedText>
        <Text style={styles.subtitle}>Ikhda</Text>
      </View>
      <FlatList
        data={items}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    backgroundColor: '#4CAF50', // Latar belakang hijau
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '300',
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 8,
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    marginBottom: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 1,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  detailsContainer: {
    marginTop: 8,
  },
  detailRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  detailKey: {
    fontWeight: 'bold',
    marginRight: 8,
  },
  detailValue: {
    color: '#555',
  },
  noDetails: {
    fontStyle: 'italic',
    color: '#888',
  },
});
