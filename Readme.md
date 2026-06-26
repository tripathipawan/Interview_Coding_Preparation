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

*More tasks coming daily.*