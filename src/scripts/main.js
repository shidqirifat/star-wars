import "./components/header.js";
import "./components/hero.js";
import "./components/card.js";
import "./components/footer.js";
import swiper from "./components/swiper.js";

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
