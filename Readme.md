# Interview Coding Preparation

I'm Pawan Tripathi, a frontend developer learning and preparing for interviews. This repo is where I practice and push tasks daily — starting from the basics and slowly moving toward more complex stuff.

Stack I'm using: HTML, CSS, and JavaScript. No frameworks for now, just vanilla everything.

---

## Task 1 — EduLearn Landing Page

Built a landing page for a fictional online learning platform called EduLearn, kind of like Coursera. The goal was to practice layout and responsive design.

What I built:
- Navbar with a logo, 3 nav links, and a Get Started button
- Hero section with a heading and a popular courses list
- Features section with 3 cards
- Contact form
- Footer with copyright

Things I learned:
- How to use CSS variables properly with `:root`
- Flexbox for navbar and hero, CSS Grid for the feature cards
- Making a hamburger menu work with just CSS (checkbox trick, no JS)
- Why `width: 100%` is better than `width: 100vw` — the vw includes scrollbar width which was causing horizontal overflow
- How to write media queries and why you shouldn't duplicate them

Mistakes I made:
- Used `width: 100vw` everywhere which caused horizontal scroll
- Wrote two separate `@media (max-width: 768px)` blocks by accident — the second one was overriding the first
- Used `line-height: 19px` which is wrong — unitless values like `1.6` are the right way

---

## Task 2 — Counter App

A simple counter with Add, Subtract, and Reset buttons. Count doesn't go below zero.

Things I learned:
- Selecting DOM elements with `getElementById`
- Adding click events with `addEventListener`
- Why you need a separate JS variable to track state instead of reading from the DOM directly
- The difference between `const` and `let` when your value needs to change
- Glassmorphism in CSS using `backdrop-filter: blur()` and `rgba` backgrounds
- CSS animations with `@keyframes` and toggling classes with `classList`

Mistakes I made:
- Named the event listener parameter `...num` which shadowed the outer `num` variable — this broke everything inside the function
- Tried to do `num.innerHTML + 1` directly on the DOM element instead of using a separate counter variable
- Forgot to reset `data = 0` in the reset button, so after resetting the screen it would still count from the old number

---

## Task 3 — Background Color Changer

Five colored buttons that change the page background when clicked. Simple but it helped me understand how JavaScript talks to CSS through the DOM.

Things I learned:
- `document.body.style.backgroundColor` to change styles with JS
- `querySelector` to select elements by class
- Adding `:focus` styles so the button stays highlighted after click
- `transition` on body for smooth color change

Mistakes I made:
- Wrote `bottom: 0` in the `*` selector instead of `margin: 0` — completely different property
- Used `max-width: 100vw` again even though I fixed this same thing in Task 1

---

## Task 4 — Show / Hide Password

A password input with a toggle button that shows and hides the password text.

Things I learned:
- Changing `input.type` between "password" and "text" using JS
- Always use `const` when the variable won't be reassigned
- Difference between `==` and `===` — always use triple equals because it checks type as well
- `btn.innerHTML` to dynamically change button text

Mistakes I made:
- Used `let` instead of `const` for DOM elements that never change
- Mixed `===` and `==` in the same if/else block — should always be consistent with `===`

---

## Task 5 — Character Counter

A textarea that counts characters in real time and stops input at 250 characters.

Things I learned:
- `input` event fires on every keystroke — better than `keyup` for this use case
- `textarea.value.length` to count characters
- `>=` instead of `===` for the limit check — because pasting text can jump past the exact number
- `slice(0, 250)` to cut off extra characters
- Neumorphism design — same background color on body and container, two box-shadows (one light, one dark)

Mistakes I made:
- First wrote `=== 250` instead of `>= 250` — paste would bypass the limit completely
- Had `console.log` in the final code — should be removed before pushing
- Typo in placeholder text

---

## Task 6 — Dark / Light Mode Toggle

A toggle button that switches the page between dark and light mode smoothly.

