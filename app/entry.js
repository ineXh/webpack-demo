//import _ from 'react';
//import PIXI from 'pixi.js'

var PIXI = require('pixi.js');
import say from './Sayhello.js'
var Sayhello = require('./Sayhello.js');


//require('script!Global/Global.js');


//var Global = require('./Global.js');
//import Global from './Global.js'
require("./styles.css");
//import styles from './styles.css'
//var css = require('css!./styles.css')

//var dogs = require('./dogs.js')
// /////////////
// Expose-loader
// /////////////
// Exposes the exports for file.js to the global context on property "libraryName".
// In web browsers, window.libraryName is then available.
//require("expose-loader?libraryName!./file.js");
require("expose-loader?dog!./dogs.js");
// /////////////
// Script-loader
// /////////////
import Global from 'script-loader!./Global.js';

var linebreak = document.createElement("br");

writeParagraph(require("./content.js"))
document.body.appendChild(linebreak);

Sayhello();
say();

writeParagraph(dog);

writeParagraph('Script Loader Global.js: ' + Name + ', ' + Name2);
//utils.meow();
//writeParagraph("My name is "  + Name);


document.body.appendChild(linebreak);
var app = new PIXI.Application(300, 300,
        {backgroundColor : 0x82cd3c,
        transparent : false, antialias: true
     });

document.body.appendChild(app.view);

function writeParagraph(string){
	var para = document.createElement('p');
	para.appendChild(document.createTextNode(string));
	document.body.appendChild(para);
}