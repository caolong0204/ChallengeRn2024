import * as React from 'react';
import { View, StyleSheet } from 'react-native';
import { SectionKeys } from './const';
import Content from './components/content';
import { ReviewSection } from './components/ReviewSection';

type SectionTitlesMap = {
  [key in SectionKeys]: string;
};
const sectionTitlesMap: SectionTitlesMap = {
  [SectionKeys.Purpose]: 'Purpose',
  [SectionKeys.Motivations]: 'Motivations',
  [SectionKeys.UnitsAndGoals]: 'Units & Goals',
  [SectionKeys.Marketing]: 'Marketing & Lead-Generation',
  [SectionKeys.Operations]: 'Operations',
  [SectionKeys.Financial]: 'Financial',
  [SectionKeys.Swot]: 'SWOT',
  [SectionKeys.Onboarding]: 'Onboarding',
  [SectionKeys.ReviewSummary]: 'Review Summary',
};

const reviewSections = [
  {
    title: sectionTitlesMap[SectionKeys.Purpose],
    navLink: SectionKeys.Purpose,
    content: <Content />,
  },
  {
    title: sectionTitlesMap[SectionKeys.Motivations],
    navLink: SectionKeys.Motivations,
    content: <Content />,
  },
  {
    title: sectionTitlesMap[SectionKeys.UnitsAndGoals],
    navLink: SectionKeys.UnitsAndGoals,
    content: <Content />,
  },
  {
    title: sectionTitlesMap[SectionKeys.Marketing],
    navLink: SectionKeys.Marketing,
    content: <Content />,
  },
  {
    title: sectionTitlesMap[SectionKeys.Operations],
    navLink: SectionKeys.Operations,
    content: <Content />,
  },
  {
    title: sectionTitlesMap[SectionKeys.Financial],
    navLink: SectionKeys.Financial,
    content: <Content />,
  },
  {
    title: sectionTitlesMap[SectionKeys.Swot],
    navLink: SectionKeys.Swot,
    content: <Content />,
  },
];

const ReviewSummarySections = () => {
  return (
    <View style={styles.container}>
      <View>
        {reviewSections.map((section, index) => (
          <View
            key={section.title + index}
            className="print:break-inside-avoid-page">
            <ReviewSection key={index + section.title} title={section.title}>
              {section.content}
            </ReviewSection>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ReviewSummarySections;

const styles = StyleSheet.create({
  container: { flex: 1, paddingHorizontal: 20 },
});
