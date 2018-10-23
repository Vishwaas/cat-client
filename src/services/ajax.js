import $ from 'jquery';

function jqAjax(options) {
	return new Promise((resolve, reject) => {
		let $req = $.ajax(options);
		$req.done(response => {
			resolve(response);
		});
		$req.fail(error => {
			reject(error);
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
