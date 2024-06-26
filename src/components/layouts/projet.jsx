import Image from "next/image";
import pngagency from "@src/assets/img/wana-agency-img.png";
import pngshop from "@src/assets/img/wana-shop-img.png";
import svgcv from "@src/assets/img/resume.svg";
import pngcv from "@src/assets/img/cv-site.png";
import pngvd from "@src/assets/img/site-vision-decor.png";

let styles = {
  projet:
    " uppercase text-slate-500 text-center mt-72 hover: flex justify-center hover:text-yellow-200 text-7xl lg:text-7xl  font-raleway",
  footer: "justify-center  text-center mt-96  font-raleway",
};
const Projet = () => {
  return (
    <>
      <section className={styles.footer}>
        {/* data-aos="zoom-in-down" data-aos-once="false" */}
        <div className="text-center    items-center grid justify-center">
          <i class="text-center mt-72 hover: flex justify-center hover:text-yellow-200 text-7xl lg:text-7xl text-slate-500 fa-solid fa-list-check"></i>
        </div>
        <div className=" lg:grid lg:grid-cols-3  font-raleway">
          <div class="flex justify-center mt-10 lg:ml-5 lg:mb-5 lg:mr-5">
            <div class="rounded-lg shadow-lg shadow-black bg-slate-900 max-w-sm hover:shadow-lg hover:shadow-yellow-200">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image src={pngagency} class="rounded-t-lg" />
              </a>
              <div class="   p-6">
                <h5 class="text-gray-500 text-xl font-medium lg:mb-2 ">
                  Projet Wana agency
                </h5>
                <p class="text-gray-600 text-base lg:mb-4  mb-4">
                  le but de se projet était de crée une agence fictive en
                  groupe.
                </p>
                <a href="https://wana-agency.netlify.app/">
                  <button
                    type="button"
                    class="   md:mt-7  lg:mt-1 inline-block px-6 py-2.5 border-2 border-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-400 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    voir
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div class="flex justify-center mt-10 lg:mb-5 lg:mr-5  font-raleway">
            <div class="rounded-lg shadow-lg shadow-black bg-slate-900 max-w-sm hover:shadow-lg hover:shadow-yellow-200">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image src={pngvd} class="rounded-t-lg" />
              </a>
              <div class="p-6">
                <h5 class="text-gray-500 text-xl font-medium lg:mb-2">
                  {" "}
                  Accueil du site
                </h5>
                <p class="text-gray-600 text-base lg:mb-4 mb-4">
                  Refonte graphique d&rsquo;un site d'entreprise de signalétique CMS (Wordpress).
                </p>
                <a href="https://www.visiondecor.fr/">
                  <button
                    type="button"
                    class=" md:mt-7 lg:mt-1  inline-block px-6 py-2.5 border-2 border-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-400 hover:shadow-lg focus:bg-bslate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    voir
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-once="false"
            class="flex justify-center mt-10 lg:mb-5 lg:mr-5  font-raleway"
          >
            <div class="rounded-lg shadow-lg shadow-black bg-slate-900 max-w-sm hover:shadow-lg hover:shadow-yellow-200">
              <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
                <Image src={pngcv} class="rounded-t-lg" />
              </a>
              <div class="p-6">
                <h5 class="text-gray-500 text-xl font-medium mb-2">
                  Création d&rsquo;un cv{" "}
                </h5>
                <p class="text-gray-600 text-base mb-4">
                  Site fait en HTML5 CSS3 vanilla sans tailwind.css.
                </p>
                <a href="https://warren-jarron-cv.netlify.app/">
                  <button
                    type="button"
                    class=" inline-block px-6 py-2.5 border-2 border-slate-500 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-slate-400 hover:shadow-lg focus:bg-slate-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-slate-500 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    voir
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projet;
