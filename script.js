/* 
CHANGE THEMES
*/
const availableThemes = ["blue", "light-gray", "dark-violet"];
const body = document.body;
const themeButtons = document.querySelectorAll(".theme input");
const themes = document.querySelector(".themes-toggle");

function setTheme(body, themeToSet) {
  if (!availableThemes.includes(themeToSet)) {
    return;
  }

  window.localStorage.setItem("theme", themeToSet);
  availableThemes.forEach((theme) => {
    body.classList.remove(theme);
  });
  body.classList.add(themeToSet);
  saveThemeButton = document.querySelector(
    `.theme input[data-theme="${themeToSet}"]`
  );
}

const savedTheme = window.localStorage.getItem("theme");
const defaultTheme = savedTheme || "blue";
let saveThemeButton;

setTheme(body, defaultTheme);
themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const themeToSet = button.dataset.theme;
    setTheme(body, themeToSet);
  });
});

saveThemeButton.classList.add("selected");
themes.addEventListener("click", (event) => {
  const selectedElements = document.querySelectorAll(".selected");

  selectedElements.forEach((element) => {
    element.classList.remove("selected");
  });
  if (event.target.tagName === "INPUT") {
    themes.classList.remove("selected");
    event.target.classList.add("selected");
  }
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
