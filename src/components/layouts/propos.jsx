import Image from "next/image";
import warrenfly from "@src/assets/img/sticker.png";


let styles = {
h1:"text-slate-500  uppercase text-center text-4xl text-7xl hover:text-yellow-200 mt-10  font-raleway",
gridcols4:" lg:grid lg:grid-cols-1  pt-12 mt-52 text-center ",
p:"text-slate-500 pl-5 text-start mt-10  text-lg  md:p-5 font-raleway",
fontP:"text-center",
cv:"border-2 rounded-full p-2 pl-4 pr-4 w-44 mt-5 text-white border-slate-500 lg:ml-52 md:ml-10 hover:bg-slate-700 hover:shadow-lg hover:shadow-yellow-200  font-raleway",
};
const Me = () => {
    return (

 
<div data-aos="fade-right" data-aos-once="false" class="flex justify-center mt-80 font-raleway">
  <div id="a propos" class="flex flex-col md:flex-row md:max-w-xl rounded-lg border-2 p-10  pr-1 pl-5  border-slate-500  shadow-lg">
<i  class="fa-solid fa-address-card text-slate-500 text-7xl text-center mt-64 hover:text-yellow-200 hover:shadow-lg hover:shadow-yellow-200 hover:rotate-90 transition duration-150"></i>
    <div class="p-5 flex  flex-col justify-start">
    <p className={styles.p}>
      j&rsquo;ai 21 ans j&rsquo;habite a meaux (77). Avant cette formation  j&rsquo;ai fait un CAP SDG signalétique,décors,graphique
        puis j&rsquo;ai fait  une  formation digi code qui est une formation organiser par la mission local pour apprendre les métier du numérique graphiste,developpement web, impression 3D ect , puis j&rsquo;ai  fait une formation qui est  openclassroom pendant 4 mois dans le développement web. Je recherche actuellement un stage du 9 janvier au 3 mars 2023 pour finaliser ma formation et gagné en compêtences.
      </p>
      <div className="grid grid-cols-3 mr-10">


<a target="_blank" href="/docs/warren-jarron-cv-développeur-web.pdf">

<button type="button" className={styles.cv}>Mon cv</button>
</a>
</div>
    </div>
    </div>
    </div>


  
   
  );
};

export default Me;