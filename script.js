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

const plus = document.querySelectorAll(".plus");
const accor = document.querySelectorAll(".accordion-inside-2");

plus.forEach((plus, index) => {
  plus.addEventListener("click", () => {
    accor[index].classList.toggle("accorshow");

    if(accor[index].classList.contains('accorshow')){
      plus.src = 'assets/minus.png';
    }
    else{
      plus.src = 'assets/plus.png';


    }
   
  });
});
