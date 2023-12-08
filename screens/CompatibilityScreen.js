import React, { useState } from 'react';
import { StyleSheet, View, Alert, Image, ScrollView } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Button } from '@rneui/themed';
import mainImage3 from '../assets/img/mainImage3.png';

const mbtiJsonData = require('../json/mbti.json'); // json파일 호출

export default function CompatibilityScreen({ navigation }) {
  const mbti = [
    // 엠비티아이 배열
    'INFP',
    'ENFP',
    'INFJ',
    'ENFJ',
    'INTJ',
    'ENTJ',
    'INTP',
    'ENTP',
    'ISFP',
    'ESFP',
    'ISTP',
    'ESTP',
    'ISFJ',
    'ESFJ',
    'ISTJ',
    'ESTJ',
  ];

  const [mbti1, setMbti1] = useState(0);
  const [mbti2, setMbti2] = useState(0);
  const [meMbtiNm, setMeMbtiNm] = useState('');
  const [compareMbtiNm, setCompareMbtiNm] = useState('');

  function findRelationsValue(key, compareMbtiKey) {
    // 궁합 지표를 찾는 함수
    const mbtiData = mbtiJsonData.find((item) => item.key === key);

    if (mbtiData) {
      const combo = mbtiData.compatibility.find(
        (comboItem) => comboItem.compareMbtiKey === compareMbtiKey
      );

      if (combo) {
        return combo.relationsValue;
      }
    }
    return null;
  }

  const onChheckResult = () => {
    if (mbti1 === 0 || mbti2 === 0) {
      Alert.alert('!', '궁합을 확인할 MBTI를 선택해주세요.', [
        { text: '닫기' },
      ]);
    } else {
      const relationsValue = findRelationsValue(mbti1, mbti2);
      const detailData = {
        relationsValue,
        meMbtiNm,
        compareMbtiNm
      }
      navigation.navigate('CompatibilityDtail', { item: detailData });
    }
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageSection}>
          <Image source={mainImage3} style={styles.image} />
        </View>
        <ScrollView style={styles.compatibilityContainer}>
          <View style={styles.card}>
            <SelectDropdown
              data={mbti}
              onSelect={(selectedItem, index) => {
                setMbti1(index + 1);
                setMeMbtiNm(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdownButton}
              defaultButtonText='나의 MBTI를 선택해주세요'
            />

            <SelectDropdown
              data={mbti}
              onSelect={(selectedItem, index) => {
                setMbti2(index + 1);
                setCompareMbtiNm(selectedItem);
              }}
              buttonTextAfterSelection={(selectedItem, index) => {
                return selectedItem;
              }}
              rowTextForSelection={(item, index) => {
                return item;
              }}
              buttonStyle={styles.dropdownButton}
              defaultButtonText='상대방의 MBTI를 선택해주세요'
            />

            <Button
              onPress={onChheckResult}
              title='궁합보기'
              color='#5F6F52'
              containerStyle={styles.resultButtonStyle}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9B388',
  },
  compatibilityContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  dropdownButton: {
    backgroundColor: '#FEFAE0',
    borderRadius: 5,
    width: '100%',
    marginBottom: 20,
    elevation: 5,
  },
  resultButtonStyle: {
    height: 40,
    marginHorizontal: 100,
    marginVertical: 10,
    elevation: 6,
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
  card: {
    backgroundColor: '#fff',
    borderRadius: 8,
    elevation: 5,
    marginLeft: 20,
    marginRight: 20,
    padding: 20,
  },
});
