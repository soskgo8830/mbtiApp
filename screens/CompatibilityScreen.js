import React, { useState } from 'react';
import { StyleSheet, View, Alert } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Button } from '@rneui/themed';

const mbtiJsonData = require('../json/mbti.json'); // json파일 호출

export default function CompatibilityScreen() {
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

  const [isResult, setIsResult] = useState(false);
  const [mbti1, setMbti1] = useState(0);
  const [mbti2, setMbti2] = useState(0);
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
      Alert.alert('!', '궁합을 확인할 MBTI를 선택해주세요.', [{ text: '닫기' }]);
      console.log('선택안함 선택하셈');
    } else {
      const relationsValue = findRelationsValue(mbti1, mbti2);
      console.log('궁합 지표 : ', relationsValue);
      console.log('상대방 MBTI : ', compareMbtiNm);
      setIsResult(true);
    }
  };

  return (
    <View style={styles.container}>
      {!isResult ? (
        <View>
          <SelectDropdown
            data={mbti}
            onSelect={(selectedItem, index) => {
              setMbti1(index + 1);
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
            color='#B99470'
            containerStyle={styles.resultButtonStyle}
          />
        </View>
      ) : (
        <View></View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A9B388',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dropdownButton: {
    backgroundColor: '#FEFAE0',
    borderRadius: 5,
    width: '90%',
    margin: 10,
    elevation: 5,
  },

  resultButtonStyle: {
    height: 40,
    marginHorizontal: 100,
    marginVertical: 10,
    elevation: 6,
  },
});
