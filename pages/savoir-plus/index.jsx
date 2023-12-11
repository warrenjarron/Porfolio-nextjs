
import Name from "@src/components/layouts/body";
import Footer from "@src/components/layouts/footer";
import Me from "@src/components/layouts/propos";
import Projet from "@src/components/layouts/projet";
import Form from "@src/components/layouts/form";
import Soft from "@src/components/layouts/soft";
import Compêtence from "@src/components/layouts/competence";
import Loader from "@src/components/layouts/loader/index.jsx";

import React, { useState, useEffect } from "react";

const Page2 = () => {
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, []);
  return loader ? (
   <Loader />

   ): ( <>
   
    <Name /> 
   <Me/>
  
   </>
  );
}


export default Page2;
