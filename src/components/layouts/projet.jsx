let styles = {
    projet:"uppercase border-r-4 border-slate-500 text-slate-500  text-center mt-52 hover: flex justify-center hover:text-yellow-200 text-4xl" ,
    };
    const Projet = () => {
        return (
       <>
  <div className="text-center" >
  <i class="fa-solid fa-diagram-project mt-52 text-7xl  text-slate-500  justify-center hover:shadow-lg hover:shadow-yellow-200 hover:rotate-90 transition duration-150"></i>
    <h1  className={styles.projet}>   Mes Projet</h1>
</div>
       </>
       
      )
    }
    
    export default Projet;