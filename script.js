const tickets = 200
function rpago(){
var a = document.getElementById("cant").value; // a = cantidad tickets comprado
var b = document.getElementById("cate").value; // b = Categoria con descuento comprado
var c = ((tickets * b) / 100); // c = Descuento a aplicar
var d = ((tickets - c ) * a ); // Valor total de compra

document.getElementById("valor").value = "Total a pagar: $" + d // devolucion en documento

}



