let select = ()=>{


// fav_series_details
let fav_1_series_details = document.querySelector(".fav_1_series_details");
let fav_2_series_details = document.querySelector(".fav_2_series_details");
let fav_3_series_details = document.querySelector(".fav_3_series_details");
let fav_4_series_details = document.querySelector(".fav_4_series_details");
let fav_5_series_details = document.querySelector(".fav_5_series_details");
let fav_6_series_details = document.querySelector(".fav_6_series_details");

// fav_1_films_details
let fav_1_films_details = document.querySelector(".fav_1_films_details");
let fav_2_films_details = document.querySelector(".fav_2_films_details");
let fav_3_films_details = document.querySelector(".fav_3_films_details");
let fav_4_films_details = document.querySelector(".fav_4_films_details");

// film series opacity active
let fav_img_1 = document.querySelector(".fav_img_1");
let fav_img_2 = document.querySelector(".fav_img_2");
let fav_img_3 = document.querySelector(".fav_img_3");
let fav_img_4 = document.querySelector(".fav_img_4");
let fav_img_5 = document.querySelector(".fav_img_5");
let fav_img_6 = document.querySelector(".fav_img_6");

fav_img_1.addEventListener("click", () => {
  fav_img_1.classList.add("my_active");
  fav_img_1.classList.remove("my_opacity");
  fav_img_2.classList.remove("my_active");
  fav_img_2.classList.add("my_opacity");
  fav_img_3.classList.remove("my_active");
  fav_img_3.classList.add("my_opacity");
  fav_img_4.classList.remove("my_active");
  fav_img_4.classList.add("my_opacity");
  fav_img_5.classList.remove("my_active");
  fav_img_5.classList.add("my_opacity");
  fav_img_6.classList.remove("my_active");
  fav_img_6.classList.add("my_opacity");
  // details
  fav_1_series_details.classList.remove("hidden");
  fav_1_series_details.classList.add("flex");
  fav_2_series_details.classList.add("hidden");
  fav_2_series_details.classList.remove("flex");
  fav_3_series_details.classList.add("hidden");
  fav_3_series_details.classList.remove("flex");
  fav_4_series_details.classList.add("hidden");
  fav_4_series_details.classList.remove("flex");
  fav_5_series_details.classList.add("hidden");
  fav_5_series_details.classList.remove("flex");
  fav_6_series_details.classList.add("hidden");
  fav_6_series_details.classList.remove("flex");
});
fav_img_2.addEventListener("click", () => {
  fav_img_2.classList.add("my_active");
  fav_img_2.classList.remove("my_opacity");
  fav_img_1.classList.remove("my_active");
  fav_img_1.classList.add("my_opacity");
  fav_img_3.classList.remove("my_active");
  fav_img_3.classList.add("my_opacity");
  fav_img_4.classList.remove("my_active");
  fav_img_4.classList.add("my_opacity");
  fav_img_5.classList.remove("my_active");
  fav_img_5.classList.add("my_opacity");
  fav_img_6.classList.remove("my_active");
  fav_img_6.classList.add("my_opacity");
  // details
  fav_2_series_details.classList.remove("hidden");
  fav_2_series_details.classList.add("flex");
  fav_1_series_details.classList.add("hidden");
  fav_1_series_details.classList.remove("flex");
  fav_3_series_details.classList.add("hidden");
  fav_3_series_details.classList.remove("flex");
  fav_4_series_details.classList.add("hidden");
  fav_4_series_details.classList.remove("flex");
  fav_5_series_details.classList.add("hidden");
  fav_5_series_details.classList.remove("flex");
  fav_6_series_details.classList.add("hidden");
  fav_6_series_details.classList.remove("flex");
});
fav_img_3.addEventListener("click", () => {
  fav_img_3.classList.add("my_active");
  fav_img_3.classList.remove("my_opacity");
  fav_img_1.classList.remove("my_active");
  fav_img_1.classList.add("my_opacity");
  fav_img_2.classList.remove("my_active");
  fav_img_2.classList.add("my_opacity");
  fav_img_4.classList.remove("my_active");
  fav_img_4.classList.add("my_opacity");
  fav_img_5.classList.remove("my_active");
  fav_img_5.classList.add("my_opacity");
  fav_img_6.classList.remove("my_active");
  fav_img_6.classList.add("my_opacity");
  // details
  fav_3_series_details.classList.remove("hidden");
  fav_3_series_details.classList.add("flex");
  fav_1_series_details.classList.add("hidden");
  fav_1_series_details.classList.remove("flex");
  fav_2_series_details.classList.add("hidden");
  fav_2_series_details.classList.remove("flex");
  fav_4_series_details.classList.add("hidden");
  fav_4_series_details.classList.remove("flex");
  fav_5_series_details.classList.add("hidden");
  fav_5_series_details.classList.remove("flex");
  fav_6_series_details.classList.add("hidden");
  fav_6_series_details.classList.remove("flex");
});
fav_img_4.addEventListener("click", () => {
  fav_img_4.classList.add("my_active");
  fav_img_4.classList.remove("my_opacity");
  fav_img_1.classList.remove("my_active");
  fav_img_1.classList.add("my_opacity");
  fav_img_2.classList.remove("my_active");
  fav_img_2.classList.add("my_opacity");
  fav_img_3.classList.remove("my_active");
  fav_img_3.classList.add("my_opacity");
  fav_img_5.classList.remove("my_active");
  fav_img_5.classList.add("my_opacity");
  fav_img_6.classList.remove("my_active");
  fav_img_6.classList.add("my_opacity");
  // details
  fav_4_series_details.classList.remove("hidden");
  fav_4_series_details.classList.add("flex");
  fav_1_series_details.classList.add("hidden");
  fav_1_series_details.classList.remove("flex");
  fav_2_series_details.classList.add("hidden");
  fav_2_series_details.classList.remove("flex");
  fav_3_series_details.classList.add("hidden");
  fav_3_series_details.classList.remove("flex");
  fav_5_series_details.classList.add("hidden");
  fav_5_series_details.classList.remove("flex");
  fav_6_series_details.classList.add("hidden");
  fav_6_series_details.classList.remove("flex");
});
fav_img_5.addEventListener("click", () => {
  fav_img_5.classList.add("my_active");
  fav_img_5.classList.remove("my_opacity");
  fav_img_1.classList.remove("my_active");
  fav_img_1.classList.add("my_opacity");
  fav_img_2.classList.remove("my_active");
  fav_img_2.classList.add("my_opacity");
  fav_img_3.classList.remove("my_active");
  fav_img_3.classList.add("my_opacity");
  fav_img_4.classList.remove("my_active");
  fav_img_4.classList.add("my_opacity");
  fav_img_6.classList.remove("my_active");
  fav_img_6.classList.add("my_opacity");
  // details
  fav_5_series_details.classList.remove("hidden");
  fav_5_series_details.classList.add("flex");
  fav_1_series_details.classList.add("hidden");
  fav_1_series_details.classList.remove("flex");
  fav_2_series_details.classList.add("hidden");
  fav_2_series_details.classList.remove("flex");
  fav_3_series_details.classList.add("hidden");
  fav_3_series_details.classList.remove("flex");
  fav_4_series_details.classList.add("hidden");
  fav_4_series_details.classList.remove("flex");
  fav_6_series_details.classList.add("hidden");
  fav_6_series_details.classList.remove("flex");
});
fav_img_6.addEventListener("click", () => {
  fav_img_6.classList.add("my_active");
  fav_img_6.classList.remove("my_opacity");
  fav_img_1.classList.remove("my_active");
  fav_img_1.classList.add("my_opacity");
  fav_img_2.classList.remove("my_active");
  fav_img_2.classList.add("my_opacity");
  fav_img_3.classList.remove("my_active");
  fav_img_3.classList.add("my_opacity");
  fav_img_4.classList.remove("my_active");
  fav_img_4.classList.add("my_opacity");
  fav_img_5.classList.remove("my_active");
  fav_img_5.classList.add("my_opacity");
  // details
  fav_6_series_details.classList.remove("hidden");
  fav_6_series_details.classList.add("flex");
  fav_1_series_details.classList.add("hidden");
  fav_1_series_details.classList.remove("flex");
  fav_2_series_details.classList.add("hidden");
  fav_2_series_details.classList.remove("flex");
  fav_3_series_details.classList.add("hidden");
  fav_3_series_details.classList.remove("flex");
  fav_4_series_details.classList.add("hidden");
  fav_4_series_details.classList.remove("flex");
  fav_5_series_details.classList.add("hidden");
  fav_5_series_details.classList.remove("flex");
});

let fav_img_1_film = document.querySelector(".fav_img_1_film");
let fav_img_2_film = document.querySelector(".fav_img_2_film");
let fav_img_3_film = document.querySelector(".fav_img_3_film");
let fav_img_4_film = document.querySelector(".fav_img_4_film");


fav_img_1_film.addEventListener("click", () => {
  fav_img_1_film.classList.add("my_active");
  fav_img_1_film.classList.remove("my_opacity");
  fav_img_2_film.classList.remove("my_active");
  fav_img_2_film.classList.add("my_opacity");
  fav_img_3_film.classList.remove("my_active");
  fav_img_3_film.classList.add("my_opacity");
  fav_img_4_film.classList.remove("my_active");
  fav_img_4_film.classList.add("my_opacity");
  // details
  fav_1_films_details.classList.remove("hidden");
  fav_1_films_details.classList.add("flex");
  fav_2_films_details.classList.add("hidden");
  fav_2_films_details.classList.remove("flex");
  fav_3_films_details.classList.add("hidden");
  fav_3_films_details.classList.remove("flex");
  fav_4_films_details.classList.add("hidden");
  fav_4_films_details.classList.remove("flex");
});

fav_img_2_film.addEventListener("click", () => {
  fav_img_2_film.classList.add("my_active");
  fav_img_2_film.classList.remove("my_opacity");
  fav_img_1_film.classList.remove("my_active");
  fav_img_1_film.classList.add("my_opacity");
  fav_img_3_film.classList.remove("my_active");
  fav_img_3_film.classList.add("my_opacity");
  fav_img_4_film.classList.remove("my_active");
  fav_img_4_film.classList.add("my_opacity");
  // details
  fav_2_films_details.classList.remove("hidden");
  fav_2_films_details.classList.add("flex");
  fav_1_films_details.classList.add("hidden");
  fav_1_films_details.classList.remove("flex");
  fav_3_films_details.classList.add("hidden");
  fav_3_films_details.classList.remove("flex");
  fav_4_films_details.classList.add("hidden");
  fav_4_films_details.classList.remove("flex");
});

fav_img_3_film.addEventListener("click", () => {
  fav_img_3_film.classList.add("my_active");
  fav_img_3_film.classList.remove("my_opacity");
  fav_img_1_film.classList.remove("my_active");
  fav_img_1_film.classList.add("my_opacity");
  fav_img_2_film.classList.remove("my_active");
  fav_img_2_film.classList.add("my_opacity");
  fav_img_4_film.classList.remove("my_active");
  fav_img_4_film.classList.add("my_opacity");
  // details
  fav_3_films_details.classList.remove("hidden");
  fav_3_films_details.classList.add("flex");
  fav_1_films_details.classList.add("hidden");
  fav_1_films_details.classList.remove("flex");
  fav_2_films_details.classList.add("hidden");
  fav_2_films_details.classList.remove("flex");
  fav_4_films_details.classList.add("hidden");
  fav_4_films_details.classList.remove("flex");
});

fav_img_4_film.addEventListener("click", () => {
  fav_img_4_film.classList.add("my_active");
  fav_img_4_film.classList.remove("my_opacity");
  fav_img_1_film.classList.remove("my_active");
  fav_img_1_film.classList.add("my_opacity");
  fav_img_2_film.classList.remove("my_active");
  fav_img_2_film.classList.add("my_opacity");
  fav_img_3_film.classList.remove("my_active");
  fav_img_3_film.classList.add("my_opacity");
  // details
  fav_4_films_details.classList.remove("hidden");
  fav_4_films_details.classList.add("flex");
  fav_1_films_details.classList.add("hidden");
  fav_1_films_details.classList.remove("flex");
  fav_2_films_details.classList.add("hidden");
  fav_2_films_details.classList.remove("flex");
  fav_3_films_details.classList.add("hidden");
  fav_3_films_details.classList.remove("flex");
});

// favorite btns film series
let favorite_btn_1 = document.querySelector(".favorite-btn-1");
let favorite_btn_2 = document.querySelector(".favorite-btn-2");

let series = document.querySelector(".series");
let film = document.querySelector(".film");
let flag = true;

favorite_btn_1.addEventListener("click", () => {
  favorite_btn_1.classList.add("selected");
  favorite_btn_2.classList.remove("selected");
  flag = true;
  if (flag) {
    series.classList.add("flex");
    series.classList.remove("hidden");
    film.classList.add("hidden");
    film.classList.remove("flex");
  } else {
    film.classList.add("flex");
    film.classList.remove("hidden");
    series.classList.add("hidden");
    series.classList.remove("flex");
  }
  fav_1_films_details.classList.add("hidden");
  fav_1_films_details.classList.remove("flex");
  fav_2_films_details.classList.add("hidden");
  fav_2_films_details.classList.remove("flex");
  fav_3_films_details.classList.add("hidden");
  fav_3_films_details.classList.remove("flex");
  fav_4_films_details.classList.add("hidden");
  fav_4_films_details.classList.remove("flex");
  fav_1_series_details.classList.remove("hidden");
  fav_1_series_details.classList.add("flex");
});

favorite_btn_2.addEventListener("click", () => {
  favorite_btn_2.classList.add("selected");
  favorite_btn_1.classList.remove("selected");
  flag = false;
  if (flag) {
    film.classList.add("hidden");
    film.classList.remove("flex");
    series.classList.add("flex");
    series.classList.remove("hidden");
  } else {
    series.classList.add("hidden");
    series.classList.remove("flex");
    film.classList.add("flex");
    film.classList.remove("hidden");
  }
  fav_1_series_details.classList.add("hidden");
  fav_1_series_details.classList.remove("flex");
  fav_2_series_details.classList.add("hidden");
  fav_2_series_details.classList.remove("flex");
  fav_3_series_details.classList.add("hidden");
  fav_3_series_details.classList.remove("flex");
  fav_4_series_details.classList.add("hidden");
  fav_4_series_details.classList.remove("flex");
  fav_5_series_details.classList.add("hidden");
  fav_5_series_details.classList.remove("flex");
  fav_6_series_details.classList.add("hidden");
  fav_6_series_details.classList.remove("flex");
  fav_1_films_details.classList.remove("hidden")
  fav_1_films_details.classList.add("flex");
});



// most popular accordion questions
let most1 = document.querySelector(".most1");
most1.addEventListener("click", () => {
  let h21 = document.querySelector(".aval");
  h21.classList.toggle("color");
  h21.classList.toggle("text-white");
  let img1 = document.querySelector(".cros1");
  img1.classList.toggle("rotate-45");
  let p1 = document.querySelector(".matn1");
  p1.classList.toggle("hidden");
});
let most2 = document.querySelector(".most2");
most2.addEventListener("click", () => {
  let h22 = document.querySelector(".dovom");
  h22.classList.toggle("color");
  h22.classList.toggle("text-white");
  let img2 = document.querySelector(".cros2");
  img2.classList.toggle("rotate-45");
  let p2 = document.querySelector(".matn2");
  p2.classList.toggle("hidden");
});
let most3 = document.querySelector(".most3");
most3.addEventListener("click", () => {
  let h23 = document.querySelector(".sevom");
  h23.classList.toggle("color");
  h23.classList.toggle("text-white");
  let img3 = document.querySelector(".cros3");
  img3.classList.toggle("rotate-45");
  let p3 = document.querySelector(".matn3");
  p3.classList.toggle("hidden");
});
let most4 = document.querySelector(".most4");
most4.addEventListener("click", () => {
  let h24 = document.querySelector(".chahar");
  h24.classList.toggle("color");
  h24.classList.toggle("text-white");
  let img4 = document.querySelector(".cros4");
  img4.classList.toggle("rotate-45");
  let p4 = document.querySelector(".matn4");
  p4.classList.toggle("hidden");
});

}
export default select;