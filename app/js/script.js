// when container with id 'btnHamburger' is clicked,
// 1. if it contains class 'open', remove it
// 2. else, add it

const btnHamburger = document.querySelector("#btnHamburger");

btnHamburger.addEventListener("click", function () {
  console.log("open hamburger");

  if (btnHamburger.classList.contains("open")) {
    btnHamburger.classList.remove("open");
  } else {
    btnHamburger.classList.add("open");
  }
});
