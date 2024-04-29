var btn=document.getElementById("carga-diaria-b");
console.log(console);
btn.addEventListener("click", function(){

    var trh = parseFloat(document.getElementById("tiempo-ret").value);
    var volumen_util = parseFloat(document.getElementById("volumen-util").value);

    var carga_diaria = volumen_util / trh;

    document.getElementById("carga-diaria-o").innerHTML =  carga_diaria;
});

var btn=document.getElementById("agua-agregada-b");
btn.addEventListener("click", function(){

    var c1 = parseFloat(document.getElementById("contenido-uno").value);
    var m2 = parseFloat(document.getElementById("masa-dos").value);
    var c2 = parseFloat(document.getElementById("contenido-dos").value);

    var m1 = (m2 * c2) / c1;

    var agua_agregada = m2 - m1;

    document.getElementById("agua-agregada-o").innerHTML = agua_agregada;
    document.getElementById("masa-uno").innerHTML = m1;
});