let bg = document.querySelector('.bg');
let colours = ["INDIANRED","LIGHTCORAL","SALMON","LIGHTSALMON"];
let index = 0;

function change() {
  if(index >= colours.length){ 
      clearInterval(timer);
     }
  
  bg.style.backgroundColor = colours[index++];
}


let timer = setInterval(change, 5000); 


