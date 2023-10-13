import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { Button } from '@rneui/themed';

const mbtiJsonData = require('../json/mbti.json'); // 이전에 내가작성한 json파일 호출

export default function CompatibilityScreen() {
  const bmti = [
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

  function findRelationsValue(key, compareMbtiKey) {
    // 궁합 지표를 찾는 함수
    const mbtiData = mbtiJsonData.find((item) => item.key === key);

    console.log(mbtiData);

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
    console.log('비교할 bmti key : ' + mbti1 + ' , ' + mbti2);
    const relationsValue = findRelationsValue(mbti1, mbti2);

    console.log('궁합 지표 : ' + relationsValue);
  };

  return (
    <View style={styles.container}>
      <View>
        <SelectDropdown
          data={bmti}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setMbti1(index + 1);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>

      <View>
        <SelectDropdown
          data={bmti}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
            setMbti2(index + 1);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
      </View>

      <Button
        onPress={onChheckResult}
        title='궁합보기'
        containerStyle={{
          height: 40,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
      />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
