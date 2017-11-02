import CountriesSelectView from './CountriesSelectView';
import CountriesDetailView from './CountriesDetailView';

class AppView {
	static render(){
		new CountriesSelectView();
		new CountriesDetailView();
	}
}

export default AppView;
