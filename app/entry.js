//import _ from 'react';
//import PIXI from 'pixi.js'

var PIXI = require('pixi.js');
import say from './Sayhello.js'
var Sayhello = require('./Sayhello.js');
var Global = require('./Global.js');
//require("./styles.css");
import styles from './styles.css'

var linebreak = document.createElement("br");

writeParagraph(require("./content.js"))
document.body.appendChild(linebreak);

Sayhello();
say();
console.log('123')


document.body.appendChild(linebreak);
var renderer = new PIXI.WebGLRenderer(300, 300);
document.body.appendChild(renderer.view);

function writeParagraph(string){
	var para = document.createElement('p');
	para.appendChild(document.createTextNode(string));
	document.body.appendChild(para);
}