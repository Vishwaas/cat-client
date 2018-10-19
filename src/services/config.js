import configTypes from '../enumerations/config-types';
import configFormats from '../enumerations/config-formats';
import $ from 'jquery';

let fields = [];
let screeners = [];

function fetchScreenerFields() {
	return new Promise(resolve => {
		$.ajax({
			url: 'http://ddt-acc.markit.partners/screener-api/v1/screens/302/fields',
			type: 'GET'
		}).done(data => {
			resolve(JSON.parse(data));
		});
	});
}

function fetchScreeners() {
	return new Promise(resolve => {
		$.ajax({
			url: 'http://ddt-acc.markit.partners/screener-api/v1/screens',
			type: 'GET'
		}).done(response => {
			resolve(JSON.parse(response.data.items));
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

	getFields() {
		return fields;
	},

	initialize() {
		fetchScreenerFields().then(fields => {
			fields = fields;
		});
		fetchScreeners().then(screeners => {});
	}
};
