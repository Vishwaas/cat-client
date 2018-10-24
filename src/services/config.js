import configTypes from '../enumerations/config-types';
import configFormats from '../enumerations/config-formats';
import AjaxService from '../services/ajax';

let screeners = [];

function fetchFieldValues(screenerId, fieldId) {
	return new Promise(resolve => {
		AjaxService.get({
			url: `/screener-api/v1/screens/${screenerId}/${fieldId}/distinctValues`
		}).then(response => {
			resolve(response.data.items);
		});
	});
}

function fetchScreenerFields(screenerId) {
	return new Promise(resolve => {
		AjaxService.get({
			url: `/screener-api/v1/screens/${screenerId}/fields`
		}).then(response => {
			resolve(response.data);
		});
	});
}

function fetchScreeners() {
	return new Promise(resolve => {
		AjaxService.get({
			url: '/v1/screeners'
		}).then(response => {
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

	getFieldValues(screenerId, fieldId) {
		return fetchFieldValues(screenerId, fieldId);
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
