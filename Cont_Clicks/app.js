let containerClicks = document.getElementById('container-clicks');

let btnIncrement = document.querySelector('.btn-primary');
let btnDecrement = document.querySelector('.btn-secondary');
let btnReset = document.querySelector('.btn-reset');

let countClicks = 0;

document.addEventListener('DOMContentLoaded', () => {
    containerClicks.innerText = countClicks;

    btnIncrement.addEventListener("click", function(){
        //alert("Le diste click al boton");
        countClicks++;
        containerClicks.innerText = countClicks;
    });

    btnDecrement.onclick = function(){
        if(countClicks > 0){
            countClicks--;
            containerClicks.innerText = countClicks;
        }else{
            alert("El contador esta en 0");
        }  
    }
    
    btnReset.addEventListener("click", function(){
        countClicks = 0;
        containerClicks.innerText = countClicks;
    });
});
    
    














//document.getElementById('container-clicks').style.backgroundColor = "#000";
//containerClicks.style.color = "#fff";