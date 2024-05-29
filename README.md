# Frontend Mentor - Calculator app solution

This is a solution to the [Calculator app challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/calculator-app-9lteq5N29). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- See the size of the elements adjust based on their device's screen size
- Perform mathmatical operations like addition, subtraction, multiplication, and division
- Adjust the color theme based on their preference
- **Bonus**: Have their initial theme preference checked using `prefers-color-scheme` and have any additional changes saved in the browser

### Screenshot

![](./Screen%20Shot%202024-02-10%20at%2012.52.34-fullpage.png)


### Links

- Solution URL: (https://github.com/Desmends27/calculator-app-main)
- Live Site URL: (https://desmends27.github.io/calculator-app-main/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow


### What I learned

This was a highly informative project, i got to learn a lot about dom manipulation, to change themes and
how to work with css grid an mobile first workflow and using data attributes in js.

To see how you can add code snippets, see below:

```js
    function setTheme(themeToSet) {
        const availableThemes = ["blue", "light-gray", "dark-violet"]; /* Prevents light mode */
        if (!availableThemes.includes(themeToSet)) return;

        window.localStorage.setItem("theme", themeToSet);
        availableThemes.forEach(theme => {
            body.classList.remove(theme);
        });
        body.classList.add(themeToSet);
        saveThemeButton = document.querySelector(`.theme input[data-theme="${themeToSet}"]`);
    }

```

### Continued development

Currently the calculator, has a few problems with how it handles zero divsion. Also there a  few problems with the hover staete. Hope to fix it by using a more of a class based apporach.

### Useful resources

- [Theme changing](https://javascript.plainenglish.io/how-to-make-a-system-light-dark-theme-selector-4e70322205d7) - This helped me  with the changing of themes using js and event listeners.
- [CSS custom](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) - This is an amazing article which helped me finally understand custom variables in css. I'd recommend it to anyone still learning this concept.


## Author

- Frontend Mentor - [Desmends27](https://www.frontendmentor.io/profile/Desmends27)
