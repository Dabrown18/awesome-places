import { Navigation } from 'react-native-navigation'

import AuthScreen from './src/screens/Auth';

// Register Screen
Navigation.registerComponent("awesome-places.AuthScreen", () => AuthScreen);

// Start a App
Navigation.startSingleScreenApp({
	screen: {
		screen: "awesome-places.AuthScreen",
		title: "Login"
	}
});