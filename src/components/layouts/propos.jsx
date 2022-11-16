
let styles = {
h1:"text-slate-500 border-r-2 border-slate-500  uppercase text-center text-4xl",
gridcols4:" lg:grid lg:grid-cols-2  pt-12 mt-52",
p:"text-slate-500 p-5 "
};
const Me = () => {
    return (
   <>
   <div  className={styles.gridcols4}>

<h1 className={styles.h1}>
  à Propos
</h1>
<p className={styles.p}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veniam facilis repudiandae esse ipsum saepe fugit quis necessitatibus quisquam. Voluptate dolores nam aut molestiae tempora voluptas explicabo? Velit asperiores accusamus earum!</p>
   </div>

   </>
   
  )
}

export default Me;