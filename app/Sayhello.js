var sayHello = function(){
	//document.write("Hello, from sayHello");
	var para = document.createElement('p');
	para.appendChild(document.createTextNode("Hello"));
	document.body.appendChild(para);
}
module.exports = sayHello;