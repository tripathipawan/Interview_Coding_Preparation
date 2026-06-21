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

*More tasks coming daily.*