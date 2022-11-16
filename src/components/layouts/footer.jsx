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
import svgphotoshop from "@src/assets/img/Photoshop.svg";
import svgillustrator from "@src/assets/img/illustrator.svg";
import svgfigma from "@src/assets/img/figma.svg";
import svgoffice from "@src/assets/img/microsoft-office.svg";

let styles = {
  docimg:"",
  col1:"text-white lg:grid lg:grid-cols-3  text-center p-10  mt-52 border-4  border-slate-500",
  skills1:"    grid  rounded-xl text-slate-900 mt-20 ",
  skillsh1:"uppercase text-center text-xl pt-5 ",
  skillsh2:"uppercase text-center border-2 border-slate-900 mt-10 ",
  skillsp1:"text-center   pt-10 ",
  skills2h2:"uppercase text-center border-2 border-slate-900 mt-10 ",
  skills2p2:"text-center p-7 text-slate-500 sm:w-6/12 lg:w-11/12",
  footer:"justify-center  text-center mt-96 ",
  img:" h-auto ",
  bg:"text-slate-900 text-xl text-center ",
  gridcols4:" lg:grid lg:grid-cols-2  pt-12 ",
  gridcols2:" lg:grid lg:grid-cols-3  pt-12 ",
  divflexcol:"   ",
  techno:"uppercase border-r-4 border-slate-500 text-slate-500 text-2xl flex flex-col" ,
  imgPadding:"mt-10",
  // svgpHtml:"pt-8",
  // cssSvg:"pt-5",
  // jsSvg:"pt-5",
  // reactSvg:"pt-5",
  // nodeSvg:"pt-5",
  // nextSvg:"pt-5",
  // tailSvg:"pt-5",
  Padding:"pt-5",
  Paddingnext:"pt-5 bg-white",
  soft:"uppercase border-r-4 border-slate-500 text-slate-500 text-2xl flex flex-col h-auto" ,
  link:"uppercase text-4xl text-slate-500 border-t-4 border-slate-500 mt-52 ",
  compet:"text-slate-500 mt-52 text-4xl uppercase shadow-slate-200 shadow-lg flex justify-center p-5",
  gridcol3P:"lg:grid lg:grid-cols-3",
  footC:"text-slate-500 border-t-2 border-slate-500",
 


}
const Footer = () => {
  return (
    <footer className={styles.footer}>
          {/* <div id="carouselExampleCaptions" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
              <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
              ></button>
              <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
              ></button>
              <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
              ></button>
              </div>
              <div class="carousel-inner relative w-full overflow-hidden">
              <div class="carousel-item active relative float-left w-full">
                <a href="">

              <Image
              src={pngcv}
              class="block w-full"
              alt="..."
              width="650"
              height="600px"
              />
                </a>
              <div class="carousel-caption hidden md:block absolute text-center">
              <h5 class="text-xl" className={styles.bg}>Création d'un cv </h5>
              <p>Site fait en HTML5 CSS3 vanilla sans tailwind.css.</p>
              </div>
              </div>
            <div class="carousel-item relative float-left w-full">
              <a href="">

            <Image
            src={pngagency}
            class="block w-full"
            alt="..." width="650px"
            height="600px"
            />
              </a>
        <div class="carousel-caption hidden md:block absolute text-center">
          <h5 class="text-xl">Projet Wana agency</h5>
          <p>Dans le but de se projet était de crée une agence fictive en groupe.</p>
        </div>
      </div>
      <div class="carousel-item  float-left w-full">
        <a href="">

        <Image
        src={pngshop}
        width="650px"
        height="600px"
        />
        </a>
        <div class="carousel-caption hidden md:block absolute text-center">
          <h5 class="text-xl">Création  d'une accueil de la boutique  </h5>
        <p>Création d'une boutique depuis un CMS (Wordpress) en groupe.</p>
       </div>
      </div>
    </div>
    <button
    class="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="prev"
    >
    <span class="carousel-control-prev-icon inline-block bg-no-repeat bg-yellow-900 rounded-full w-16 h-16" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button
    class="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
    type="button"
    data-bs-target="#carouselExampleCaptions"
    data-bs-slide="next"
    >
    <span class="carousel-control-next-icon inline-block bg-no-repeat bg-yellow-900  rounded-full w-16 h-16  w- " aria-hidden="true"></span>
    <span class="visually-hidden ">Next</span>
  </button>
</div> */}

<div className=" lg:grid lg:grid-cols-3">
  
<div class="flex justify-center mt-10 ml-5">
  <div class="rounded-lg shadow-lg shadow-black max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <Image src={pngagency} class="rounded-t-lg"  alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-500 text-xl font-medium mb-2">Projet Wana agency</h5>
      <p class="text-gray-600 text-base mb-4">
      Dans le but de se projet était de crée une agence fictive en groupe.
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 border-2 border-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-400 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">voir</button>
    </div>
  </div>
</div>

<div class="flex justify-center mt-10 ml-5">
  <div class="rounded-lg shadow-lg shadow-black bg-slate-900 max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <Image src={pngshop} class="rounded-t-lg"  alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-500 text-xl font-medium mb-2"> accueil de la boutique</h5>
      <p class="text-gray-600 text-base mb-4">
      Création d'une boutique depuis un CMS (Wordpress) en groupe.
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 border-2 border-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-400 hover:shadow-lg focus:bg-bslate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">voir</button>
    </div>
  </div>
</div>
<div class="flex justify-center mt-10 ">
  <div class="rounded-lg shadow-lg shadow-black  max-w-sm">
    <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
      <Image src={pngcv} class="rounded-t-lg"  alt=""/>
    </a>
    <div class="p-6">
      <h5 class="text-gray-500 text-xl font-medium mb-2">Création d'un cv </h5>
      <p class="text-gray-600 text-base mb-4">
      Site fait en HTML5 CSS3 vanilla sans tailwind.css.
      </p>
      <button type="button" class=" inline-block px-6 py-2.5 border-2 border-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-400 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-500 active:shadow-lg transition duration-150 ease-in-out">voir</button>
    </div>
  </div>
</div>
</div>
                  <h1 className={styles.compet}>Compêtences</h1>
                <div  className={styles.gridcols4}>
                  <h1 className={styles.techno}>
                    Technologie utilisé
                    
                  </h1>
                  <div className={styles.divflexcol}>
                    
                    <div className={styles.Padding}>
                       
                  <Image className={svghtml} src={svghtml} width="50%" height="40px" />
                    </div>
                      
                    <div className={styles.Padding}>
                       
                  <Image className={styles.imgPadding} src={svgcss} width="50%" height="40px"  />
                    </div>
                      
                    <div className={styles.Padding}>
                       
                  <Image className={styles.imgPadding} src={svgjs} width="50%" height="40px"  /> 
                    </div>
                      
                    <div className={styles.Padding}>
                       
                   <Image  className={styles.imgPadding} src={svgreact} width="50%" height="40px"  />
                    </div>
                      
                    <div className={styles.Padding}>
                       
                   <Image className={styles.imgPadding} src={svgnode} width="50%" height="49px"  />
                    </div>
                   
                   <div className={styles.divflexcol}>

                      
                   <div className={styles.Padding}>
                       
                   <Image className={styles.Paddingnext} src={svgnext} width="50%" height="40px " />
                       </div>
                         
                    <div className={styles.Padding}>
                       
                   <Image className={styles.imgPadding} src={svgtailwind} width="50%" height="40px"  />
                       </div>
                         
                    <div className={styles.Padding}>
                       
                   <Image className={styles.imgPadding} src={svgwebpack} width="50%" height="40px"  />
                       </div>
                         
                    <div className={styles.Padding}>
                       
                   <Image className={styles.imgPadding} src={svgwordpress} width="50%" height="40px"  />
                       </div>
                         
                    <div className={styles.Padding}>
                       
                   <Image className={styles.imgPadding} src={svgphotoshop} width="50%" height="40px"  />
                       </div>
                         
                    <div className={styles.Padding}>
                       
                   <Image className={styles.imgPadding} src={svgillustrator} width="50%" height="40px"  />
                       </div>
                  <div className={styles.divflexcol}>
                      
                  <div className={styles.Padding}>
                       
                  <Image className={styles.imgPadding} src={svgfigma} width="50%" height="40px"  />
                       </div>
                         
                    <div className={styles.Padding}>
                       
                  <Image className={styles.imgPadding} src={svgoffice} width="50%" height="50px"  />
                       </div>
                  </div>
                   </div>

                  </div>

                </div>
            
            <div className={styles.gridcols2} >

                <h1 className={styles.soft}>Soft skills</h1> 
                <p className={styles.skills2p2}>
                    Adaptabilité / Créativité / rigoureux / Patience / Déterminé  <br />/ curieux / a l&apos;écoute / Coopératif </p>
            </div>
           
                
            <div className={styles.col1}>
                {/*  Col 1 */}
                <div className={styles.img}>
                    <a href="https://github.com/warrenjarron"  rel="noreferrer" target="_blank">

                <Image src={svggit}   width="50px" height="30px"  />
                    </a>
                </div>
                {/* Col 2 */}
                <div className={styles.img} >
                    <a href="https://www.linkedin.com/in/warren-jarron/"  rel="noreferrer" target="_blank" >

                <Image src={svglink}   width="50%" height="30px"/>
                    </a>
                </div>
                {/* Col 3 */}
                <div className={styles.img}>
                <Image src={svgcv}   width="30%" height="30px"  />
                <div className={styles.footC}>

                <a href="mailto:warrenj.jarron@gmail.com">warrenj.jarron@gmail.com</a>
                <br /><a href="tel:0658956410">Tél:0658956410</a>
                </div>
                </div>
            </div>

           
                
                <div  data-aos="zoom-in" class="">
           </div>
            
</footer>

      
  )
 }
          export default Footer;