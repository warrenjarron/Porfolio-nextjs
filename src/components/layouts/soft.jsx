let styles = {
skills2p2:"text-center p-7 text-slate-500 sm:w-6/12  border-b-2 border-slate-500 md:mt-10 text-xl",
soft:"uppercase border-r-4 border-slate-500 text-slate-500 text-7xl flex flex-col h-auto hover:text-yellow-200 lg:text-7xl" ,
gridcols2:" justify-center flex text-center  pt-12 ",
user:"text-center mt-60 text-4xl text-slate-500   hover:rotate-6 transition duration-150",
};
const Soft = () => {
    return (

        
        
        <section>
<i class="fa-solid fa-street-view  hover:rotate-90 transition duration-150 hover:text-yellow-200 text-slate-500 flex justify-center text-7xl mt-60"></i>
{/* <i class="fa-regular fa-user-magnifying-glass hover:rotate-90 transition duration-150 hover:text-yellow-200 text-slate-500 flex justify-center text-7xl mt-60"></i> */}
        {/* <i  class="fa-solid fa-address-book hover:rotate-90 transition duration-150 hover:text-yellow-200 text-slate-500 flex justify-center text-7xl mt-60"></i> */}
        <div data-aos="zoom-out-up" className={styles.gridcols2} >
    
                <p className={styles.skills2p2}>
                    Adaptabilité / Créativité / rigoureux / Patience / Déterminé  <br />/ curieux / a l&apos;écoute / Coopératif </p>
            </div>
        </section>
    )
}

export default Soft;
