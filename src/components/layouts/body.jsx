import Image from "next/image";
import war from "@src/assets/img/laptop wave.png";
import Typing from "@src/components/layouts/typeAnimation";
import { ProductionQuantityLimitsRounded } from "@mui/icons-material";
import ParticlesAnimate from "@src/components/layouts/particles";


let styles = {
    h1: "  text-white font-montecarlo text-center md:text-5xl lg:text-7xl border-2 border-slate-500 p-5  lg:text-5xl ",
    h2: "uppercase text-white font-raleway text-center mt-10 text-4xl",
    imgg:"justify-center",
    textcolor:"text-white font-raleway    text-start pl-2 p-3 md:w-52  lg:w-60  hover:shadow-lg hover:shadow-yellow-200",
    contact:"border-2 rounded-full p-2 lg:mr- mt-5 text-white border-slate-500  md:ml-10  hover:bg-slate-700 hover:shadow-lg hover:shadow-yellow-200 text-sm  font-raleway",
    war:"",
    headerbloc:"justify-center lg:grid lg:grid-cols-2 mt-52 md:w-8/12  items-center lg:",
    savoirPlus:"border-2 rounded-full p-2 w-32 mt-5 text-white border-slate-500  md:ml-10 hover:bg-slate-700 hover:shadow-lg hover:shadow-yellow-200 text-sm   font-raleway ",
    yellowspan:"text-yellow-200",
    head:"justify-center ",
    grid2:"grid grid-cols-2 ",
    gridimgp:"grid grid-cols-3 border-2 border-slate-500 rounded-lg",
};
const Name = () => {
    return (
    
<>


<h1 className={styles.h1}><span className={styles.yellowspan}>W</span>arren <span className={styles.yellowspan}>J</span>arron </h1>
<h2 className={styles.h2}><span className="text-yellow-200">D</span>éveloppeur we<span className="text-yellow-200">b</span>&nbsp;<span className="text-yellow-200"><Typing />
    </span>
</h2>

<div data-aos="fade-right" data-aos-once="false" class="flex justify-center mt-24 font-raleway">
  <div class="flex flex-col md:flex-row md:max-w-xl rounded-lg border-2 p-10  pr-20  border-slate-500  shadow-lg">
    <Image class=" w-full h-96 md:h-auto object-cover md:w-48 md:rounded-none md:rounded-l-lg " src={war} width="700%" height="500px" alt="" />
    <div class="p-6 flex flex-col justify-start">
      <p class="text-slate-500 text-base mb-4">
      Bienvenue sur Mon portfolio, je suis Warren jarron, Actuellement je suis une formation de développeur web et web  mobile chez l&rsquo;ACS (Access Code School).
      </p>
      <div className="grid grid-cols-2">

      <a href="#contacte">
<button className={styles.contact}>Contacter</button>
</a>
<a  className="ml-5" href="#a propos">
<button className={styles.savoirPlus}>En savoir plus</button>
</a>
      </div>
    </div>
  </div>
</div>
<ParticlesAnimate/>
{/* <div className={styles.head}>

<div data-aos="fade-right" data-aos-once="false" className={styles.headerbloc}>
<div className={styles.gridimgp}>

<Image  className={styles.war} src={war} width="250px" height="300px"/>
<div>
<div>
<p className={styles.textcolor}>Bienvenue sur Mon portfolio, je suis Warren jarron, Actuellement je suis une formation de développeur web et web  mobile chez l&rsquo;ACS (Access Code School).    </p>
</div>
<div className={styles.grid2}>


<a href="#contacte">
<button className={styles.contact}>Contacter</button>
</a>
<a  className="ml-5" href="#a propos">
<button className={styles.savoirPlus}>En savoir plus</button>
</a>
</div>
</div>
</div>
</div>
</div> */}
</>
 
    );     

};


export default Name;