Things I learned:
- `classList.toggle()` to add and remove a class in one line
- `classList.contains()` to check if a class exists — more reliable than checking classList.value
- Overriding CSS variables inside a class instead of rewriting every element's styles
- Putting `transition: all 0.2s ease` on `*` so every element animates automatically

Mistakes I made:
- First used `classList.value === 'light-mode'` which breaks if body ever has more than one class
- Button was empty in HTML — if JS fails to load, button shows nothing

---

## Task 7 — Todo List

Add tasks to a list and delete them individually with a button.

Things I learned:
- `document.createElement()` to create HTML elements from JS
- `classList.add()` to add classes to created elements
- `appendChild()` to place elements inside other elements
- `element.remove()` to delete a task from the DOM
- Why order matters — validate input first, then process, then reset

Mistakes I made:
- Used `createElement('delete-btn')` — that's a class name, not an HTML tag
- Cleared `inputbox.value = ''` before the empty check, so the check always returned true and delete listener never ran

---

## Task 8 — Image Slider

An image slider with next and previous buttons that loops through 5 images.

Things I learned:
- `querySelectorAll` returns all matching elements as a NodeList
- `forEach` to loop through all images and hide them before showing the current one
- Modulo `%` operator to loop back — last image se next press karo toh first pe aa jaao
- `(current - 1 + images.length) % images.length` trick for prev so it never goes negative
- CSS link tag missing tha — JS sahi tha but CSS load nahi hui thi

Mistakes I made:
- `Image.length` likha tha capital I se — JavaScript case sensitive hai
- CSS file link karna bhool gaya HTML mein — isliye images hide nahi ho rahi thi

---

## Task 9 — Random Color Generator

Generates a random hex color on button click and applies it to the background. Also copies the hex code to clipboard.

Things I learned:
- `Math.random() * 16` with `Math.floor()` to get a random index
- Looping 6 times to build a hex color string character by character
- `navigator.clipboard.writeText()` to copy text to clipboard
- `setTimeout()` to temporarily change button text back after 1 second

Mistakes I made:
- Used `let` for a DOM element that never changes — should be `const`
- For loop had a comma instead of semicolon — `for(let i = 0, i < 6)` instead of `for(let i = 0; i < 6)`
- Logic was written outside the event listener so it only ran once on page load

---

## Task 10 — Temperature Converter

Converts temperature between Celsius and Fahrenheit in both directions.

Things I learned:
- `type="number"` input so only numbers are accepted
- `Number()` to convert string input to a number
- `isNaN()` to catch invalid values like letters
- `toFixed(2)` to limit decimal places to 2
- `display: inline-block` — inline-block width accept karta hai, inline nahi karta

Mistakes I made:
- Used `type="text"` instead of `type="number"`
- Button class names and formulas were swapped — cel button had C to F formula and fah had F to C
- Used `display: inline` on result — width was being ignored completely
- Wrote `f` and `c` instead of `°F` and `°C`

---

## Task 11 — BMI Calculator

Takes height in cm and weight in kg, calculates BMI and shows the category.

Things I learned:
- BMI formula: weight / (height in meters)²
- Converting cm to meters by dividing by 100
- Chaining multiple validations with if/else if
- Combining two empty checks into one with ||
- Weight and height range validation to catch unrealistic inputs

Mistakes I made:
- First forgot to validate weight — only height was being checked
- Had two separate if blocks for empty checks instead of combining with ||
- Missing cursor: pointer on the button

---

## Task 12 — Number Guessing Game

A game where the computer picks a random number between 1 and 100 and the user has 3 attempts to guess it. Shows Too High, Too Low, or Correct after each guess.

