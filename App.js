import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import Header from './src/componentes/header';
import Search from './src/componentes/search';
import Banner from './src/componentes/banner';
import Movies from './data/movies';

export default function App () {
  return (

    <View style={styles.container}>

      <Header></Header>
      <Search></Search>
      <Banner></Banner>

      <View style={{width:'90%'}}>

        <FlatList 
        
          horizontal = {true}
          data = {Movies}
          keyExtractor = {(item)=> item.id}
          renderItem = {({item}) => (

          <TouchableOpacity>

            <Image

              style = {{width:80, height:100}} 
              source = {{uri: item.imagem}}>
            
            </Image>

            <Text> {item.nome} </Text>

          </TouchableOpacity>

        )}

        />

      </View>

    </View>

  );
};

const styles = StyleSheet.create ({

  container: {
    flex: 1,
    backgroundColor: '#171A4A',
    alignItems: 'center',
   
  },

});
