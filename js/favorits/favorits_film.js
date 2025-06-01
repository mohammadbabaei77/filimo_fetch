let favorits_film = (elem) => {
    let { favorits } = elem;
    let film_item = "";
    let film_data = favorits[1];
    
  
    film_item = film_data.dropdown.map((item, index) => {
      switch (index) {
        case 0:
          return `<img src=${item.image} alt=${item.alt} class="w-[165px] fav_img_${item.id}_film my_active h-[220px] rounded-[8px] my_opacity hover:opacity-100 transition-all duration-300 cursor-pointer">`;
          break;
  
        default:
          return `<img src=${item.image} alt=${item.alt} class="w-[165px] fav_img_${item.id}_film h-[220px] rounded-[8px] my_opacity hover:opacity-100 transition-all duration-300 cursor-pointer">`;
          break;
      }
    });
    document
      .querySelector(".film")
      .insertAdjacentHTML("beforeend", film_item.join(""));
  
    
  
  };
  export default favorits_film;