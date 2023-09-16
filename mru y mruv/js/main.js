function captura(e){
    function calcular(dt1,dt2,resultado){
        this.dt1 = dt1;
        this.dt2 = dt2;
        this.resultado = resultado;
    }
    let distacia = document.getElementById("tiempo").value;
    let tiempo = document.getElementById("distacia").value;
    let resultado =((parseFloat(distacia))/(parseFloat(tiempo)));
    let obje = new calcular(this.dt1,this.dt2,resultado);
    console.log(obje);

    if(distacia ==="" || tiempo ===""){
        alert('Lene el formulario');
      
    }
    else{
        const imprimir = document.getElementById("result");
    imprimir.textContent =  `El resultado es: ${resultado}`;
    }
        
}

function captura1(e){

    function calcular1(d,d1,rs){
        this.d = d;
        this.d1 = d1;
        this.rs = rs;
    }
    let dis = document.getElementById("distacia1").value;
    let tie = document.getElementById("tiempo1").value;
    let resul =((parseFloat(dis))*(parseFloat(tie)));
    let obje = new calcular1(dis,tie,resul);
    console.log(obje);

    if(dis ==="" || tie ===""){
        alert('Lene el formulario');
      
    }
    else{
    const impr = document.getElementById("resul1");
    impr.textContent =  `El resultado es: ${resul} km/s`;
    }
        
}


function captura22(e){
    function calcula2(e1,e2,rsl){
        this.e1= e1;
        this.e2 = e2;
        this.rsl = rsl;
    }
    let distacia22 = document.getElementById("tiempo2").value;
    let tiempo22 = document.getElementById("distacia2").value;
    let resultado22 =((parseFloat(distacia22))/(parseFloat(tiempo22)));
    let obje = new calcula2(distacia22,distacia22,resultado22);
    console.log(obje);

    if(tiempo22 ==="" || distacia22 ===""){
        alert('Lene el formulario');
      
    }
    else{
        const imp = document.getElementById("rst");
    imp.textContent =  `El resultado es: ${resultado22} `;
    }
        
}

const imagenes = document.querySelectorAll('.img-grid1');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click',()=>{   
        aparecerImagen(imagen.getAttribute('src'))
    
    })
})