import Image from "next/image";
import imgg from "@src/assets/img/quality-content.png";
let styles = {
    h1: "uppercase text-white font-raleway text-center text-2xl border-2 border-yellow-100",
    h2: "uppercase text-white font-raleway text-center mt-10 text-xl",
    imgg:"justify-center ",
    
};
const Name = () => {
    return (
<>
<h1 className={styles.h1}>warren jarron</h1>
<h2 className={styles.h2}>Développeur web </h2>
<div className="justify-center flex mt-16">

<Image src={imgg}   width="200px" height="200x"/>
</div>
</>
 
    )     

}


export default Name;