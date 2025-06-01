const Menu = (elem) => {
  let menu_item = "";
  const { menu } = elem;
  
  
  menu_item = menu.map((item) => {
    if (item.dropdown.length > 0) {
      return `<div class="text-white h-[50px] flex items-center relative group">
                      <img src=${item.image} alt="">
                      <a href="#" class=" text-[12px] transition-all group-hover:hover:text-[#FBAB3D] font-iran">${
                        item.menu_title
                      }</a>
                      <img src=${
                        item.svg
                      } alt="" class="w-[9px] h-[9px] mr-[5px]">
                      <div class="sub_menu w-[300px] bg-[#2b2b2b] absolute top-[45px] right-0 rounded-[10px] hidden group-hover:flex transition-all flex-row flex-wrap justify-between">
                        ${item.dropdown
                          .map((child) => {
                            return `<div class="w-[145px] h-[35px] pt-[5px] pb-[5px]  hover:text-[#FBAB3D] pr-[5px]  text-white text-[12px] flex items-center font-iran"><a href="#" class="">${child.title}</a></div>`;
                          })
                          .join("")}
                      </div>
                    </div>`;
    } else {
      return `<div class="text-white flex items-center  group">
            <img src=${item.image} alt="">
            <a href="#" class=" text-[12px] transition-all font-iran group-hover:hover:text-[#FBAB3D]">${item.menu_title}</a>
            <img src=${item.svg} alt="" class="w-[9px] h-[9px] mr-[5px]">
            </div>`;
    }
  });
  document
    .querySelector("#menu_nav")
    .insertAdjacentHTML("beforeend", menu_item.join(""));
};

export default Menu;
