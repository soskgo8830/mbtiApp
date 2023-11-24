import React , { useState }from 'react';
import { View, ScrollView, StyleSheet ,TextInput } from 'react-native';
import ImageCard from '../components/ImageCard';

function PersonalityScreen({ navigation }) {
  const [search, setSearch] = useState('');
  const mbtiPersonal = [
    { name: 'INFP', description:'잔다르크형', imgSrc: require('../assets/img/infp.png') },
    { name: 'ENFP', description:'스파크형', imgSrc: require('../assets/img/enfp.png') },
    { name: 'INFJ', description:'예언자형', imgSrc: require('../assets/img/infj.png') },
    { name: 'ENFJ', description:'언변능숙형', imgSrc: require('../assets/img/enfj.png') },
    { name: 'INTJ', description:'과학자형', imgSrc: require('../assets/img/intj.png') },
    { name: 'ENTJ', description:'지도자형', imgSrc: require('../assets/img/entj.png') },
    { name: 'INTP', description:'아이디어 뱅크형', imgSrc: require('../assets/img/intp.png') },
    { name: 'ENTP', description:'발명가형', imgSrc: require('../assets/img/entp.png') },
    { name: 'ISFP', description:'성인군자형', imgSrc: require('../assets/img/isfp.png') },
    { name: 'ESFP', description:'사교적인유형', imgSrc: require('../assets/img/esfp.png') },
    { name: 'ISTP', description:'백과사전형', imgSrc: require('../assets/img/istp.png') },
    { name: 'ESTP', description:'수완좋은 활동가형', imgSrc: require('../assets/img/estp.png') },
    { name: 'ISFJ', description:'임금 뒷편의 권력형', imgSrc: require('../assets/img/isfj.png') },
    { name: 'ESFJ', description:'친선도모형', imgSrc: require('../assets/img/esfj.png') },
    { name: 'ISTJ', description:'세상의 소금형', imgSrc: require('../assets/img/istj.png') },
    { name: 'ESTJ', description:'사업가형', imgSrc: require('../assets/img/estj.png') },
  ];

  const onChangeSearch = (value) =>{
    setSearch(setSearch)
  }

  return (
    <View>
      <View>
      <TextInput
        style={styles.input}
        onChangeText={onChangeSearch}
        value={search}
      />
      </View>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.row}>
          {mbtiPersonal.map((value, index) => {
            return (
              <ImageCard
                title={value.name}
                description={value.description}
                imageSource={value.imgSrc}
              ></ImageCard>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow:1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    padding: 10,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
  },
  input: {
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 3,
    margin: 10,
    padding: 10
  },
});

export default PersonalityScreen;
