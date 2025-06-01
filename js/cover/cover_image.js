let cover_image = (elem) => {
  let { cover } = elem;
  let cover_item="";
  let cover_length=cover.length;
  
  cover_item=cover.map((item,index) => {
    switch (index) {
      case (cover_length - 1):
        return `<img src=${item.image} alt=${item.alt} id="covers" class="cover_last  w-full h-[500px] object-cover brightness-50 cover_shadow object-center absolute top-0">`;
      // setTimeout((item) => {
      //   console.log(item);
      //   return `<img src=${item.image} alt=${item.alt} id="covers" class="cover_last  w-full h-[500px] object-cover brightness-50 cover_shadow object-center absolute top-0">`;
      // }, 6000*(cover_length-1));
        break;
    
      default:
        return `<img src=${item.image} alt=${item.alt} id="covers" class="cover  w-full h-[500px] object-cover brightness-50 cover_shadow object-center absolute top-0">`;
        break;
    }
    
  });
  document.querySelector(".img_wraper").insertAdjacentHTML("beforeend", cover_item.join(""));
};
export default cover_image;
