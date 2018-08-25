import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';

import PlaceInput           from './src/components/PlaceInput';
import PlaceList            from './src/components/PlaceList';
import PlaceDetail          from './src/components/PlaceDetail';

import { addPlace, selectPlace, deselectPlace, deletePlace } from './src/store/actions';

class App extends Component {


	placeAddedHandler = (placeName) => {
		this.props.onAddPlace(placeName);
	};
	
	placeDeletedHandler = () => {
		this.props.onDeletePlace();
	};
	
	modalClosedHandler = () => {
		this.props.onDeselectPlace();
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

const MapStateToProps = (state) => {
	return {
		places: state.places.places,
		selectedPlace: state.places.selectedPlace
	}
};

const mapDispatchToProps = (dispatch) => {
	return {
		onAddPlace: (name)   => dispatch(addPlace(name)),
		onDeletePlace: ()   => dispatch(deletePlace()),
		onSelectPlace: (key) => dispatch(selectPlace(key)),
		onDeselectPlace: ()  => dispatch(deselectPlace())
	}
};

export default connect(MapStateToProps, mapDispatchToProps)(App);
