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
// Image-loader, file-loader
//const pathToCow = require('./images/cow.png');
//const getCow = () => `<img src='${pathToCow}' alt='Cow Icon' />`;

var linebreak = document.createElement("br");

writeParagraph(require("./content.js"))
document.body.appendChild(linebreak);

Sayhello();
say();

writeParagraph(dog);

writeParagraph('Script Loader Global.js: ' + Name + ', ' + Name2);

//placeImage(pathToCow, 52, 52, "Cow Icon");


//utils.meow();
//writeParagraph("My name is "  + Name);


document.body.appendChild(linebreak);
var app = new PIXI.Application(300, 300,
        {backgroundColor : 0x82cd3c,
        transparent : false, antialias: true
     });

document.body.appendChild(app.view);

PIXI.loader
		.add('cow', "app/assets/cow.png") //pathToCow
		.load(loadCB.bind(this));
var stage0;
function loadCB(){
	//console.log('loadCB')
	var cowTexture = PIXI.Texture.fromFrame("cow");
	var button = new PIXI.Sprite(cowTexture);
    button.anchor.x = 0.5;
    button.anchor.y = 0.5;
    button.position.x = 50;
    button.position.y = 50;
    //button.scale.set( width / button.width);
    stage0 = new PIXI.Container();
    stage0.addChild(button);
    animate();
}

function animate() {
        //update();
        app.renderer.render(stage0);
        requestAnimationFrame(animate);
    } // end animate

function writeParagraph(string){
	var para = document.createElement('p');
	para.appendChild(document.createTextNode(string));
	document.body.appendChild(para);
}

function placeImage(path, width, height, alt){
	var img = document.createElement("IMG");
	img.setAttribute("src", path);
	img.setAttribute("width", "" + width);
	img.setAttribute("height", "" + height);
	img.setAttribute("alt", alt);
	document.body.appendChild(img);
}