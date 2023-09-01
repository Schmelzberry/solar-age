import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import Age from './../src/earth.js';

// UI LOGIC //
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("user-age");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    let userNumber = enteredAge();
    const userAge = new Age(userNumber);
    displayResults(userAge);
  });
});

function enteredAge() {
  const answer = document.querySelector("input#age").value;
  return answer
}

function displayResults(userAge) {
  const ageResult = document.getElementById("age-results");
  ageResult.innerText = userAge;

  const resultsDiv = document.getElementById("results");
  resultsDiv.removeAttribute("class");
}