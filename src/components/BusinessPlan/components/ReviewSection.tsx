/* eslint-disable react-native/no-inline-styles */
// import { ChevronUpIcon, PencilSquareIcon } from '@heroicons/react/20/solid';
import { ChevronUpIcon, PencilSquareIcon } from 'react-native-heroicons/mini';
import clsx from 'clsx';
import React, { ReactNode, useState } from 'react';
import { Text, View } from 'react-native';
import { TFButton } from 'src/components/TFButton';

type Props = {
  title: string;
  children?: ReactNode;
};

export const ReviewSection: React.FC<Props> = ({ title, children }) => {
  const hasViewedUser = true;
  const user = { coachEditView: false };
  const [sectionOpen, setSectionOpen] = useState(true);
  const toggleSectionOpen = () => {
    setSectionOpen(!sectionOpen);
  };

  return (
    <View>
      <View style={{ height: 1, width: '100%', backgroundColor: '#E0E0E0' }} />
      <View
        className={clsx(
          'flex items-center justify-between pt-4 transition-all duration-300 sm:pt-6',
          sectionOpen ? 'pb-4 sm:pb-6' : 'pb-10 sm:pb-16',
        )}>
        <View className="flex flex-col">
          <Text className="text-2xl font-bold leading-7 sm:text-3xl sm:leading-9">
            {title}
          </Text>
        </View>

        <View className="flex items-center space-x-4 print:hidden">
          {!hasViewedUser ||
            (user?.coachEditView && (
              <View className="hidden sm:block">
                <TFButton
                  size="BASE"
                  buttonStyle="Ghost"
                  iconPosition="Right"
                  onPress={() => {}}
                  icon={<PencilSquareIcon />}>
                  Edit
                </TFButton>
              </View>
            ))}

          <TFButton
            className={clsx(
              'transition-transform duration-300',
              sectionOpen ? 'rotate-0' : '-rotate-180',
            )}
            size="BASE"
            icon={<ChevronUpIcon />}
            shape="Circle"
            buttonStyle="Ghost"
            onPress={toggleSectionOpen}
          />
        </View>
      </View>
      <View className={clsx(sectionOpen ? 'block' : 'hidden print:block')}>
        {!hasViewedUser && (
          <View className="pb-10 sm:hidden print:hidden">
            <TFButton
              onPress={() => {}}
              size="BASE"
              buttonStyle="Ghost"
              icon={<PencilSquareIcon />}>
              Edit
            </TFButton>
          </View>
        )}
        {children}
      </View>
    </View>
  );
};
