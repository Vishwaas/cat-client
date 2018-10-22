import $ from 'jquery';

function isConfigValid(config) {
	let validFlag = true;
	if (
		!config ||
		!config.desc ||
		!config.screenerId ||
		!(config.fields && config.fields.length)
	) {
		validFlag = false;
	} else {
		config.fields.every(field => {
			if (!isFieldValid(field)) {
				validFlag = false;
				return false;
			}
		});
	}
	return validFlag;
}

function isFieldValid(field) {
	let validFlag = true;
	if (
		!field ||
		!field.desc ||
		!field.type ||
		!field.format ||
		!field.key ||
		!field.sortOrder ||
		(field.type !== 'Range' && !field.key)
	) {
		validFlag = false;
	} else {
		if (!(field.values && field.values.length)) {
			validFlag = false;
		} else {
			field.values.every(value => {
				if (
					!value.id ||
					!value.desc ||
					!value.sortOrder ||
					(field.type !== 'Range' && !value.key) ||
					(field.type === 'Range' && (!value.low || !value.high))
				) {
					validFlag = false;
					return false;
				}
			});
		}
	}

	return validFlag;
}

export default {
	isConfigValid,
	isFieldValid
};
