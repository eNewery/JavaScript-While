/* confirmarCompra = (prompt("¿Desea confirmar su compra?"))

if(confirmarCompra == "Si"){
    alert("Puedes proceder")
}
else{
alert("Vete de aquí!")
} */

confirmBuy = prompt("Escribe en el siguiente cuadro la palabra 'Si' en caso de querer proceder")
while(confirmBuy != "Si"){
    alert("Ups! Algo ha fallado")
    confirmBuy = prompt("Inténtalo de nuevo!")
}