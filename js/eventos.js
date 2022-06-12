var tamañoPincel = document.getElementById("tam");
var etiquetaTamañoPincel = document.getElementById("tamLvl")
var colorPincel = document.getElementById("color");
var borrador = document.getElementById("borrador");
var pincel = document.getElementById("tabla"); //obtenemos de html el canvas y los id
var papel = pincel.getContext("2d");
var anchoLinea = 5;
var x, y, estado;

pincel.addEventListener("mouseup", pulsarMouse);//evento escuchador, se presiona, y onmuseup: selibera
pincel.addEventListener("mousemove", dibujarMouse);
pincel.addEventListener("mousedown", soltarMouse);
borrador.addEventListener("click", limpiarCanvas);
tamañoPincel.addEventListener("click", tamañoLinea);
colorPincel.addEventListener("click", cambiarColor);

function dibujarMouse(evento){
	if(estado == 0 ){
		var color = colorPincel.value;
		dibujarLinea(color, x, y, evento.offsetX, evento.offsetY, papel);
	}

	x = evento.offsetX;
	y = evento.offsetY;
}

function pulsarMouse(evento){
	estado = 1;
	x = evento.offsetX;
	y = evento.offsetY;
}

function soltarMouse(evento) {
	estado = 0;
	x = evento.offsetX;
	y = evento.offsetY;
}

function limpiarCanvas(evento) {
	papel.clearRect(0,0,pincel.width,pincel.height);
}

function tamañoLinea(evento) {
	anchoLinea = tamañoPincel.value;
	etiquetaTamañoPincel.innerHTML = anchoLinea + "px";
}

function dibujarLinea(color, xinicial, yinicial, xfinal, yfinal, papel) {
	papel.beginPath();
	papel.strokeStyle = color;
	papel.lineWidth = anchoLinea;
	papel.moveTo(xinicial, yinicial);
	papel.lineTo(xfinal, yfinal);
	papel.stroke();
	papel.closePath();
}