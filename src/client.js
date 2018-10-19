import 'bootstrap/dist/css/bootstrap.min.css';
import * as sapper from '../__sapper__/client.js';
import 'bootstrap/dist/css/bootstrap.min.css';

//It is important to have global-client called after bootstrap since global.css is injected before which affects css specificity
import './global-client.css';
import Initializer from './Initializer/config';

sapper
	.start({
		target: document.querySelector('#sapper')
	})
	.then(() => {
		console.log('Sapper client app has started');
		Initializer();
	});
