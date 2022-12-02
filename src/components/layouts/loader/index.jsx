import React from "react";
import cosmonote from "@src/assets/img/spacesuit-float.png";
import ParticlesAnimate from "@src/components/layouts/particles";
import Image from "next/image";

// import function for LOADER

// libray framerMotion

export default function Loader() {
  
  return (
    <div className="overflow-x-hidden overflow-y-hidden justify-center">
     <div className="flex justify-center animate-spin mt-24   ">
<Image src={cosmonote} width="250px" height="300px" className="transition delay-700" />
     </div>
     <div className=" text-center text-4xl ">

<h2 className="text-slate-500">WOAW CHARGEMENT!!!</h2>
     </div>


      {/* <MotionSky /> */}
      {/* <Countdown /> */}
     
      <ParticlesAnimate />
      
    </div>
    /* <Image
        className="h-full w-full animate-spin transition delay-700"
        src={LoaderImg}
      />
      <h2>Page en cours de chargement</h2>
<div className="w-20 h-20 rounded-full bg-black border-t-4 border-blue-500">Loading</div> */
  );
}