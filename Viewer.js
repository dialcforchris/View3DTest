//import View3D, { AROverlay } from "@egjs/view3d";

function playAudio() {
    var x = document.getElementById("audio");//createElement("AUDIO");
     x.play();

}

function pauseAudio() {
    var x = document.getElementById("audio");//createElement("AUDIO");
  x.pause();
}

const createdScene = false;

function start() 
{
  
    var button = document.getElementById("button");
    if(button.textContent == "Stop")
    {
        button.textContent = "Start XR";
        pauseAudio();
    }
    else
    {
        playAudio();
        button.textContent = "Stop";
    }
    if(!createdScene)
    {
      const view3D = new View3D("#wrapper-el", {
     src: "../View3DTest/TestModel.gltf",
    envmap: "",});
   
    //view3D.loadPlugins(new AROverlay());
    
    //view3D.Audio.src = "../3D.mp3";
    //view3D.Audio = true;
    //view3D.play();
    let audio = new Audio("../Audio/3D.mp3");
    audio.play();
    createdScene = true;
  }
}
