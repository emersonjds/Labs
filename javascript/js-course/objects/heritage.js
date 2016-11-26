var o = {}; //herda metodos do objeto prototype
o.x = i; //  te uma propriedade propria x 
var p = inherit(o); // p herda propriedades de o e Object.prototype
p.y = 2; //e tem uma propriedade própria y
var q = inherit(); //q herda propriedades de p , o e Object.prototype
q.z = 3; //e tem uma propriedade propria z
var s = q.toString(); //toString é herdado de Object.prototype
q.x + q.y  // => 3: x e y são herdados de o e p

var unitcircle = {r:1}; //Um objeto por herdar
var = inherit(unitcircle); //c herda a propriedade de r
c.x = 1; c.y = 1; //x define duas propriedades próprias
c.r = 2; //c anula suas propriedades herdadas 
unitcircle.r; // => 1: o objeto protótipo não é afetado

