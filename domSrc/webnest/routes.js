import * as functionsWebNest from '../src/main.js';

export function RoutePath(routeMap) {
    function renderComponentForPath(path) {
        if (routeMap.hasOwnProperty(path)) {
            const webnestFunctionName = routeMap[path];
            
            if (typeof functionsWebNest[webnestFunctionName] === 'function') {
                document.body.innerHTML = ''; // Clear existing content
                functionsWebNest[webnestFunctionName]();
            } else {
                console.error(`Function ${webnestFunctionName} is not defined.`);
            }
        } else {
            console.error(`No function mapped for the path ${path}.`);
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        renderComponentForPath(window.location.pathname);
    });

    window.addEventListener('popstate', function () {
        renderComponentForPath(window.location.pathname);
    });

    window.navigate = function (path) {
        history.pushState({}, '', path);
        renderComponentForPath(path);
    };
}
