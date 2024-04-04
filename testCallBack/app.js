const button = document.getElementById('btn');
const container = document.getElementById('container');
console.log("Este es un trabajo!!!");


function sum(a,b){
    return a+b;
};

function sumar2numeros(callback){
    const resultadoSuma = sum(1,2);

    callback(resultadoSuma);
};

sumar2numeros(function(valor){
    console.log(valor)
});

function getUsers(){
    return fetch("http://127.0.0.1:3000/testCallBack/info.json")
    .then((response) =>{
        return response.json();
    });
};

button.addEventListener('click', ()=>{
    getUsers().then((text) =>{
        const ul = document.createElement('ul');
    })
})