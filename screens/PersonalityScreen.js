import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  FlatList,
  ActivityIndicator,
} from 'react-native';
import ImageCard from '../components/ImageCard';
import Icon from 'react-native-vector-icons/FontAwesome';

function PersonalityScreen({ navigation }) {
  const mbtiPersonal = [
    {
      key: 1,
      name: 'INFP',
      description: '잔다르크형',
      imgSrc: require('../assets/img/infp.png'),
    },
    {
      key: 2,
      name: 'ENFP',
      description: '스파크형',
      imgSrc: require('../assets/img/enfp.png'),
    },
    {
      key: 3,
      name: 'INFJ',
      description: '예언자형',
      imgSrc: require('../assets/img/infj.png'),
    },
    {
      key: 4,
      name: 'ENFJ',
      description: '언변능숙형',
      imgSrc: require('../assets/img/enfj.png'),
    },
    {
      key: 5,
      name: 'INTJ',
      description: '과학자형',
      imgSrc: require('../assets/img/intj.png'),
    },
    {
      key: 6,
      name: 'ENTJ',
      description: '지도자형',
      imgSrc: require('../assets/img/entj.png'),
    },
    {
      key: 7,
      name: 'INTP',
      description: '아이디어 뱅크형',
      imgSrc: require('../assets/img/intp.png'),
    },
    {
      key: 8,
      name: 'ENTP',
      description: '발명가형',
      imgSrc: require('../assets/img/entp.png'),
    },
    {
      key: 9,
      name: 'ISFP',
      description: '성인군자형',
      imgSrc: require('../assets/img/isfp.png'),
    },
    {
      key: 10,
      name: 'ESFP',
      description: '사교적인유형',
      imgSrc: require('../assets/img/esfp.png'),
    },
    {
      key: 11,
      name: 'ISTP',
      description: '백과사전형',
      imgSrc: require('../assets/img/istp.png'),
    },
    {
      key: 12,
      name: 'ESTP',
      description: '수완좋은 활동가형',
      imgSrc: require('../assets/img/estp.png'),
    },
    {
      key: 13,
      name: 'ISFJ',
      description: '임금 뒷편의 권력형',
      imgSrc: require('../assets/img/isfj.png'),
    },
    {
      key: 14,
      name: 'ESFJ',
      description: '친선도모형',
      imgSrc: require('../assets/img/esfj.png'),
    },
    {
      key: 15,
      name: 'ISTJ',
      description: '세상의 소금형',
      imgSrc: require('../assets/img/istj.png'),
    },
    {
      key: 16,
      name: 'ESTJ',
      description: '사업가형',
      imgSrc: require('../assets/img/estj.png'),
    },
  ];
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState(mbtiPersonal);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true); // 검색 시작 시 로딩 상태를 true로 설정
    const timer = setTimeout(() => {
      const filteredData = mbtiPersonal.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
      setSearchResults(filteredData);
      setLoading(false); // 검색 완료 시 로딩 상태를 false로 설정
    }, 500); // 딜레이 후 검색 결과 표시

    return () => clearTimeout(timer); // 타이머 정리
  }, [search]);

  const handleSearch = (text) => {
    setSearch(text);
  };

  const onPressCallback = (selectId) => {
    console.log(selectId);
    const selectMbti = mbtiPersonal.filter((item)=>item.key === selectId)
    console.log(selectMbti)
  };

  const renderItem = ({ item }) => (
    <ImageCard
      id={item.key}
      title={item.name}
      description={item.description}
      imageSource={item.imgSrc}
      onPressCallback={onPressCallback}
    ></ImageCard>
  );

  return (
    <View>
      <View style={styles.searchContainer}>
        <Icon
          name='search'
          size={24}
          color='#618264'
          style={styles.searchIcon}
        />
        <TextInput
          style={styles.searchInput}
          placeholder='Search...'
          onChangeText={(text) => handleSearch(text)}
          onSubmitEditing={handleSearch}
          value={search}
          maxLength={4}
        />
      </View>
      {loading ? (
        <View>
          <ActivityIndicator size='large' color='#618264' />
        </View>
      ) : (
        <FlatList
          data={searchResults}
          keyExtractor={(item) => item.key}
          renderItem={renderItem}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    height: 40,
    backgroundColor: 'white',
    borderColor: '#618264',
    borderWidth: 2,
    margin: 10,
    borderRadius: 10,
    padding: 10,
  },
  searchInput: {
    flex: 1,
    marginLeft: 8,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    width: 24,
    height: 24,
    color: '#618264',
    marginLeft: 8,
  },
});

export default PersonalityScreen;
