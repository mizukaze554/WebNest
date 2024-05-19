import * as components from './components.js';

export function RoutePath(routeMap) {
  document.addEventListener('DOMContentLoaded', function () {
    const currentPath = window.location.pathname;
    
    // Check if the current path exists in the route map
    if (routeMap.hasOwnProperty(currentPath)) {
      const webnestFunctionName = routeMap[currentPath];
      
      if (typeof window[webnestFunctionName] === 'function') {
        import {webnestFunctionName} from'../src/main.js';
        window[webnestFunctionName]();
      } else {
        console.error(`Function ${webnestFunctionName} is not defined.`);
      }
    } else {
      console.error(`No function mapped for the path ${currentPath}.`);
    }
  });
}
