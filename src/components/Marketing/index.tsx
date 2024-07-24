import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const Marketing = () => {
  return (
    <ScrollView>
      <View style={styles.spacing} />
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Welcome to iPhone Advertising</Text>
          </View>
          <View style={styles.productsContainer}>
            {Array.from({ length: 5 }).map((_, index) => (
              <View key={index} style={styles.productContainer}>
                <Text style={styles.productTitle}>iPhone 13 Pro</Text>
                <Text style={styles.productDescription}>
                  Experience the pinnacle with iPhone 13 Pro. Super Retina XDR
                  display, A15 Bionic chip, and professional camera system.
                </Text>
                <View style={styles.buttonContainer}>
                  <TouchableOpacity style={styles.buyButton}>
                    <Text style={styles.buttonText}>Buy</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    style={[styles.buyButton, styles.addToCartButton]}>
                    <Text style={styles.buttonText}>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            ))}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  addToCartButton: { backgroundColor: '#38a169' },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' },
  buyButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    marginHorizontal: 4,
    padding: 10,
    paddingHorizontal: 20,
  },
  container: { padding: 16 },
  headerContainer: {
    backgroundColor: '#007bff',
    borderRadius: 9999,
    padding: 16,
    width: '100%',
  },
  headerText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  mainContainer: {
    alignItems: 'center',
    backgroundColor: '#f3f4f6',
    flex: 1,
    justifyContent: 'center',
    minHeight: '100%',
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 4,
    marginBottom: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
  },
  productDescription: {
    color: '#4a5568',
    marginBottom: 8,
    textAlign: 'center',
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  spacing: { height: 30 },
});

export default Marketing;
