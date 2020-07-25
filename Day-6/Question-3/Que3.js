const title = document.getElementById('title');
const name= prompt("Enter your name:", "Anonymous");

title.innerText += name;


//clock
const ctime = document.getElementById('time');

function clock(){
    let date= new Date();
    let time= date.toLocaleTimeString(); 
    ctime.innerText=time;
}

setInterval(clock,1000);

//Dark mode

function toggle() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
