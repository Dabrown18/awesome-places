import React from 'react';
import { Modal, View, Button, Text, StyleSheet, Image } from 'react-native';

const PlaceDetail = (props) => {
	let modalContent = null;

	if(props.selectedPlace) {
		modalContent = (
			<View>
				<Image
					source={props.selectedPlace.image}
					style={styles.placeImage}
				/>
				<Text style={styles.placeText}>{props.selectedPlace.name}</Text>
			</View>
		)
	}

	return (
		<Modal
			visible={props.selectedPlace !== null}
			animationType="slide"
		>
			<View style={styles.modalContainer}>
				{modalContent}
				<View>
					<Button title="Delete" color="red"/>
					<Button title="Close" />
				</View>
			</View>
		</Modal>
	)
};

const styles = StyleSheet.create({
	modalContainer: {
		margin: 22
	},
	placeImage: {
		width: "100%",
		height: 200
	},
	placeText: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 28
	}
});

export default PlaceDetail;