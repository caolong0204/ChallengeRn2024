import * as React from 'react';
import { Text, View } from 'react-native';

const missionCard = (
  <View className="rounded-md bg-tf-surface-100 p-4 shadow-sm print:shadow-none">
    <Text className="hidden text-2xl font-medium leading-8 text-tf-color-600 sm:block">
      Mission
    </Text>
    <Text className="whitespace-pre-line text-base font-normal leading-6 text-tf-color-250">
      Demo Data, don't care about this contnet
    </Text>
  </View>
);

const Content = () => {
  return (
    <>
      <View className="hidden sm:block">
        <View className="pb-7">{missionCard}</View>
      </View>
      <View className="block sm:hidden">
        <View className="py-10">
          <Text className="pb-3 text-lg font-semibold leading-7">Mission</Text>
          <View>{missionCard}</View>
        </View>
      </View>
    </>
  );
};

export default Content;
