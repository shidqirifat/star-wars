import "./component/hero.js";
import swiper from "./component/swiper.js";
import "./component/card.js";

const main = () => {
  document.addEventListener("DOMContentLoaded", async () => {
    console.log("loaded");
  });

  window.addEventListener("resize", () => {
    console.log("object");
    swiper.update();
  });
};

export default main;
