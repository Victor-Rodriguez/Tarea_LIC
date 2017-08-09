var a = Number(prompt('Ingrese el lado 1 del triangulo',''));
var b = Number(prompt('Ingrese el lado 2 del triangulo',''));
var c = Number(prompt('Ingrese el lado 3 del triangulo',''));
var s = ((a+b+c)/2) ;
var area = Math.pow((s* (s-a) * (s-b) * (s-c)),(1/2));
if (a==b && a==c && b==c) 
{
	document.write("<img src='../img/equilatero.jpg'>");
	document.write("<h2 class='tipo'>Triágulo: Equilatero</h2>");
	document.write("<h2 id='area'>Área:"+area+"</h2>");


}else if (a == b || a == c || b == c) {
	document.write("<img src='../img/isosceles.jpg'>");
	document.write("<h2 class='tipo'>Triágulo: Isósceles</h2>");
	document.write("<h2 id='area2'>Área:" +area+"</h2>");

	
}else if (a !=b && a!=c && b!=c) {
	document.write("<img src='../img/escaleno.jpg'>");
	document.write("<h2 class='tipo'>Triágulo: Escaleno</h2>");
	document.write("<h2 id='area3'>Área:" +area+"</h2>");

}
