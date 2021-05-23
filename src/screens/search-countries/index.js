import React, {useState, useEffect} from 'react';
import {
  View,
  ActivityIndicator,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import {API_KEY} from '../../config';
import axios from 'axios';

const SearchCountries = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const getCountries = async () => {
    try {
      setLoading(true);
      let res = await axios.get('https://covid-193.p.rapidapi.com/countries', {
        headers: {
          'x-rapidapi-host': 'covid-193.p.rapidapi.com',
          'x-rapidapi-key': API_KEY,
        },
      });

      setCountries(res.data.response);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  useEffect(() => {
    getCountries();
  }, []);

  const renderItem = ({item}) => (
    <TouchableOpacity activeOpacity={0.8}>
      <View style={styles.item}>
        <Text style={styles.countryText}>{item}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      {loading ? (
        <View style={styles.loaderContainer}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <FlatList
          data={countries}
          renderItem={renderItem}
          keyExtractor={item => item}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    width: '100%',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 24,
  },
  countryText: {
    fontSize: 26,
  },
});

export default SearchCountries;
