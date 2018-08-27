import React, { Component } from 'react';
import { View, Text, Button } from 'react-native'

export default class Auth extends Component {
	loginHandler = () => {

	};

	render() {
		return (
			<View>
				<Text>AuthSreen</Text>
				<Button title="Login" onPress={this.loginHandler} />
			</View>
		)
	}
}