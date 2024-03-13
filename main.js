import "fancy-welcome/dist/style.css";
import "animate.css";
import fancy from "fancy-welcome";

document.addEventListener("DOMContentLoaded", () => {
  fancy.render({
    language: ["Japanese", "Indonesian"],
    exactOrderLanguage: true,
    includeNativeWord: false,

    animateDuration: ".4s",
  });
});
