const slider=()=>{
    let covers=document.querySelectorAll("#covers");

      covers.forEach((item,index)=>{
      let cl=parseInt(item.style.left=`${index * 100}%`)
      
      setInterval(()=>{
          switch (cl) {
              case ((index-(covers.length-1)) * 100):
                  item.style.left=`${(index-(covers.length-1)) * 100}%`
                  break;
              default:
                  item.style.left=`${cl-=100}%`
                  break;
          }

         },6000)
  })
}
export default slider;