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

const mbtiPersonal = require('../json/mbtiPersonal.json'); // json파일 호출

function PersonalityScreen({ navigation }) {
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
    const filterSelectMbti = mbtiPersonal.filter(
      (item) => item.key === selectId
    );
    navigation.navigate('PersonalityDtail', { item: filterSelectMbti });
  };

  const renderItem = ({ item }) => (
    <View style={styles.imageCardSction}>
      <ImageCard
        id={item.key}
        title={item.name}
        description={item.description}
        imgSrc={imgMap[item.name]}
        onPressCallback={onPressCallback}
      ></ImageCard>
    </View>
  );

  return (
    <View style={styles.container}>
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
          style={styles.mbtiCardContainer}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#A9B388',
    height:'100%'
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    height: 40,
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
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
    color: '#A9B388',
    marginLeft: 8,
  },
  imageCardSction:{
    marginLeft: 20,
    marginRight: 20,
    marginTop: 10,
  },
  mbtiCardContainer :{
    marginTop:10
  }
});

export default PersonalityScreen;
