var a = Number(prompt('Ingrese el lado 1 del triangulo',''));
var b = Number(prompt('Ingrese el lado 2 del triangulo',''));
var c = Number(prompt('Ingrese el lado 3 del triangulo',''));
var s = ((a+b+c)/2) ;
var area = (Math.pow(s* (s-a) * (s-b) * (s-c)),(1/2));
if (a==b && a==c && b==c) 
{
	document.write('<h1>'+area+'</h1><img src="../img/equilatero.jpg">');
}else if (a == b || a == c || b == c) {
	document.write('<H1>'+area+'</H1><img src="../img/isosceles.jpg">');
}else if (a !=b && a!=c && b!=c) {
	document.write('<H1>'+area+'</H1><img src="../img/escaleno.jpg">');
}
