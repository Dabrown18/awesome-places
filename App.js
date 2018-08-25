import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import PlaceInput           from './src/components/PlaceInput';
import PlaceList            from './src/components/PlaceList';
import PlaceDetail          from './src/components/PlaceDetail';

export default class App extends Component {
   state = {
      places: [],
		selectedPlace: null
   };

	placeAddedHandler = (placeName) => {
		this.setState((prevState) => ({
			places: prevState.places.concat({
            key: Math.random(),
            name: placeName,
				image: {
            	uri: "https://media.istockphoto.com/photos/paradise-beach-picture-id509488176?k=6&m=509488176&s=612x612&w=0&h=xUkao6mVjcKAAQNnf0aB5kKEfvg98pl1QzTSvSi-8PE="
				}
			})
		}))
	};
	
	placeDeletedHandler = () => {
		this.setState((prevState) => ({
			places: prevState.places.filter(place => {
				return place.key !== prevState.selectedPlace.key;
			}),
			selectedPlace: null
		}))
	};
	
	modalClosedHandler = () => {
		this.setState(() => ({
			selectedPlace: null
		}))
	};

	placeSelectedHandler = (key) => {
		this.setState((prevState) => ({
			selectedPlace: prevState.places.find(place => {
				return place.key === key;
			})
		}))
   };

	

  render() {

    return (
      <View style={styles.container}>
			<PlaceDetail
				selectedPlace={this.state.selectedPlace}
				onItemDeleted={this.placeDeletedHandler}
				onModalClosed={this.modalClosedHandler}
			/>
         <PlaceInput onPlaceAdded={this.placeAddedHandler}/>
         <PlaceList
				places={this.state.places}
				onItemSelected={this.placeSelectedHandler}
			/>
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
