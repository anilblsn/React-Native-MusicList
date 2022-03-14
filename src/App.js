import React,{useState} from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import music_data from './music_data.json';
import SongCard from './Components/SongCard';
import SearchBar from './Components/SearchBar';



const App = () => {
  const [list,setList] = useState(music_data);
  const renderSong =({item}) => <SongCard song={item} />;
  const renderSeperator = () => <View style={styles.seperator} />
  const handleSearch = text => {
    const filteredList = music_data.filter(song => {
      const searchedText = text.toLowerCase();
      const currentTitle = song.title.toLowerCase();

      return currentTitle.indexOf(searchedText) > -1;
    });
    setList(filteredList);
  };
  return (
    
      <View style={styles.container}>
        <SearchBar onChanged={handleSearch}/>
        <FlatList
          data={list}
          renderItem={renderSong}
          keyExtractor={item => item.id}
          ItemSeparatorComponent={renderSeperator}
        />
      
      </View>
    
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  seperator:{
    borderWidth:1,
    borderColor:'#e0e0e0',
  },
  
});

export default App;