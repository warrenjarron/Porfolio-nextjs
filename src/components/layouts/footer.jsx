import Image from "next/image";
import svggit from "@src/assets/img/github.svg";
import svglink from "@src/assets/img/linkedin.svg";
import svgcv from "@src/assets/img/resume.svg";
// import document from "@src/assets/img/document.svg";
// import pngagency from "@src/assets/img/wana-agency-img.png";
// import pngshop from "@src/assets/img/wana-shop-img.png";
// import pngcv from "@src/assets/img/cv-site.png";
// import svghtml from "@src/assets/img/html5.svg";
// import svgcss from "@src/assets/img/css3.svg";
// import svgjs from "@src/assets/img/js.svg";
// import svgreact from "@src/assets/img/reactjs.svg";
// import svgnode from "@src/assets/img/nodejs.svg";
// import svgnext from "@src/assets/img/nextjs.svg";
// import svgtailwind from "@src/assets/img/tailwindcss.svg";
// import svgwebpack from "@src/assets/img/webpack.svg";
// import svgwordpress from "@src/assets/img/wordpress.svg";
// import svgphotoshop from "@src/assets/img/photoshop.svg";
// import svgillustrator from "@src/assets/img/illustrator.svg";
// import svgfigma from "@src/assets/img/figma.svg";
// import svgoffice from "@src/assets/img/microsoft-office.svg";
import cosmonote from "@src/assets/img/spacesuit-float.png";
// import cosmoread from "@src/assets/img/space-suit-reading.png";

let styles = {
  docimg:"",
  col1:"text-white lg:grid lg:grid-cols-3  text-center p-10  mt-52 ",
  skills1:"      rounded-xl text-slate-900 mt-20 ",
  skillsh1:"uppercase text-center text-xl pt-5 ",
  skillsh2:"uppercase text-center border-2 border-slate-900 mt-10 ",
  skillsp1:"text-center   pt-10 ",
  skills2h2:"uppercase text-center border-2 border-slate-900 mt-10 ",
  skills2p2:"text-center p-7 text-slate-500 sm:w-6/12  border-r-2 border-slate-500 md:mt-10 text-xl",
  footer:"justify-center  text-center mt-96  font-raleway",
  img:" h-auto hover:rotate-6 transition duration-150 ",
  bg:"text-slate-900 text-xl text-center ",
  gridcols4:"   pt-12 ",
  gridcols2:" lg:grid lg:grid-cols-2  pt-12 ",
  divflexcol:"",

  techno:"uppercase  text-slate-500 text-4xl  hover:text-yellow-200 mt-52" ,
  imgPadding:"rounded-lg mt-10 hover:rotate-6 transition duration-150 hover:bg-slate-200",
  mail:"hover:text-yellow-200 ",
  Padding:" pt-5",
  Paddingnext:"pt-5 bg-white  hover:rotate-6 transition duration-150 hover:shadow-lg hover:shadow-yellow-200 p-5",
  soft:"uppercase border-r-4 border-slate-500 text-slate-500 text-7xl flex flex-col h-auto hover:text-yellow-200 lg:text-7xl" ,
  link:"uppercase text-4xl text-slate-500 border-t-4 border-slate-500 mt-52 ",
  compet:"text-slate-500 mt-52 text-7xl uppercase lg:text-7xl  justify-center p-5 hover:text-yellow-200",
  gridcol3P:"",
  footC:"text-slate-500 lg:grid lg:grid-cols-2 pb-20 text-center mt-10 hover:text-yellow-200 lg:ml-32 ",
  phone:"hover:text-yellow-200 ",
  fontA:"mt-52 text-slate-500 hover:rotate-90 transition duration-150",
  user:"text-center mt-60 text-4xl text-slate-500   hover:rotate-6 transition duration-150",
  compfont:"text-7xl mt-60 text-slate-500 ",
 
};
const Footer = () => {

  return (
    
    <footer className={styles.footer}>
  
            <div className="mt-32">

             <Image src={cosmonote} width="250px" height="300px" className="" />
            </div>
            
             <div class="flex justify-center">

            </div>
            <div className={styles.fontA} id="contacte">
            {/* <i  class="fa-solid fa-link text-7xl flex justify-center hover:text-yellow-200"></i> */}
            </div>
            <div  className={styles.col1}>
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
                      warren-jarron-cv.netlify.app
                <Image src={svgcv}   width="30%" height="30px"  />
                  </a>
                </div>
            </div>
                <div className={styles.footC}>
                  
                      <div>
                    

                <a className=" " href="mailto:warrenj.jarron@gmail.com">warrenj.jarron@gmail.com</a>
                      </div>
               <div>
                   

                <a className={styles.phone} href="tel:0658956410"> 
                 tél:0658956410  </a>
                   
               </div>

               

              
                
                
                </div>
            
    </footer>
        );
          };
   

          export default Footer;