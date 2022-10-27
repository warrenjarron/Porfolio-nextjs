import Image from "next/image";
import svggit from "@src/assets/img/github.svg";
import svglink from "@src/assets/img/linkedin.svg";
import svgcv from "@src/assets/img/resume.svg";
import document from "@src/assets/img/document.svg";

let styles = {
    document:"pt-5!important",
    col1:"text-white grid grid-cols-3 text-center mt-20 ",
    skills1:"bg-yellow-100    grid  rounded-xl text-slate-900 mt-20",
    skillsh1:"uppercase text-center text-xl pt-5 ",
    skillsh2:"uppercase text-center border-2 border-slate-900 mt-10 ",
    skillsp1:"text-center   pt-10 ",
    skills2h2:"uppercase text-center border-2 border-slate-900 mt-10",
    skills2p2:"text-center p-7",
    footer:"justify-center grid   text-center",
    img:" "
}
const Footer = () => {
    return (
        <footer className={styles.footer}>

            <div className={styles.col1}>
                {/*  Col 1 */}
                <div className={styles.img}>
                    <a href="https://github.com/warrenjarron" target="_blank">

                <Image src={svggit}   width="50px" height="50px"  />
                    </a>
                </div>
                {/* Col 2 */}
                <div className={styles.img} >
                    <a href="https://www.linkedin.com/in/warren-jarron/" target="_blank" >

                <Image src={svglink}   width="50px" height="50px"/>
                    </a>
                </div>
                {/* Col 3 */}
                <div className={styles.img}>
                <Image src={svgcv}   width="50px" height="50px"  />
                </div>
            </div>

            <div className={styles.skills1}>
                <Image  src={document}   width="4%" height="40px"  />
                <h1 className={styles.skillsh1}>
                Compêtences</h1>
                <h2 className={styles.skillsh2}>Hard skills</h2>
                <p className={styles.skillsp1} > HTML5 / CSS  / javascript <br  /> React / nodejs / nextjs <br /> Tailwind.css / Webpack / Wordpress <br /> Photoshop /  illustrator / Figma / Pack office /
                <h2 className={styles.skills2h2}>Soft skills</h2> 
                <p className={styles.skills2p2}>
                    Adaptabilité / Créativité / rigoureux / Patience / Déterminé / curieux / A l&apos;écoute / Coopératif
                </p>
                </p>

            </div>
        </footer>
    )
}

export default Footer;
