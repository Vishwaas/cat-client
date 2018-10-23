import sirv from 'sirv';
import polka from 'polka';
import compression from 'compression';
import * as sapper from '../__sapper__/server.js';
import httpProxy from 'http-proxy';

const { PORT, NODE_ENV } = process.env;
const dev = NODE_ENV === 'development';
const proxy = httpProxy.createProxyServer();

function proxyReroute(req, res, next) {
	if (
		req.url.indexOf('/configurations') != -1 ||
		req.url.indexOf('/screeners') != -1
	) {
		proxy.web(req, res, { target: 'http://localhost:3000' }, function(e) {
			console.log('Error in config call', e);
		});
	} else if (req.url.indexOf('screener-api/') != -1) {
		proxy.web(
			req,
			res,
			{
				target: 'http://ddt-acc.markit.partners'
			},
			function(e) {
				console.log('Error in proxy call', e);
			}
		);
	} else {
		next();
	}
}

polka() // You can also use Express
	.use(
		proxyReroute,
		compression({ threshold: 0 }),
		sirv('static', { dev }),
		sapper.middleware()
	)
	.listen(PORT, err => {
		if (err) console.log('error', err);
	});
