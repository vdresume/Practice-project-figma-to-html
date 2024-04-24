document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.querySelector(".navbar-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const login = document.querySelector(".logIn");

    toggleButton.addEventListener("click", function() {
      navMenu.classList.toggle("active");
      login.classList.toggle("active");
    });
  });

  // slider
  // const slider =document.querySelector('.child-box');
  // var counts = 0;
  // slider.forEach(
  //   (slide,index) =>{
  //     slide.style.left = `${index * 100}%`
  //   }
  // )
  // const goNext =()=>{
  //   counts++;
  //   slideImg();
  //   alert("sdfgh");
  // }
  // const goPre =()=>{
  //   counts--;
  //   slideImg();
  //   alert();
  // }
  // const slideImg = ()=>{
  //   slider.forEach(
  //     (slide)=>{
  //       slide.style.transalteX(`-${counts * 100}%`)
  //     }
  //   )
  // }

  

