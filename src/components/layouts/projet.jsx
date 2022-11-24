let styles = {
    projet:" uppercase text-slate-500 text-center mt-72 hover: flex justify-center hover:text-yellow-200 text-7xl lg:text-7xl  font-raleway" ,
    };
    const Projet = () => {
        return (
       <>
  <div  className="text-center   items-center grid justify-center" >
  {/* <i  class="fa-solid fa-diagram-project mt-52 text-7xl  text-slate-500  justify-center  hover:bg-yelllow-200 hover:rotate-90 transition duration-150"></i> */}
    {/* <h1 data-aos="flip-down" data-aos-once="false" className={styles.projet}>   Mes Projets</h1> */}
    <i  class="text-center mt-72 hover: flex justify-center hover:text-yellow-200 text-7xl lg:text-7xl text-slate-500 fa-solid fa-list-check"></i>
    
</div>
       </>
       
      );
    };
    
    export default Projet;