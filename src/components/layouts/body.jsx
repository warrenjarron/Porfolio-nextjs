import Image from "next/image";
import war from "@src/assets/img/laptop wave.png";
import Typing from "@src/components/layouts/typeAnimation";
import { ProductionQuantityLimitsRounded } from "@mui/icons-material";


let styles = {
    h1: "uppercase text-white font-great text-center text-4xl border-2 border-yellow-100 p-5 bg-slate-500 ",
    h2: "uppercase text-white font-raleway text-center mt-10 text-2xl ",
    imgg:"justify-center ",
    // projet:" border-r-2 p-5 rounded-r-full text-white  mt-5 text-center w-52  hover:bg-slate-500",
    textcolor:"text-white font-raleway    text-start pl-2 p-3 lg:w-72 w-60 border-2 border-slate-500 lg:ml-52 md:ml-10 hover:shadow-lg hover:shadow-yellow-200",

    contact:"border-2 rounded-full p-2 mt-5 text-white border-slate-500 lg:ml-52 md:ml-10 hover:bg-slate-700 hover:shadow-lg hover:shadow-yellow-200",
    war:"ml-24 ",
    headerbloc:"justify-center lg:grid grid-cols-3 mt-52 md:w-8/12 ml-5 items-center lg:w-96",
    savoirPlus:"border-2 rounded-full p-2 mt-5 text-white border-slate-500 lg:ml-52 md:ml-10 hover:bg-slate-700 hover:shadow-lg hover:shadow-yellow-200 ml-2 lg:w-32"
};
const Name = () => {
    return (
<>
<h1 className={styles.h1}>warren jarron </h1>
<h2 className={styles.h2}>Développeur web&nbsp;<Typing />
</h2>

<div  className={styles.headerbloc}>
<Image  className={styles.war} src={war} width="250px" height="300px"/>
<div>
<div>
<p className={styles.textcolor}>Bienvenue sur Mon portfolio, je suis Warren jarron, Actuellement je suis une formation de développeur web et web  mobile chez l&rsquo;ACS (Access Code School).    </p>
<a href="#contacte">

<button className={styles.contact}>contacter</button>
</a>
<a href="#a propos">

<button className={styles.savoirPlus}>en savoir plus</button>
</a>
</div>
</div>
</div>
</>
 
    )     

}


export default Name;