import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

function PersonalityDtailScreen({ navigation, route }) {
  const detailMbti = route.params.item[0];
  const imgMap = {
    ENFJ: require(`../assets/img/enfj.png`),
    ENFP: require(`../assets/img/enfp.png`),
    ENTJ: require(`../assets/img/entj.png`),
    ENTP: require(`../assets/img/entp.png`),
    ESFJ: require(`../assets/img/esfj.png`),
    ESFP: require(`../assets/img/esfp.png`),
    ESTJ: require(`../assets/img/estj.png`),
    ESTP: require(`../assets/img/estp.png`),
    INFJ: require(`../assets/img/infj.png`),
    INFP: require(`../assets/img/infp.png`),
    INTJ: require(`../assets/img/intj.png`),
    INTP: require(`../assets/img/intp.png`),
    ISFJ: require(`../assets/img/isfj.png`),
    ISFP: require(`../assets/img/isfp.png`),
    ISTJ: require(`../assets/img/istj.png`),
    ISTP: require(`../assets/img/istp.png`),
  };

  const imgSrc = imgMap[detailMbti.name];

  return (
    <View style={styles.container}>
      <View style={styles.section1}>
        <Text style={styles.name}>{detailMbti.name}</Text>
        <Text style={styles.description}>( {detailMbti.description} )</Text>
      </View>
      <View style={styles.section2}>
        <Image source={imgSrc} style={styles.imgContent} />
      </View>
      <View style={styles.section3}>
        <Text style={styles.rr}>내용</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'white',
  },
  section1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section2: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  section3: {
    flex: 3,
    backgroundColor: '#618264',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 40,
    alignItems: 'center',
  },
  imgContent: {
    width: '100%',
    height: 220,
    resizeMode: 'contain',
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
  rr: {
    color: '#fff',
  },
});

export default PersonalityDtailScreen;
