let favorits_btn = (elem) => {
  let { favorits } = elem;
  let favorits_item = "";
  let favorits_length = favorits.length;

  favorits_item = favorits.map((item, index) => {
    switch (index) {
      case favorits_length - 1:
        return `<button class="w-[60px] h-[28px] font-iran_bold font-bold text-[12px] text-white leading-7 rounded-full favorite-btn-2">${item.title}</button>`;
        break;

      default:
        return `<button class="w-[60px] h-[28px] font-iran_bold font-bold text-[12px] text-white leading-7 selected rounded-full favorite-btn-1">${item.title}</button>`;
        break;
    }
  });

  document
    .querySelector(".favorits_btns")
    .insertAdjacentHTML("beforeend", favorits_item.join(""));

};
export default favorits_btn;
