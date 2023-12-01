import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import mainImage1 from '../assets/img/mainImage1.png';

function JusticeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.imageSection}>
        <Image source={mainImage1} style={styles.image} />
      </View>
      <ScrollView style={styles.justiceContainer}>
        <View style={styles.card}>
          <Text>
            MBTI(Myers-Briggs Type Indicator)는 개인의 성격 유형을 분류하는
            도구로, 개인의 성향과 특징을 파악하는 데 사용됩니다.
          </Text>
          <Text style={styles.textMarginTop8}>
            이것은 성격 심리학의 이론 중 하나로, Carl Jung의 심리 유형 이론을
            기반으로 만들어졌습니다.
          </Text>
          <Text style={styles.textMarginTop20}>
            MBTI는 4개의 기본적인 차원을 바탕으로 16가지 성격 유형을 정의합니다
          </Text>
          <Text style={styles.textMarginTop8}>
            - 타인과의 관계에 대한 선호도 (Extraversion (E) 또는 Introversion
            (I))
          </Text>
          <Text style={styles.textMarginTop8}>
            - 정보 수집 방식 (Sensing (S) 또는 Intuition (N))
          </Text>
          <Text style={styles.textMarginTop8}>
            - 결정을 내리는 방식 (Thinking (T) 또는 Feeling (F))
          </Text>
          <Text style={styles.textMarginTop8}>
            - 주변 세계에 대한 태도 (Judging (J) 또는 Perceiving (P))
          </Text>
          <Text style={styles.textMarginTop20}>
            이것은 각각의 차원이 각각 두 가지 유형으로 분류되며, 각 유형은
            개인의 성격과 행동 패턴에 대한 정보를 제공합니다.
          </Text>
          <Text style={styles.textMarginTop20}>
            이것은 각각의 차원이 각각 두 가지 유형으로 분류되며, 각 유형은
            개인의 성격과 행동 패턴에 대한 정보를 제공합니다.
          </Text>
          <Text style={styles.textMarginTop20}>
            이것은 각각의 차원이 각각 두 가지 유형으로 분류되며, 각 유형은
            개인의 성격과 행동 패턴에 대한 정보를 제공합니다.
          </Text>
          <Text style={styles.textMarginTop20}>
            이것은 각각의 차원이 각각 두 가지 유형으로 분류되며, 각 유형은
            개인의 성격과 행동 패턴에 대한 정보를 제공합니다.
          </Text>
          <Text style={styles.textMarginTop20}>
            이것은 각각의 차원이 각각 두 가지 유형으로 분류되며, 각 유형은
            개인의 성격과 행동 패턴에 대한 정보를 제공합니다.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A9B388',
    height: '100%',
  },
  justiceContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
  },
  imageSection: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    padding: 100,
    resizeMode: 'contain',
  },
  textMarginTop8: {
    marginTop: 8,
  },
  textMarginTop20: {
    marginTop: 20,
  },
});

export default JusticeScreen;
