const Form = () => {
    
    return (
    




<div  class="flex justify-center mt-80 font-raleway">
  <div  class="flex flex-col w md:p-2 md:flex-row md:max-w-xl rounded-lg border-2 lg:p-10  lg:pr-1 lg:pl-5 mt-64 border-slate-500  shadow-lg">
    <div class="p-5 flex   flex-col justify-start">
<i class="fa-brands fa-wpforms    text-slate-500 text-7xl text-center  hover:text-yellow-200  hover:rotate-90 transition duration-150"></i>
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
      <button type="submit" className="text-slate-500 mt-10 border-2 border-slate-500 w-52 ml-32">envoyez </button>

      </div>
    
</div>
</div>
</div>


//         <div className="  border-2 border-slate-500 w-9/12 lg:ml-40 mt-10 p-5">
// <div className="mb-3 xl:w-96   ">
//   <label
//     for="exampleFormControlInput2"
//     className="form-label inline-block mb-2 text-gray-700 text-xl"
//     >Nom complet</label>
//   <input
//     type="text"
//     className="
//     form-control
//     block
//     w-full
//     px-4
//     py-2
//     text-xl
//     font-normal
//     text-slate-500
//     bg-transparent bg-clip-padding
//     border border-solid border-slate-500
//     rounded
//     transition
//     ease-in-out
//     m-0
//     focus:text-gray-700 focus:bg-white focus:border-yellow-200 focus:outline-none
//     "
//     id="exampleFormControlInput2"
//     placeholder="Nom complet"
//     />
// </div>

// <div className="mb-3 xl:w-96 ">
//   <label for="exampleFormControlInpu3" class="form-label inline-block mb-2 text-gray-700"
//     >Mail</label>
//   <input
//     type="text"
//     className="
//     form-control
//     block
//     w-full
//     px-3
//     py-1.5
//     text-base
//     font-normal
//     text-slate-500
//     bg-transparent bg-clip-padding
//     border border-solid border-slate-500
//     rounded
//     transition
//     ease-in-out
//     m-0
//     focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
//     "
//     id="exampleFormControlInput3"
//     placeholder="Mail"
//     />
// </div>

//     <div className="flex justify-center">
//     <div className="mb-3 xl:w-96 bg">
//       <label for="exampleFormControlTextarea1" class="form-label inline-block mb-2 text-gray-700"
//       ></label>
//       <textarea
//         className="
//         form-control
//         block
//         w-full
//         px-3
//         py-1.5
//         text-base
//         font-normal
//         text-slate-500
//         bg-transparent bg-clip-padding
//         border border-solid border-slate-500
//         rounded
//         transition
//         ease-in-out
//         m-0
//         focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
//         id="exampleFormControlTextarea1"
//         rows="3"
//         placeholder="...envoyer un message"
//         ></textarea>
//       <button type="button" className="inline-block px-6 py-2 border-2 border-slate-500 text-slate-500 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out mt-5 ml-32">Envoyer</button>
//     </div>
//       </div>
//         </div>
      
        );
        };
        export default Form;