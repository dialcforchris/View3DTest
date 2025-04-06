import View3D from "@egjs/view3d";
import "@egjs/view3d/css/view3d-bundle.min.css";

const view3D = new View3D("#view3d", {
  src: "https://github.com/KhronosGroup/glTF-Sample-Models/blob/main/2.0/ToyCar/glTF/ToyCar.gltf",
  envmap: "https://github.com/KhronosGroup/glTF-Sample-Models/blob/main/2.0/ToyCar/glTF/ToyCar_basecolor.png",
});


function Start() 
{
    view3D.play();
    Audio = new Audio("@Audio/3D.mp3");
    Audio.play();
}
