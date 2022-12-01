const Form = () => {
    
    return (
    




<div  class="flex justify-center mt-80 font-raleway">
  <div  class="flex flex-col w md:p-2 md:flex-row md:max-w-xl rounded-lg border-2 lg:p-10  lg:pr-1 lg:pl-5 mt-64 border-slate-500  shadow-lg">
    <div class="p-5 flex   flex-col justify-start">
<i class="fa-brands fa-wpforms    text-slate-500 text-7xl text-center  hover:text-yellow-200  hover:rotate-90 transition duration-150 "></i>
    <p className="text-slate-500 justify-center text-sm mt-10">
      &rsquo;
      Que ce soit pour me proposer un job, un projet en collaboration ou juste me faire un petit coucou, n&rsquo;hésitez pas à m&rsquo;envoyez un message.
      </p>
      <div className="grid grid-cols-1 text-slate-500">
     <label htmlFor="" className="mt-20 flex flex-col">Nom complet:
      <input type="text" className=" w-52 bg-transparent border-2 border-slate-500" />
     </label>
     <label htmlFor="" className="mt-20 flex flex-col">
        Mail:
      <input type="text" className=" w-52  bg-transparent border-2 border-slate-500" />
     </label>

     <textarea  name="" id="" cols="33" rows="5" className="mt-10 ml-30 text-slate-500 bg-transparent border-2 border-slate-500">
      ...saisir
     </textarea>
      


      <div>
        
      </div>
      <button type="submit" className="text-slate-500 mt-10 border-2 border-slate-500 w-52 lg:ml-32">envoyez </button>

      </div>
    
</div>
</div>
</div>



        );
        };
        export default Form;