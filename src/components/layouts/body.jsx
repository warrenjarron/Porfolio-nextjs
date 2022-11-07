import Image from "next/image";
import imgg from "@src/assets/img/quality-content.png";
import Typing from "@src/components/layouts/typeAnimation";
let styles = {
    h1: "uppercase text-white font-great text-center text-2xl border-2 border-yellow-100 p-5 bg-slate-500 ",
    h2: "uppercase text-white font-raleway text-center mt-10 text-xl",
    imgg:"justify-center",
    projet:"bg-yellow-100 p-5 rounded-r-full text-slate-900 mt-5",
    textcolor:"text-white font-raleway bg-slate-500 ",
    
};
const Name = () => {
    return (
<>
<h1 className={styles.h1}>warren jarron </h1>
<h2 className={styles.h2}>Développeur <Typing /> </h2>

<select className={styles.projet} name="Mes projet" id="">Mes projet
<option value="1">Mes projet</option>
<option value="2">réalisation2</option>
<option value="2">réalisation3</option>
</select>
<div className="justify-center flex mt-16 bg-slate-500">

<Image src={imgg}   width="200px" height="200px"/>

</div>
<p className={styles.textcolor}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi reprehenderit minima, deleniti tempora quod voluptates odit eum, asperiores rem error illo inventore at est minus culpa necessitatibus rerum? Nostrum, tempora?</p>

</>
 
    )     

}


export default Name;