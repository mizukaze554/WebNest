import * as components from '../webnest/components.js';

//import component code from webnest/component.js
Object.assign(window,components);

WebNest(
	CustomTag({
		tag: 'div',
		child: 	Text({
			text: "WebNest"
		})
	})
);