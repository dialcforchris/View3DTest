




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
     src: "https://github.com/KhronosGroup/glTF-Sample-Models/blob/main/2.0/ToyCar/glTF/ToyCar.gltf",
     envmap: "https://github.com/KhronosGroup/glTF-Sample-Models/blob/main/2.0/ToyCar/glTF/ToyCar_basecolor.png",
  });
    view3D.setCamera(0, 0, 0, 0, 0, 0);
    view3D.Audio = true;
    
    view3D.play();
    let audio = new Audio("../Audio/3D.mp3");
    audio.play();
}
