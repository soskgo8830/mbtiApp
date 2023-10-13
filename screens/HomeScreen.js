import React from 'react';
import { StyleSheet, View, ScrollView, Image } from 'react-native';
import { Text, Button } from '@rneui/themed';

import mainImg from '../assets/img/main_img.png';

function HomeScreen({ navigation }) {
  return (
    <View>
      <ScrollView>
        <View style={styles.margin30}>
          <Text style={styles.mainTitleStyle}>MBTI World</Text>
          <Image source={mainImg} style={styles.mainImageStyle} />
          <View style={styles.marginTop20}>
            <Button
              title='MBTI란?'
              onPress={() => navigation.navigate('Justice')}
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              buttonStyle={{
                backgroundColor: '#618264',
                borderRadius: 5,
              }}
              containerStyle={{
                height: 50,
                marginVertical: 5,
              }}
            />
            <Button
              title='MBTI 각 지표별 특징'
              onPress={() => navigation.navigate('Characteristic')}
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              buttonStyle={{
                backgroundColor: '#618264',
                borderRadius: 5,
              }}
              containerStyle={{
                height: 50,
                marginVertical: 5,
              }}
            />
            <Button
              title='MBTI 궁합'
              onPress={() => navigation.navigate('Compatibility')}
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              buttonStyle={{
                backgroundColor: '#618264',
                borderRadius: 5,
              }}
              containerStyle={{
                height: 50,
                marginVertical: 5,
              }}
            />
            <Button
              title='MBTI 성격 유형'
              onPress={() => navigation.navigate('Personality')}
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              buttonStyle={{
                backgroundColor: '#618264',
                borderRadius: 5,
              }}
              containerStyle={{
                height: 50,
                marginVertical: 5,
              }}
            />
            <Button
              title='MBTI 직업 추천'
              onPress={() => navigation.navigate('Job')}
              titleStyle={{ fontWeight: 'bold', fontSize: 18 }}
              buttonStyle={{
                backgroundColor: '#618264',
                borderRadius: 5,
              }}
              containerStyle={{
                height: 50,
                marginVertical: 5,
              }}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  margin30: {
    margin: 30,
  },
  marginTop20: {
    marginTop: 20,
  },
  mainTitleStyle: {
    fontSize: 25,
    fontWeight: 'bold',
    padding: 30,
    textAlign: 'center',
    color: '#618264',
  },
  mainImageStyle: {
    height: 300,
    width: 'auto',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#618264',
  },
});
