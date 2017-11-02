import CountriesModel from './models/CountriesModel';
import AppView from './views/AppView';

window.addEventListener("load", function(){
	// Load the views
	AppView.render();

	// Load the model
	new CountriesModel();
});
