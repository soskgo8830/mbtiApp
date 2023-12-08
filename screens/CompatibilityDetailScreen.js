import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

function CompatibilityDetailScreen({ navigation, route }) {
  const { relationsValue, meMbtiNm, compareMbtiNm } = route.params.item;
  console.log(relationsValue, meMbtiNm, compareMbtiNm);
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          나({meMbtiNm})와 {compareMbtiNm} 궁합
        </Text>
      </View>
      <View style={styles.relationsHeartContainer}>
        <Icon
          name='heart'
          size={45}
          color='#B31312'
          style={styles.heartStyle}
        />
        <Icon
          name='heart'
          size={45}
          color='#B31312'
          style={styles.heartStyle}
        />
        <Icon
          name='hearto'
          size={45}
          color='#B31312'
          style={styles.heartStyle}
        />
        <Icon
          name='hearto'
          size={45}
          color='#B31312'
          style={styles.heartStyle}
        />
        <Icon
          name='hearto'
          size={45}
          color='#B31312'
          style={styles.heartStyle}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A9B388',
    flex: 1,
  },
  headerContainer: {
    marginTop: 25,
    alignItems: 'center',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  relationsHeartContainer: {
    justifyContent: 'center',
    flexDirection: 'row',
    margin: 20,
  },
  heartStyle: {
    margin: 10,
  },
});

export default CompatibilityDetailScreen;
