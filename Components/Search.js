import React from 'react'
import { StyleSheet, View, TextInput, Button, Text, FlatList } from 'react-native'
import films from "../data"
import FilmItem from './FilmItem'

import { getFilmsFromApiWithSearchedText } from '../API/TMDBApi' 




class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      films: [],
      searchedText: "" // Initialisation de notre donnée searchedText dans le state
    }
}

_searchTextInputChanged(text) {
    this.setState({ searchedText: text })
}

_loadFilms() {
  // console.log(this.state.searchedText) // Un log pour vérifier qu'on a bien le texte du TextInput
  if (this.state.searchedText.length > 0) { // Seulement si le texte recherché n'est pas vide
    getFilmsFromApiWithSearchedText(this.state.searchedText).then(data => {
        this.setState({ films: data.results })
    })
  }
}
  render() {
    return (
      <View style={styles.main_container}>
        <TextInput style={styles.textinput} placeholder='Film title'
        onChangeText={(text) => this._searchTextInputChanged(text)}
        />
        <Button  
            color={"#ff0000"} 
            title='Rechercher' 
            onPress={() => this._loadFilms()}
        />
        <FlatList
            data={this.state.films}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => <FilmItem banana={item}/>}
        />
      

      </View>
    )
  }
}

const styles = StyleSheet.create({
  main_container: {
    flex: 1,
    marginTop: 50
  },
  textinput: {
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 30,
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    paddingLeft: 5
  }
})

export default Search