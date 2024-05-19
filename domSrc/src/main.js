import * as components from '../webnest/components.js';
import {RoutePath} from '../webnest/routes.js';

//import component code from webnest/component.js
Object.assign(window,components);

RoutePath({
	'/': 'Home'
});

function Home() {
	return WebNest(
		
	);
}