//Selectors

let homeScoreEl = document.getElementById("home-score");
let guestScoreEl = document.getElementById("guest-score");

let homeScoreBtnOne = document.getElementById("home-score-btn-1");
let homeScoreBtnTwo = document.getElementById("home-score-btn-2");
let homeScoreBtnThree = document.getElementById("home-score-btn-3");
let resetHomeScore = document.getElementById("reset-home-score");
let resetGuestScore = document.getElementById("reset-guest-score");

let guestScoreBtnOne = document.getElementById("guest-score-btn-1");
let guestScoreBtnTwo = document.getElementById("guest-score-btn-2");
let guestScoreBtnThree = document.getElementById("guest-score-btn-3");

// === Button Function - Home === \\

// Button - 1 - Home

homeScoreBtnOne.addEventListener("click", function () {
  homeScoreEl.textContent++;
});

// Button - 2 - Home

homeScoreBtnTwo.addEventListener("click", function () {
  homeScoreEl.textContent = Number(homeScoreEl.textContent) + 2;
});

// Button - 3 - Home

homeScoreBtnThree.addEventListener("click", function () {
  homeScoreEl.textContent = Number(homeScoreEl.textContent) + 3;
});

// Reset - Home

resetHomeScore.addEventListener("click", function () {
  homeScoreEl.textContent = 0;
});

// === Button Function - Guest === \\

// Button - 1 - Guest

guestScoreBtnOne.addEventListener("click", function () {
  guestScoreEl.textContent++;
});

// Button - 2 - Guest

guestScoreBtnTwo.addEventListener("click", function () {
  guestScoreEl.textContent = Number(guestScoreEl.textContent) + 2;
});

// Button - 3 - Guest

guestScoreBtnThree.addEventListener("click", function () {
  guestScoreEl.textContent = Number(guestScoreEl.textContent) + 3;
});

// Reset - Guest

resetGuestScore.addEventListener("click", function () {
  guestScoreEl.textContent = 0;
});
