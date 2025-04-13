
function playAudio() {
    var x = document.getElementById("audio");//createElement("AUDIO");
     x.play();

}

function pauseAudio() {
    var x = document.getElementById("audio");//createElement("AUDIO");
  x.pause();
}


function start() 
{
  
    var button = document.getElementById("button");
    button.textContent = "Stop";
    playAudio();
     const view3D = new View3D("#wrapper-el", {
     src: "../TestModel.gltf",
    envmap: "",});
    
    //view3D.Audio.src = "../3D.mp3";
    view3D.Audio = true;
    
    view3D.play();
    let audio = new Audio("../Audio/3D.mp3");
    audio.play();
}
