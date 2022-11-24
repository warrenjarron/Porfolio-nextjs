
import Name from "@src/components/layouts/body";
import Footer from "@src/components/layouts/footer";
import Me from "@src/components/layouts/propos";
import Projet from "@src/components/layouts/projet";
import Form from "@src/components/layouts/form";
import Soft from "@src/components/layouts/soft";
import Compêtence from "@src/components/layouts/competence";






const HomePage = () => {
  return (
    <>
    <Name /> 
   <Me/>
   <Projet/>
   <Compêtence/>
   <Soft />
   <Form/>
   <Footer />
   </>
  );
}


export default HomePage;
