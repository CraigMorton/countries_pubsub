import PubSub from '../helpers/PubSub';

class CountriesDetailView {
	constructor(){
		// grab a reference to the element
		this.element = document.getElementById("countriesDetail");

		// listen out for the selected country information
		PubSub.subscribe('/countries/selected', this.render.bind(this));
	}

	render(event){
		const country = event.detail;
		this.element.innerHTML = '';

		const heading = document.createElement('h2');
		heading.innerText = country.name;
		this.element.appendChild(heading);
	}
}

export default CountriesDetailView;
