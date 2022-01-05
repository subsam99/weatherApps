import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Weather from './components/Weather';
import { API_KEY } from './utils/WeatherApiKey';
import Geolocation from '@react-native-community/geolocation';

export default class App extends Component {
	state = {
		isLoading: true,
    city: null,
		temperature: 0,
		weatherCondition: null,
		error: null
	};

	componentDidMount() {
		Geolocation.getCurrentPosition(
			(position) => {
				this.fetchWeather(position.coords.latitude, position.coords.longitude);
			},
			(error) => {
				this.setState({
					error: 'Error Getting Weather Conditions'
				});
			},

      {enableHighAccuracy: true, timeout: 2000}
		);
	}

	fetchWeather(lat = 0, lon = 0) {
		fetch(
			`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${API_KEY}&units=metric`
		)
			.then(res => res.json())
			.then(json => {
				this.setState({
          city: json.name,
					temperature: json.main.temp,
					weatherCondition: json.weather[0].main,
					isLoading: false
				});
			});
	}

	render() {
		const { isLoading } = this.state;
		return (
			<View style={styles.container}>
				{isLoading ? (
					<Text>Fetching The Weather</Text>
				) : (
					<Weather
            city={this.state.city}
						weather={this.state.weatherCondition}
						temperature={this.state.temperature}
					/>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	}
});