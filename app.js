const input1 = document.querySelector("#calculo1");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const result = document.querySelector("#result");
const div = document.querySelector("#myid");
const menuVertical = document.querySelector(".btn")


function mostrarMenu (){
    let menuVertical1=document.querySelector(".menu-ver");
    menuVertical1.style.display="block"
}


function ocultarMenu() {
    let menuVertical2 = document.querySelector(".menu-ver");
    menuVertical2.style.display="none";

}



btn.addEventListener("click", btnOnclick);

function btnOnclick (){
    const sumaInputs = +input1.value + +input2.value;
    result.innerHTML = "Resultado de la suma:" + sumaInputs;
}

