import Image from "next/image";
import cosmoread from "@src/assets/img/space-suit-reading.png";


import svghtml from "@src/assets/img/html5.svg";
import svgcss from "@src/assets/img/css3.svg";
import svgjs from "@src/assets/img/js.svg";
import svgreact from "@src/assets/img/reactjs.svg";
import svgnode from "@src/assets/img/nodejs.svg";
import svgnext from "@src/assets/img/nextjs.svg";
import svgtailwind from "@src/assets/img/tailwindcss.svg";
import svgwebpack from "@src/assets/img/webpack.svg";
import svgwordpress from "@src/assets/img/wordpress.svg";
import svgphotoshop from "@src/assets/img/photoshop.svg";
import svgillustrator from "@src/assets/img/illustrator.svg";
import svgfigma from "@src/assets/img/figma.svg";
// import svgoffice from "@src/assets/img/microsoft-office.svg";
let styles = {
    compfont:"text-7xl mt-60 text-slate-500 ",
    imgPadding:"rounded-lg mt-10 hover:rotate-6 transition duration-150 hover:bg-slate-200",
    Padding:" pt-5",
    Paddingnext:"pt-5 bg-white  hover:rotate-6 transition duration-150 hover:shadow-lg hover:shadow-yellow-200 p-5",
    comp:"justify-center  text-center mt-96  font-raleway",
};

const Compêtence = () => {
    return (

        <section className={styles.comp}>

        <div  className={styles.compfont}>

            <i  class="fa-solid fa-head-side-virus  hover:text-yellow-200 hover:shadow-lg hover:shadow-yellow-200 hover:rotate-6 transition duration-150"></i>
            </div>
            {/* <h1 data-aos="zoom-in" data-aos-once="false" className={styles.compet}>Compêtences</h1> */}
            <div className="mt-20">
            
            <Image src={cosmoread} width="250px" height="300px"  />
            </div>
            <div className="flex  justify-center"  data-aos="fade-up-right" data-aos-once="false" >
            <h1 className={styles.techno}>
            Technologie utilisé
                      
                    </h1>
                    
                    </div>
                    <div className="lg:grid lg:grid-cols-2 ">
                     
                    <div className="lg:flex-col lg:flex ">
                    
                    <div className={styles.Padding}>
                    
                    <Image className={styles.imgPadding} src={svghtml} width="50%" height="40px" />
                    </div>
                      
                    
                      
                    <div className={styles.Padding}>
                    
                    <Image className={styles.imgPadding} src={svgcss} width="40%" height="40px"  />
                    </div>
                    
                    
                    
                    <div className={styles.Padding}>
                    
                    <Image className={styles.imgPadding} src={svgjs} width="40%" height="40px"  /> 
                    </div>
                
                    
                      
                    <div className={styles.Padding}>
  
                     <Image  className={styles.imgPadding} src={svgreact} width="40%" height="40px"  />
                         </div>
                         
                         
                      
                         <div className={styles.Padding}>
                         
                     <Image className={styles.imgPadding} src={svgnode} width="40%" height="49px"  />
                     </div>
                     
                     <div className={styles.Padding}>
                     
                     <Image className={styles.imgPadding} src={svgfigma} width="40%" height="40px"  />
                     </div>
                     
                     </div>
                     <div className="lg:flex lg:flex-col">
                     
                     
                     
                         <div className={styles.Padding}>
                         
                         <Image className={styles.Paddingnext} src={svgnext} width="50px" height="40px " />
                         </div>
                         
                           
                         
                         <div className={styles.Padding}>
                         
                     <Image className={styles.imgPadding} src={svgtailwind} width="40%" height="40px"  />
                     </div>
                      
                     <div className={styles.Padding}>
                     
                     <Image className={styles.imgPadding} src={svgwebpack} width="40%" height="40px"  />
                     </div>
                     
                     <div className={styles.Padding}>
                     <Image className={styles.imgPadding} src={svgwordpress} width="40%" height="40px"  />
                     
                     </div>
                     <div className={styles.Padding}>
  
                     <Image className={styles.imgPadding} src={svgphotoshop} width="40%" height="40px"  />
                     </div>
                         <div className={styles.Padding}>
  
                         <Image className={styles.imgPadding} src={svgillustrator} width="40%" height="40px"  />
                       </div>
                       </div>
                         </div>
        </section>
                    
                       )
                   };

                   export default Compêtence;