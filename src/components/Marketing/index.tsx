import React from 'react';
import {
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
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
  spacing: { height: 30 },
  mainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100%',
    backgroundColor: '#f3f4f6',
  },
  container: { padding: 16 },
  headerContainer: {
    backgroundColor: '#007bff',
    padding: 16,
    width: '100%',
    borderRadius: 9999,
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  productsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  productContainer: {
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    padding: 16,
    marginBottom: 16,
  },
  productTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
    textAlign: 'center',
  },
  productDescription: {
    color: '#4a5568',
    textAlign: 'center',
    marginBottom: 8,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 8,
  },
  buyButton: {
    backgroundColor: '#007bff',
    borderRadius: 8,
    padding: 10,
    paddingHorizontal: 20,
    marginHorizontal: 4,
  },
  addToCartButton: { backgroundColor: '#38a169' },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default Marketing;
