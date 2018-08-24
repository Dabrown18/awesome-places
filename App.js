import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceInput from './src/components/PlaceInput';
import PlaceList from './src/components/PlaceList'

export default class App extends Component {
   state = {
      places: []
   };

	placeAddedHandler = (placeName) => {
		this.setState((prevState) => ({
			places: prevState.places.concat({
            key: Math.random(),
            value: placeName
			})
		}))
	};

	placeDeletedHandler = (key) => {
	   this.setState((prevState) => ({
	   	places: prevState.places.filter(place => {
	   	   return place.key !== key;
         })
	   }))
   };

  render() {

    return (
      <View style={styles.container}>
         <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
         <PlaceList places={this.state.places} onItemDeleted={this.placeDeletedHandler}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  }
});
