import * as components from './components.js';
import * as functionsWebNest from '../src/main.js';

export function RoutePath(routeMap) {
    document.addEventListener('DOMContentLoaded', function () {
        const currentPath = window.location.pathname;
        
        if (routeMap.hasOwnProperty(currentPath)) {
            const webnestFunctionName = routeMap[currentPath];
            
            if (typeof functionsWebNest[webnestFunctionName] === 'function') {
                functionsWebNest[webnestFunctionName]();
            } else {
                console.error(`Function ${webnestFunctionName} is not defined.`);
            }
        } else {
            console.error(`No function mapped for the path ${currentPath}.`);
        }
    });
}
