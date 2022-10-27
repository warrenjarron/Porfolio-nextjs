import Layout from "../../src/components/layouts/layout";
import Content from "./content";
// import  CurtainMenu  from "@src/components/layouts/CurtainMenu";
// import Slider from "@src/components/js/slider";
// import ExampleComponent from "@src/components/js/typeAnimation";
import Name from "@src/components/layouts/body";
import Footer from "@src/components/layouts/footer";

const HomePage = () => {
  return (
    <>
      
          <Name />
          <Footer />
      {/* <ExampleComponent /> */}
      {/* <Slider /> */}
      {/* <CurtainMenu /> */}
      {/* <button id="btn-1">click</button> */}
      {/* <Layout children={<Content />} /> */}
    </>
  );
};

export default HomePage;
