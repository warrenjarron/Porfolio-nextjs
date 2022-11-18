
let styles = {
h1:"text-slate-500 border-r-2 border-slate-500  uppercase text-center text-4xl  hover:text-yellow-200 mt-10",
gridcols4:" lg:grid lg:grid-cols-2  pt-12 mt-52 text-center",
p:"text-slate-500 pl-5 text-start mt-10 w-72 text-lg",
fontP:"text-center",
cv:"border-2 rounded-full p-2 mt-5 text-white border-slate-500 lg:ml-52 md:ml-10 hover:bg-slate-700 hover:shadow-lg hover:shadow-yellow-200",
};
const Me = () => {
    return (
   <>

<div data-aos="fade-right" data-aos-once="false"  className={styles.fontP}>

   <i data-aos="fade-right" data-aos-once="false"  class="fa-solid fa-address-card text-slate-500 text-7xl  mt-64 hover:text-yellow-200 hover:shadow-lg hover:shadow-yellow-200 hover:rotate-90 transition duration-150"></i>
</div>
   <div data-aos="fade-right" data-aos-once="false"  className={styles.gridcols4}>
<h1 className={styles.h1} id="a propos">
  à Propos
</h1>
<p className={styles.p}>j&rsquo;ai 21 ans j&rsquo;habite a meaux (77). Avant cette formation j&rsquo;ai fait une formation qui est  openclassroom pendant 4 mois dans le développement web. Je recherche actuellement un stage du 9 janvier au 3 mars 2023 pour finaliser ma formation et gagné en compêtences. </p>
<a target="_blank" href="../../assets/img/warren jarron cv développeur web.pdf">

<button className={styles.cv}>Mon    CV   </button>
</a>
<a href="#a propos"></a>
   </div>

   </>
   
  );
};

export default Me;