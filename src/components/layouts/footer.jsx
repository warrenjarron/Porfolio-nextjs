import Image from "next/image";
import svggit from "@src/assets/img/github.svg";
import svglink from "@src/assets/img/linkedin.svg";
import svgcv from "@src/assets/img/resume.svg";
import document from "@src/assets/img/document.svg";
import pngagency from "@src/assets/img/wana-agency-img.png";
import pngshop from "@src/assets/img/wana-shop-img.png";
import pngcv from "@src/assets/img/cv-site.png";
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
import svgoffice from "@src/assets/img/microsoft-office.svg";
import cosmonote from "@src/assets/img/spacesuit-float.png";
import cosmoread from "@src/assets/img/space-suit-reading.png";

let styles = {
  docimg:"",
  col1:"text-white lg:grid lg:grid-cols-4  text-center p-10  mt-52 border-4  border-slate-500",
  skills1:"      rounded-xl text-slate-900 mt-20 ",
  skillsh1:"uppercase text-center text-xl pt-5 ",
  skillsh2:"uppercase text-center border-2 border-slate-900 mt-10 ",
  skillsp1:"text-center   pt-10 ",
  skills2h2:"uppercase text-center border-2 border-slate-900 mt-10 ",
  skills2p2:"text-center p-7 text-slate-500 sm:w-6/12   ",
  footer:"justify-center  text-center mt-96 ",
  img:" h-auto hover:rotate-6 transition duration-150 ",
  bg:"text-slate-900 text-xl text-center ",
  gridcols4:"   pt-12 ",
  gridcols2:" lg:grid lg:grid-cols-2  pt-12 ",
  divflexcol:"",

  techno:"uppercase border-r-4 border-slate-500 text-slate-500 text-2xl  hover:text-yellow-200 mt-52" ,
  imgPadding:" mt-10 hover:rotate-6 transition duration-150 hover:bg-slate-200",
  mail:"hover:text-yellow-200",
  Padding:" pt-5",
  Paddingnext:"pt-5 bg-white  hover:rotate-6 transition duration-150 hover:shadow-lg hover:shadow-yellow-200 p-5",
  soft:"uppercase border-r-4 border-slate-500 text-slate-500 text-2xl flex flex-col h-auto hover:text-yellow-200 lg:text-7xl" ,
  link:"uppercase text-4xl text-slate-500 border-t-4 border-slate-500 mt-52 ",
  compet:"text-slate-500 mt-52 text-4xl uppercase lg:text-7xl  justify-center p-5 hover:text-yellow-200",
  gridcol3P:"",
  footC:"text-slate-500 border-t-2 border-slate-500",
  phone:"hover:text-yellow-200",
  fontA:"mt-52 text-slate-500 hover:rotate-90 transition duration-150",
  user:"text-center mt-60 text-4xl text-slate-500   hover:rotate-6 transition duration-150",
  compfont:"text-7xl mt-60 text-slate-500 ",
 
};
const Footer = () => {

  return (
    
    <footer className={styles.footer}>
    
          <div data-aos="zoom-in-down" data-aos-once="false"  className=" lg:grid lg:grid-cols-3 ">
  
<div class="flex justify-center mt-10 lg:ml-5 lg:mb-5 lg:mr-5">
  <div class="rounded-lg shadow-lg shadow-black bg-slate-900 max-w-sm hover:shadow-lg hover:shadow-yellow-200">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <Image src={pngagency} class="rounded-t-lg"/>
    </a>
    <div class="">
      <h5 class="text-gray-500 text-xl font-medium mb-2">Projet Wana agency</h5>
      <p class="text-gray-600 text-base mb-4">
      Dans le but de se projet était de crée une agence fictive en groupe.
      </p>
      <a href="">
      <button type="button" class="mb-5 inline-block px-6 py-2.5 border-2 border-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-400 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">voir</button>
      </a>
    </div>
  </div>
</div>

<div class="flex justify-center mt-10 lg:mb-5 lg:mr-5">
  <div class="rounded-lg shadow-lg shadow-black bg-slate-900 max-w-sm hover:shadow-lg hover:shadow-yellow-200">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <Image src={pngshop} class="rounded-t-lg"/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-500 text-xl font-medium lg:mb-2"> accueil de la boutique</h5>
      <p class="text-gray-600 text-base lg:mb-4">
      Création d&rsquo;une boutique depuis un CMS (Wordpress) en groupe.
      </p>
      <a href="https://wana-agency.netlify.app/">

      <button type="button" class="   inline-block px-6 py-2.5 border-2 border-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-400 hover:shadow-lg focus:bg-bslate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">voir</button>
      </a>
    </div>
  </div>
</div>
<div class="flex justify-center mt-10 lg:mb-5 lg:mr-5">
  <div class="rounded-lg shadow-lg shadow-black bg-slate-900 max-w-sm hover:shadow-lg hover:shadow-yellow-200">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <Image src={pngcv} class="rounded-t-lg" />
    </a>
    <div class="p-6">
      <h5 class="text-gray-500 text-xl font-medium mb-2">Création d&rsquo;un cv </h5>
      <p class="text-gray-600 text-base mb-4">
      Site fait en HTML5 CSS3 vanilla sans tailwind.css.
      </p>
      <a href="https://warren-jarron-cv.netlify.app/">

      <button type="button" class=" inline-block px-6 py-2.5 border-2 border-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-400 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-500 active:shadow-lg transition duration-150 ease-in-out">voir</button>
      </a>
    </div>
  </div>
</div>
            </div>
            <div className={styles.compfont}>

          <i  class="fa-solid fa-head-side-virus  hover:text-yellow-200 hover:shadow-lg hover:shadow-yellow-200 hover:rotate-6 transition duration-150"></i>
                  </div>
                  <h1 data-aos="zoom-in" data-aos-once="false" className={styles.compet}>Compêtences</h1>
                  <Image src={cosmoread} width="250px" height="300px" />
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
                     <div className={styles.Padding}>
        
                  <Image className={styles.imgPadding} src={svgfigma} width="40%" height="40px"  />
                    </div>
                      <div className={styles.Padding}>

                        
                  <Image className={styles.imgPadding} src={svgoffice} width="40%" height="50px"  />
                      </div>
                    </div>
                       </div>
                  
                
                <div className={styles.user}>

                <i data-aos="zoom-in-down" data-aos-once="false" class="fa-solid fa-address-book hover:rotate-90 transition duration-150 hover:text-yellow-200  flex justify-center"></i>
                </div>
            <div data-aos="zoom-out-right" data-aos-once="false" className={styles.gridcols2} >
           
                <h1 className={styles.soft}>Soft skills</h1> 
                <p className={styles.skills2p2}>
                    Adaptabilité / Créativité / rigoureux / Patience / Déterminé  <br />/ curieux / a l&apos;écoute / Coopératif </p>
            </div>
            
             <Image src={cosmonote} width="250px" height="300px" className="mt-10" />
             <div class="flex justify-center">

            </div>
            <div className={styles.fontA} id="contacte">
            <i data-aos="zoom-in-down" data-aos-once="false" class="fa-solid fa-link text-7xl flex justify-center hover:text-yellow-200"></i>
            </div>
            <div data-aos="zoom-out-right" data-aos-once="false"  className={styles.col1}>
                {/*  Col 1 */}
             
                <div className={styles.img}>
                    <a href="https://github.com/warrenjarron"  rel="noreferrer" target="_blank">
                  @WarrenJarron
                <Image src={svggit}   width="50px" height="30px"  />
                    </a>
                </div>
                {/* Col 2 */}
                <div className={styles.img} >
                    <a href="https://www.linkedin.com/in/warren-jarron/"  rel="noreferrer" target="_blank" >
                    @WarrenJarron
                <Image src={svglink}   width="50%" height="30px"/>
                    </a>
                </div>
                {/* Col 3 */}
                <div className={styles.img}>
                  <a href="https://warren-jarron-cv.netlify.app/" rel="noreferrer" target="_blank">

                <Image src={svgcv}   width="30%" height="30px"  />
                  </a>
                </div>
                <div className={styles.footC}>

                <a className={styles.mail} href="mailto:warrenj.jarron@gmail.com">warrenj.jarron@gmail.com</a>
                <br /><a className={styles.phone} href="tel:0658956410"><i class=" fa-solid fa-phone text-xl mt-10 hover:rotate-90 transition duration-150"></i>   </a>
                
                
                </div>
            </div>
            
    </footer>
        );
          };
   

          export default Footer;