/* 
CHANGE THEMES
*/
document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const themeButtons = document.querySelectorAll(".theme input");
  const tri_themes = document.querySelector(".tri-state-toggle");

  // Check if there's a saved theme in local storage, otherwise set the default theme to "blue"
  const savedTheme = window.localStorage.getItem("theme");
  const defaultTheme = savedTheme || "blue";
  let saveThemeButton;

  setTheme(defaultTheme);
  themeButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const themeToSet = button.dataset.theme;
      setTheme(themeToSet);
    });
  });

  function setTheme(themeToSet) {
    const availableThemes = [
      "blue",
      "light-gray",
      "dark-violet",
    ]; /* Prevents light mode */
    if (!availableThemes.includes(themeToSet)) return;

    window.localStorage.setItem("theme", themeToSet);
    availableThemes.forEach((theme) => {
      body.classList.remove(theme);
    });
    body.classList.add(themeToSet);
    saveThemeButton = document.querySelector(
      `.theme input[data-theme="${themeToSet}"]`
    );
  }

  saveThemeButton.classList.add("selected");
  tri_themes.addEventListener("click", (event) => {
    const selectedElements = document.querySelectorAll(".selected");

    selectedElements.forEach((element) => {
      element.classList.remove("selected");
    });
    if (event.target.tagName === "INPUT") {
      tri_themes.classList.remove("selected");
      event.target.classList.add("selected");
    }
  });
});

/*
CALCULATOR
*/
function Calculator(expression) {
  return eval(expression);
}

let calc_buttons = document.querySelector(".calc-buttons");
let display = document.querySelector(".display__container");
let equals = document.querySelector("#equals");
let reset = document.querySelector("#reset");
let del = document.querySelector("#del");
let expression = "";
calc_buttons.addEventListener("click", (event) => {
  if (
    event.target.className === "numbers" ||
    event.target.className === "operand"
  ) {
    if (event.target.id === "multiply") {
      event.target.innerText = "*";
    }
    display.innerText += event.target.innerText;
    expression += event.target.innerText;
  }
});
equals.onclick = () => {
  console.log(expression);
  display.innerText = Calculator(expression);
  expression = Calculator(expression);
};
reset.addEventListener("click", () => {
  display.innerText = "";
  expression = "";
});
del.onclick = function () {
  if (display.innerText == "Infinity") {
    display.innerText = "";
  } else {
    display.innerText = display.innerText.substring(
      0,
      display.innerText.length - 1
    );
  }
  expression = display.innerText;
};
