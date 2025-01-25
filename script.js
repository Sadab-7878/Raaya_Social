const hamburger = document.querySelector("#hamburger");
const dropdown = document.querySelector(".dropdown-menu");

hamburger.addEventListener("click", () => {
  dropdown.classList.toggle("show");
  console.log(dropdown);

  if (dropdown.classList.contains("show")) {
    hamburger.src = "assets/wrong.png";
  } else {
    hamburger.src = "assets/hamburger.png";
  }
});
