import { ADD_PLACE, DELETE_PLACE, SELECT_PLACE, DESELECT_PLACE } from '../actions/actionTypes'

const initialState = {
	places: [],
	selectedPlace: null
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_PLACE:
			return {
				// Copies properties of the old state
				...state,
				places: state.places.concat({
					key: Math.random(),
					name: action.placeName,
					image: {
						uri: "https://media.istockphoto.com/photos/paradise-beach-picture-id509488176?k=6&m=509488176&s=612x612&w=0&h=xUkao6mVjcKAAQNnf0aB5kKEfvg98pl1QzTSvSi-8PE="
					}
				})
			};
		case DELETE_PLACE:
			return {
				...state,
				places: state.places.filter(place => {
					return place.key !== state.selectedPlace.key;
				}),
				selectedPlace: null
			};
		case SELECT_PLACE:
			return {
				...state,
				selectedPlace: state.places.find(place => {
					return place.key === action.placeKey;
				})
			};
		case DESELECT_PLACE:
			return {
				...state,
				selectedPlace: null
			};
		default:
			return state;
	}
};

export default reducer;