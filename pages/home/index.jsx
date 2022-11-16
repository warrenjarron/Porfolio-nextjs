import Layout from "../../src/components/layouts/layout";
// import Content from "./content";
// import  CurtainMenu  from "@src/components/layouts/CurtainMenu";
// import Slider from "@src/components/js/slider";
// import ExampleComponent from "@src/components/js/typeAnimation";
import Name from "@src/components/layouts/body";
import Footer from "@src/components/layouts/footer";
import Me from "@src/components/layouts/propos";
import Projet from "@src/components/layouts/projet";



const HomePage = () => {
  return (
    <>
    <Name /> 
   <Me/>
   <Projet/>
   <Footer />
    </>
  );
};


export default HomePage;
