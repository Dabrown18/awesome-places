import { Navigation } from 'react-native-navigation';

export const startTabs = () => {
	Navigation.startTabBasedApp({
		tabs: [
			{
				screen: "awesome-places.FindPlaceScreen",
				label:  "Find Place",
				title:  "Find Place"
			},
			{
				screen: "awesome-places.SharePlaceScreen",
				label:  "Share Place",
				title:  "Share Place"
			}
		]
	});
};
