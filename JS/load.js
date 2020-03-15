window.addEventListener('DOMContentLoaded', (event) => {
  if ($(window).width() < 1023) {
    console.log("DOM content fully loaded and parsed");

    const dropdown = document.querySelector('.main-nav');
    const body = document.querySelector('body');
    const heading = document.querySelector('.name');
    const logo = document.querySelector('#logo-mobile');
    const mainNav = document.querySelector('.nav-header');


    function create_element(type, parent, classtype) {
      var identify = document.createElement(type);
      identify.classList.add(classtype);
      parent.appendChild(identify);
      console.log(identify);
      return identify;
    };

    const navHeight = $('.main-nav').height();

    dropdown.style.height = 0;
    dropdown.style.border = "none";
    dropdown.style.overflow = "hidden";

    var menu = document.createElement('img');
    console.log(menu);
    menu.src = 'Images/menu.png';
    mainNav.appendChild(menu);

    //Styling and setting elements in header
    mainNav.style.display = "flex";
    mainNav.style.border = "none";
    heading.style.fontSize = "3rem";
    heading.style.width = "100%";
    heading.style.paddingTop = "2.5rem";
    logo.style.margin = 0;
    logo.style.marginTop = "1rem";
    logo.style.height = 100;
    menu.style.height = 48;
    menu.style.width = 100;


  };


});
