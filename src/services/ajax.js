import $ from 'jquery';

function jqAjax(options) {
	return new Promise(resolve => {
		$.ajax(options).then(response => {
			resolve(response);
		});
	});
}

export default {
	get(options) {
		options.type = 'GET';
		return jqAjax(options);
	},

	post(options) {
		options.type = 'POST';
		return jqAjax(options);
	},

	put(options) {
		options.type = 'PUT';
		return jqAjax(options);
	},

	delete(options) {
		options.type = 'DELETE';
		return jqAjax(options);
	}
};
