var btn1=document.getElementById("carga-diaria-b");
console.log(console);
btn1.addEventListener("click", function(){

    var trh = parseFloat(document.getElementById("tiempo-ret").value);
    var volumen_util = parseFloat(document.getElementById("volumen-util").value);

    var carga_diaria = volumen_util / trh;

    document.getElementById("carga-diaria-o").innerHTML =  carga_diaria;
});

var btn2=document.getElementById("agua-agregada-b");
btn2.addEventListener("click", function(){

    var c1 = parseFloat(document.getElementById("contenido-uno").value);
    var m2 = parseFloat(document.getElementById("masa-dos").value);
    var c2 = parseFloat(document.getElementById("contenido-dos").value);

    var m1 = (m2 * c2) / c1;

    var agua_agregada = m2 - m1;

    document.getElementById("agua-agregada-o").innerHTML = agua_agregada;
    document.getElementById("masa-uno").innerHTML = m1;
});

var btn3=document.getElementById("carga-diaria-b2");
btn3.addEventListener("click", function(){

    var m1 = parseFloat(document.getElementById("masa-uno-2").value);
    var c1 = parseFloat(document.getElementById("contenido-uno-2").value);
    var c2 = parseFloat(document.getElementById("contenido-dos-2").value);

    var m2 = (m1 * c1) / c2;

    var agua_agregada = m2 - m1;

    document.getElementById("masa-dos-o2").innerHTML = m2;
    document.getElementById("agua-agregada-o2").innerHTML = agua_agregada;
});

var btn4=document.getElementById("volumen-util-b");
btn4.addEventListener("click", function(){

    var trh = parseFloat(document.getElementById("tiempo-ret-2").value);
    var carga_diaria = parseFloat(document.getElementById("carga-diaria-2").value);

    var volumen_util = carga_diaria * trh;
    document.getElementById("volumen-util-o").innerHTML = volumen_util;
});