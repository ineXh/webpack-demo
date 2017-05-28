//import _ from 'react';
//import PIXI from 'pixi.js'

var PIXI = require('pixi.js');

import say from './Sayhello.js'
var Sayhello = require('./Sayhello.js');
document.write(require("./content.js"));
Sayhello();
//console.log(say)
say();

var renderer = new PIXI.WebGLRenderer(300, 300);
document.body.appendChild(renderer.view);
