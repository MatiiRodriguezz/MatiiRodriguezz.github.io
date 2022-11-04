/*Eventos en javascript*/

 /*variables*/
const carro = document.querySelector(".carro");
const boton = document.querySelector(".boton");
  
/*handler functions*/
const achicar= () =>{
    carro.style.transform= "scale(0.6)";
};
const agrandar= () =>{
    carro.style.transform= "scale(1.2)";

};

const correr= () =>{
    carro.style.left= "700px";
};

const retroceder= () =>{
    carro.style.left= "0px";
    agrandar();
}
    /*agregar eventos directamente al elemento*/


    /*metodo addEventListener*/
// boton.addEventListener("click", () => {
//carro.style.left= "700px";
 //});
 boton.addEventListener("mousedown", correr);
 boton.addEventListener("mouseup", retroceder);

 


    /*event tarjet (todos los eventos en javascript son objetos de tipo event)*/