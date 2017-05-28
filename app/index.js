import React from 'react';
import ReactDOM from 'react-dom';
import Menu from './Menu.js';

ReactDOM.render( <Menu/>, document.getElementById('Menu') );

/*import _ from 'lodash';

function component () {
  var element = document.createElement('div');

  // lodash is required for the next line to work 
  element.innerHTML = _.join(['Hello','webpack'], ' ');

  return element;
}

document.body.appendChild(component());*/