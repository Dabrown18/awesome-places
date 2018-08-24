import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import ListItem from './src/components/ListItem'

export default class App extends Component {
  state = {
    placeName: "",
     places: []
  };

  placeNameChangedHandler = (val) => {
    this.setState(() => ({
    	placeName: val
    }))
  };

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    }

    this.setState((prevState) => ({
       places: prevState.places.concat(prevState.placeName)
    }))
  };

  render() {
    const placesOutput = this.state.places.map((place, i) => (
       <ListItem key={i} placeName={place}/>
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
			  <TextInput
				  style={styles.placeInput}
				  placeholder="An awesome place"
				  value={this.state.placeName}
				  onChangeText={this.placeNameChangedHandler}
			  />
			  <Button
             style={styles.placeButton}
              title="Add"
             onPress={this.placeSubmitHandler}
           />
        </View>
        <View>{placesOutput}</View>
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
  },
  inputContainer: {
    flexDirection: "row",
     justifyContent: "space-between",
     alignItems: "center",
     width: "100%"
  },
   placeInput: {
    width: "70%"
   },
   placeButton: {
    width: "30%"
   }
});
