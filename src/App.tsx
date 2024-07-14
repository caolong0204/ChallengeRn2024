import React from 'react';
import { SafeAreaView } from 'react-native';
import ReviewSummarySections from './components/BusinessPlan';

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ReviewSummarySections />
    </SafeAreaView>
  );
}
