const hamburger = document.querySelector('#hamburger');
const dropdown = document.querySelector('.dropdown-menu');

hamburger.addEventListener('click', ()=>{
    dropdown.classList.toggle('show')
    console.log(dropdown)

   
})
