import Request from '../helpers/Request';
import PubSub from '../helpers/PubSub';

class CountriesModel {
	constructor(){
		// Instance variables to hold the API URL...
		this.url = "https://restcountries.eu/rest/v2/all";

		// ...and the array of countries that should come back...
		this.countries = [];

		// Fetch the countries data from the API
		this.fetchData();

		// Listen for the select list change event
		PubSub.subscribe("/country/request", this.dispatchSelectedCountry.bind(this));
	}

	fetchData(){
		const request = new Request();
		request.get(this.url, (countries) => {
			this.countries = countries;
			PubSub.publish("/countries/all", this.countries);
		});
	}

	dispatchSelectedCountry(event){
		const index = event.detail;
		PubSub.publish("/countries/selected", this.countries[index]);
	}
}

export default CountriesModel;
