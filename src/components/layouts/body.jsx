import Image from "next/image";
import imgg from "@src/assets/img/quality-content.png";
import moji from "@src/assets/img/warren-bitmoji.svg";
import war from "@src/assets/img/laptop wave.png";
import Typing from "@src/components/layouts/typeAnimation";
import { ProductionQuantityLimitsRounded } from "@mui/icons-material";


let styles = {
    h1: "uppercase text-white font-great text-center text-4xl border-2 border-yellow-100 p-5 bg-slate-500 ",
    h2: "uppercase text-white font-raleway text-center mt-10 text-2xl ",
    imgg:"justify-center ",
    // projet:" border-r-2 p-5 rounded-r-full text-white  mt-5 text-center w-52  hover:bg-slate-500",
    textcolor:"text-white font-raleway    text-start pl-2 p-3 lg:w-72 w-60 border-2 border-slate-500 lg:ml-52 md:ml-10 ",

    contact:"border-2 rounded-full p-2 mt-5 text-white border-slate-500 lg:ml-52 md:ml-10 hover:bg-slate-400",
    war:"ml-24",
    headerbloc:"justify-center lg:grid grid-cols-3 mt-52 md:w-8/12 ml-5 items-center lg:w-96"
};
const Name = () => {
    return (
<>
<h1 className={styles.h1}>warren jarron </h1>
<h2 className={styles.h2}>Développeur web&nbsp;<Typing />
</h2>

{/* <select className={styles.projet} name="Mes projet" id="">Mes projet
<option value="1">Mes projet</option>
<option value="2">réalisation2</option>
<option value="2">réalisation3</option>
</select> */}

<div  className={styles.headerbloc}>

<Image  className={styles.war} src={war} width="250px" height="300px"/>
<div>
<div>

<p className={styles.textcolor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reprehenderit minima, deleniti tempora quod voluptates odit eum, asperiores rem error illo inventore at est minus culpa necessitatibus rerum? Nostrum, tempora?</p>
<button className={styles.contact}>Contacter</button>
</div>
</div>
</div>




</>
 
    )     

}


export default Name;