import React from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

const Marketing = () => {
  return (
    <ScrollView>
      <View style={{ height: 30 }} />
      <View className="flex items-center justify-center min-h-screen bg-gray-100">
        <View className="container mx-auto p-4">
          <View className="bg-blue-500 p-4 w-full rounded-full md:rounded-none">
            <Text className="text-2xl font-bold text-center  text-white">
              Welcome to iPhone Advertising
            </Text>
          </View>
          <View className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            <View className="bg-white rounded-lg shadow-md p-4">
              <Text className="text-3xl font-bold mb-4 text-center">
                iPhone 13 Pro
              </Text>
              <Text className="text-gray-700 text-center mb-4">
                Experience the pinnacle with iPhone 13 Pro. Super Retina XDR
                display, A15 Bionic chip, and professional camera system.
              </Text>
              <View className="flex justify-center space-x-4">
                <TouchableOpacity className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  <Text>Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-green-500 hover:bg-green-700  font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hidden md:inline-block">
                  <Text className="text-white">Add To Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="bg-white rounded-lg shadow-md p-4">
              <Text className="text-3xl font-bold mb-4 text-center">
                iPhone 13 sdfsdfdsfsdf
              </Text>
              <Text className="text-gray-700 text-center mb-4">
                Experience the pinnasfsdfsdfcle with iPhone 13 Pro. Super Retina XDR
                display, A15 Bionic chip, and professional camera system.
              </Text>
              <View className="flex justify-center space-x-4">
                <View className="flex justify-center">
                  <TouchableOpacity className="bg-blue-500 hover:bg-blue-700 rounded self-center">
                    <Text className="text-white font-bold px-4 py-2">Buy</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity className="bg-blue-500 hover:bg-blue-700 rounded self-center hidden md:inline-block">
                  <Text className="text-white font-bold px-4 py-2">
                    Add To Cart
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="bg-white rounded-lg shadow-md p-4">
              <Text className="text-3xl font-bold mb-4 text-center">
                iPhone 13 Pro Max
              </Text>
              <Text className="text-gray-700 text-center mb-4">
                Experience the pinnacle with iPhone 13 Pro. Super Retina XDR
                display, A15 Bionic chip, and professional camera system.
              </Text>
              <View className="flex justify-center space-x-4">
                <Text className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Buy
                </Text>
                <TouchableOpacity className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hidden md:inline-block">
                  <Text>Add To Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="bg-white rounded-lg shadow-md p-4">
              <Text className="text-3xl font-bold mb-4 text-center">
                iPhone 12
              </Text>
              <Text className="text-gray-700 text-center mb-4">
                Experience the pinnacle with iPhone 12. Super Retina XDR
                display, A14 Bionic chip, and professional camera system.
              </Text>
              <View className="flex justify-center space-x-4">
                <TouchableOpacity className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  <Text>Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hidden md:inline-block">
                  <Text>Add To Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="bg-white rounded-lg shadow-md p-4">
              <Text className="text-3xl font-bold mb-4 text-center">
                iPhone 12
              </Text>
              <Text className="text-gray-700 text-center mb-4">
                Experience the pinnacle with iPhone 12. Super Retina XDR
                display, A14 Bionic chip, and professional camera system.
              </Text>
              <View className="flex justify-center space-x-4">
                <TouchableOpacity className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  <Text>Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hidden md:inline-block">
                  <Text>Add To Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View className="bg-white rounded-lg shadow-md p-4">
              <Text className="text-3xl font-bold mb-4 text-center">
                iPhone 12
              </Text>
              <Text className="text-gray-700 text-center mb-4">
                Experience the pinnacle with iPhone 12. Super Retina XDR
                display, A14 Bionic chip, and professional camera system.
              </Text>
              <View className="flex justify-center space-x-4">
                <TouchableOpacity className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  <Text>Buy</Text>
                </TouchableOpacity>
                <TouchableOpacity className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hidden md:inline-block">
                  <Text>Add To Cart</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default Marketing;
