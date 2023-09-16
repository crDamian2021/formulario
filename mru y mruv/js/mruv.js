//CALCULAR DISTACIA.
function capturamruv(e){

    function calcular(dt1,dt2,dt3,resultado){
        this.dt1 = dt1;
        this.dt2 = dt2;
        this.dt3 = dt3;
        this.resultado = resultado;
    }
    let vlfinal1 = document.getElementById("vlefinal").value;
    let vlinicial1 = document.getElementById("velinicial").value;
    let ttiempo = document.getElementById("ttiempo").value;


    let resultado1 = ((((parseFloat(vlfinal1))+(parseFloat(vlinicial1)))/2)*(parseFloat(ttiempo)));
    let obje = new calcular(vlfinal1,vlinicial1,ttiempo,resultado1);
    console.log(obje);


    const imprimir1 = document.getElementById("resultmruvd");
    imprimir1.textContent =  `El resultado es: ${resultado1}`;    
}

//CALCULAR TIEMPO.
function capturaTiempo(e){

    function calcular(dt1,dt2,dt3,resultado){
        this.dt1 = dt1;
        this.dt2 = dt2;
        this.dt3 = dt3;
        this.resultado = resultado;
    }
    let vlfinal2 = document.getElementById("vlefinalT").value;
    let vlinicial2 = document.getElementById("velinicialT").value;
    let aceleracion = document.getElementById("aceleracion").value;


    let resultado2 = ((((parseFloat(vlfinal2))-(parseFloat(vlinicial2)))/(parseFloat(aceleracion))));
    let obje2 = new calcular(vlfinal2,vlinicial2,aceleracion,resultado2);
    console.log(obje2);
    console.log(resultado2);


    const imprimir2 = document.getElementById("resultmruvT");
    imprimir2.textContent =  `El resultado es: ${resultado2}`;    
}

function cptaceleracion(e){

    function objeto(d1,d2,d3,r){
        this.d1 = d1;
        this.d2 = d2;
        this.d3 = d3;
        this.r = r;
    }

    let dt1 =  document.getElementById("vlefinalT3").value; 
    let dt2 = document.getElementById("velinicialT3").value; 
    let dt3 = document.getElementById("aceleracino3").value; 
    let result =  ((((parseFloat(dt1))-(parseFloat(dt2)))/(parseFloat(dt3))));

    let obj = new objeto(dt1, dt2, dt3, result);
    console.log(obj);

    const resp = document.getElementById("resultmruvT3"); 

    resp.textContent = `El resultado es ${result}`;


    


}
