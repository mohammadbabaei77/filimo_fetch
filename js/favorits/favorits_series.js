let favorits_series = (elem) => {
  let { favorits } = elem;
  let series_item = "";
  let series_data = favorits[0];
  

  series_item = series_data.dropdown.map((item, index) => {
    switch (index) {
      case 0:
        return `<img src=${item.image} alt=${item.alt} class="w-[165px] fav_img_${item.id} my_active h-[220px] rounded-[8px] my_opacity hover:opacity-100 transition-all duration-300 cursor-pointer">`;
        break;

      default:
        return `<img src=${item.image} alt=${item.alt} class="w-[165px] fav_img_${item.id} h-[220px] rounded-[8px] my_opacity hover:opacity-100 transition-all duration-300 cursor-pointer">`;
        break;
    }
  });
  document
    .querySelector(".series")
    .insertAdjacentHTML("beforeend", series_item.join(""));

};
export default favorits_series;
