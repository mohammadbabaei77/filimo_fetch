import Menu from "./Menu/Menu";
import cover_image from "./cover/cover_image";
import slider from "./cover/slider";
import favorits_btn from "./favorits/favorits_btn";
import favorits_film from "./favorits/favorits_film";
import favorits_series from "./favorits/favorits_series";
import select from "./favorits/select";
import Swiper from "swiper";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const fetchData = async () => {
  try {
    const data = await fetch(
      "https://mohammadbabaei77.github.io/filimo-json/db.json"
    );
    const res = await data.json();
    return res;
  } catch (error) {
    console.log(error.message);
  }
};

fetchData().then((elem) => {
  Menu(elem);
  cover_image(elem);
  slider();
  favorits_btn(elem);
  favorits_series(elem);
  favorits_film(elem);
  select();
});

var swiper = new Swiper(".mySlider", {
  slidesPerView: 3,
  spaceBetween: 10,
  breakpoints: {
    1024: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  spaceBetween: 15,
  breakpoints: {
    1024: {
      slidesPerView: 3,
    },
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".myseries", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    1024: {
      slidesPerView: 4,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
