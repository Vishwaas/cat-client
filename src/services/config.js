import configTypes from '../enumerations/config-types';
import configFormats from '../enumerations/config-formats';
import $ from 'jquery';

let fields = [];
let screeners = [];

function fetchScreenerFields(screenerId) {
	return new Promise(resolve => {
		$.ajax({
			url: `http://ddt-acc.markit.partners/screener-api/v1/screens/${screenerId}/fields`,
			type: 'GET'
		}).done(response => {
			resolve(response.data);
		});
	});
}

function fetchScreeners() {
	return new Promise(resolve => {
		$.ajax({
			url: 'http://localhost:3000/v1/screeners',
			type: 'GET'
		}).done(response => {
			resolve(response.data.items);
		});
	});
}

export default {
	getTypes() {
		return configTypes;
	},

	getFormats() {
		return configFormats;
	},

	getFields(screenerId) {
		return fetchScreenerFields(screenerId);
	},

	getScreeners() {
		return screeners;
	},

	initialize() {
		fetchScreeners().then(result => {
			screeners = result;
		});
	}
};
