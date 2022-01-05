import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import { weatherConditions } from '../utils/WeatherConditions';

const Weather = ({ city, weather, temperature }) => {
	return (
		<View
			style={[
				styles.weatherContainer,
				{ backgroundColor: weatherConditions[weather].color }
			]}
		>
			<View style={styles.headerContainer}>
				<Text style={styles.name}>Muhammad Syahmi Aiman (1811893)</Text>
				<Icon size={72} name={weatherConditions[weather].icon} color={'#fff'} />
				<Text style={styles.tempText}>{temperature}˚</Text>
				<Text style={styles.city}>{city}</Text>
			</View>
			<View style={styles.bodyContainer}>
				<Text style={styles.title}>{weatherConditions[weather].title}</Text>
				<Text style={styles.subtitle}>
					{weatherConditions[weather].subtitle}
				</Text>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	weatherContainer: {
		flex: 1
	},
    
	headerContainer: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center'
	},

	name: {
		fontSize: 16,
		color: '#fff',
		marginTop: 20,
		marginBottom: 20,
	},

	tempText: {
		fontSize: 48,
		color: '#fff'
	},

	city: {
		fontSize: 30,
		color: '#fff',
	},

	bodyContainer: {
		flex: 2,
		alignItems: 'flex-start',
		justifyContent: 'flex-end',
		paddingLeft: 25,
		marginBottom: 40
	},

	title: {
		fontSize: 48,
		color: '#fff'
	},

	subtitle: {
		fontSize: 24,
		color: '#fff'
	}
});

export default Weather;