Things I learned:
- `Math.floor(Math.random() * 100) + 1` to generate a random number between 1 and 100
- Using a `let attempts` variable to track guesses instead of a for loop
- Why `const` vs `let` matters — secret needed to be `let` so it could be reassigned on reset
- Template literals with backticks to show the secret number in game over message
- Checking `attempts >= maxAttempts` at the top of the click handler to stop further input
- Console history doesn't clear automatically — `console.clear()` is needed for that
- Removing console.log from final code so the user can't cheat by opening DevTools

Mistakes I made:
- First tried using a for loop to limit attempts — that just registered 3 click listeners instead of limiting clicks
- Declared secret with const so it couldn't be updated on reset — changed to let

---

## Task 13 — Digital Clock

A live digital clock that updates every second and shows the current time in 12-hour format with AM/PM, plus the full date.

Things I learned:
- `new Date()` to get the current time and date
- `setInterval()` to run a function every 1000ms (1 second)
- Why `new Date()` must be inside the interval — outside it only captures time once at page load
- `padStart()` or ternary to add leading zero — showing 09 instead of 9
- `getDay()` and `getMonth()` return numbers — need an array to convert to names
- `getHours() % 12 || 12` trick to convert 24hr to 12hr format
- Calling the function once immediately before setInterval so the clock shows right away instead of waiting 1 second

Mistakes I made:
- Used `setTimeout` instead of `setInterval` — only ran once
- Had `new Date()` outside the interval so time never updated
- `getDay()` was showing 0-6 numbers instead of day names
- `getMonth()` starts from 0 not 1 — January is 0

---

## Task 14 — Stopwatch

A stopwatch with start, stop, and reset functionality. Start button text changes to Continue after first use.

Things I learned:
- `setInterval` to increment a counter every second
- `clearInterval` to pause the timer
- Storing the interval ID in a variable so it can be cleared later
- Why `timer = null` is needed after clearInterval — without it the start button check `if (timer) return` would block restart
- Converting total seconds to HH:MM:SS using Math.floor and modulo
- Moving pad function inside counting since it is only used there

Mistakes I made:
- Used `let` instead of `const` for DOM elements
- Reset was showing 0 instead of 00 — needed to pass string '00' not number 0
- Forgot `timer = null` after stop — so clicking start again after stop was blocked

---

## Task 15 — Calculator

A fully working calculator with all basic operations built using event delegation.

Things I learned:
- Event delegation — one listener on parent instead of every button
- `e.target` to find which button was clicked
- `e.target.classList.contains('btn')` to avoid firing on the container itself
- `eval()` to calculate a string expression
- `try/catch` to handle invalid expressions gracefully
- `createElement` and `appendChild` to build all buttons dynamically from an array
- Why `innerHTML === '0'` check is needed — so numbers don't append after a leading zero

Mistakes I made:
- Attached listener to only the first button with querySelector instead of using delegation
- Forgot `if (!e.target.classList.contains('btn')) return` — so clicking the container added all button HTML to display
- Initial display was '00' but check was for '0' — so '009' was showing instead of '9'
- After Error, new input was appending to 'Error' string instead of replacing it

---

## Task 16 — Search / Filter

A live search that filters a name list as you type, showing "No results found" when nothing matches.

Things I learned:
- `querySelectorAll` returns a NodeList — forEach works directly on it, unlike `children` which returns HTMLCollection
- `input` event fires on every keystroke for live filtering
- `includes()` to check if search text exists anywhere in the name
- `toLowerCase()` on both sides so search is case-insensitive
- Tracking a `found` boolean across the forEach loop to know if any match existed
- Removing the old "No results found" element before adding a new one — otherwise it duplicates on every keystroke
- `setAttribute('id', value)` takes two arguments, not one

Mistakes I made:
- Used `lists.children.forEach()` which throws an error — children is not an array
- Wrote `nofind.setAttribute('#notFound')` with only one argument
- Wrote `msg.appendChild = nofind` as an assignment instead of calling it as a function
- Created a new "No results found" element on every keystroke without removing the old one first — caused duplicates

---

*More tasks coming daily.*