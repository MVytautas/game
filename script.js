function color() {
  let root = document.documentElement
  root.style.setProperty('--color', "hsl("+Math.floor(Math.random()*360)+"deg,50%,50%)");  
}
//color()

function allowDrop(ev) {
  ev.preventDefault();
}

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.className);   
}

function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text")
  
  if(ev.target.className == data){
     ev.target.classList.add('dropped')
     document.querySelector('.'+data+"[draggable='true']").classList.add('done')
    
    if(document.querySelectorAll('.dropped').length == 3) {
      document.querySelector('#puz').style.border = 'none'  
      document.querySelector('#puz').style.animation = 'allDone 1s linear forwards'  

      var x = document.getElementById("myDIV");
       x.querySelector(".finish").innerHTML = "Done!";

    }    
  }  
}

function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}