import Request from '../helpers/Request';

class CountriesModel {
	constructor(){
		// Instance variables to hold the API URL...
		this.url = "https://restcountries.eu/rest/v2/all";

		// ...and the array of countries that should come back...
		this.countries = [];

		// Fetch the countries data from the API
		this.fetchData();

		// Listen for the select list change event,
		document.addEventListener("countriesSelectChanged", this.dispatchSelectedCountry.bind(this));
	}

	fetchData(){
		const request = new Request();
		request.get(this.url, (countries) => {
			this.countries = countries;
			this.dispatchAllCountries();
		});
	}

	dispatchAllCountries(response){
		// create & dispatch a new custom event, containing all country info
		const event = new CustomEvent("/countries/all", {
			detail: this.countries
		});
		document.dispatchEvent(event);
	}

	dispatchSelectedCountry(event){
		// create & dispatch a new custom event, containing the selected country
		const index = event.detail;
		const newEvent = new CustomEvent("/countries/selected", {
			detail: this.countries[index]
		});
		document.dispatchEvent(newEvent);
	}
}

export default CountriesModel;
