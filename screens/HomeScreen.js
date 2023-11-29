import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import { Text } from '@rneui/themed';

import mainImage4 from '../assets/img/mainImage4.jpg';
import mainImage1 from '../assets/img/mainImage1.png';
import mainImage2 from '../assets/img/mainImage2.png';
import mainImage3 from '../assets/img/mainImage3.png';

function HomeScreen({ navigation }) {
  const handlePress = (goScreenName) => {
    navigation.navigate(goScreenName);
  };

  const cardData = [
    {
      title: 'MBTI란?',
      description: '자세한 내용을 확인할 수 있습니다.',
      image: mainImage1,
      screenName: 'Justice',
    },
    {
      title: 'MBTI 각 지표별 특징',
      description: '각 지표별 특징을 확인할 수 있습니다.',
      image: mainImage2,
      screenName: 'Characteristic',
    },
    {
      title: 'MBTI 궁합',
      description: '궁합을 확인할 수 있습니다.',
      image: mainImage3,
      screenName: 'Compatibility',
    },
    {
      title: 'MBTI 특징',
      description: '특징을 확인할 수 있습니다.',
      image: mainImage4,
      screenName: 'Personality',
    },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.section1}>{/* Your section 1 content */}</View>
      <View style={styles.section2}>
        <ScrollView horizontal contentContainerStyle={styles.scrollContainer}>
          {cardData.map((card, index) => (
            <TouchableWithoutFeedback
              key={index}
              onPress={() => handlePress(card.screenName)}
            >
              <View style={styles.mainCardSection}>
                <View style={[styles.card, styles.cardBottom]}>
                  <Image source={card.image} style={styles.imageStyle} />
                </View>
                <View style={[styles.card, styles.cardTop]}>
                  <View style={styles.mainCardTextSection}>
                    <Text style={styles.mainText}>{card.title}</Text>
                    <Text style={styles.subText}>{card.description}</Text>
                  </View>
                </View>
              </View>
            </TouchableWithoutFeedback>
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#A9B388',
  },
  section1: {
    flex: 2,
    justifyContent: 'center',
    padding: 30,
    marginTop: 80,
  },
  section2: {
    flex: 2,
  },
  scrollContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  },
  mainCardSection: {
    width: 250,
    marginRight: 20,
  },
  card: {
    width: '80%',
    height: 180,
    borderRadius: 10,
    overflow: 'hidden',
    elevation: 5,
    position: 'relative',
  },
  cardTop: {
    backgroundColor: '#FEFAE0',
    bottom: 50,
    zIndex: 1,
    width: '100%',
    height: 200,
  },
  cardBottom: {
    zIndex: 2,
    top: 40,
  },
  imageStyle: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  subText: {
    fontSize: 14,
    color: '#666',
  },
  mainCardTextSection: {
    position: 'absolute',
    bottom: 0,
    paddingLeft: 40,
    paddingRight: 40,
    paddingBottom: 30,
  },
});
