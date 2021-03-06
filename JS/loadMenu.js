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
    dropdown.style.width = 0;
    dropdown.style.border = "none";
    dropdown.style.overflow = "hidden";
    dropdown.style.paddingTop = "1.5rem";

    var menu = document.createElement('img');
    console.log(menu);
    menu.src = 'Images/menu.png';
    mainNav.appendChild(menu);

    const closeMenu = document.createElement('img');
    closeMenu.src = 'Images/close-main.png';
    mainNav.appendChild(closeMenu);
    closeMenu.style.display = 'none';

    //Styling and setting elements in header
    menu.style.order = 0;
    closeMenu.style.order = 0;
    heading.style.order = 1;
    logo.style.order = 2;

    mainNav.style.position = "fixed";
    mainNav.style.width = "101%";
    mainNav.style.top = "-3px";
    mainNav.style.left = "-0.5%";
    mainNav.style.top = 0;
    mainNav.style.justifyContent = "space-between";
    mainNav.style.display = "flex";
    mainNav.style.border = "none";
    mainNav.style.boxShadow = "0rem 0.2rem 0.4rem 0.2rem rgba(0, 0, 0, 0.1)";
    mainNav.style.top = "-1px";
    heading.style.fontSize = "3rem";
    heading.style.width = "100%";
    heading.style.paddingTop = "3rem";
    heading.style.margin = "auto";
    logo.style.margin = 0;
    logo.style.marginTop = "1.5rem";
    logo.style.height = 100;
    logo.style.width = 100;
    logo.style.marginRight = "2rem";
    menu.style.height = 100;
    menu.style.width = 100;
    menu.style.marginTop = "1.5rem";
    menu.style.marginLeft = "2rem";
    closeMenu.style.height = 100;
    closeMenu.style.width = 100;
    closeMenu.style.padding = 7;
    closeMenu.style.marginTop = "1.5rem";
    closeMenu.style.marginLeft = "2rem";


    const dropDownMargin = $('.nav-header').height();

    dropdown.style.position = "absolute";
    dropdown.style.top = dropDownMargin - 2;
    dropdown.style.backgroundColor = "white";

    menu.addEventListener('click', function() {
      dropdown.style.zIndex = 100;
      mainNav.style.position = "fixed";
      if ($('.main-nav').height() == 0) {
        dropdown.style.width = "100%";
        $('.main-nav').animate({height:"100vh"}, 500);
        menu.style.display = 'none';
        closeMenu.style.display = 'block';
      }
      closeMenu.addEventListener('click', function() {
        if ($('.main-nav').height() > 10) {
          console.log("true");
          setTimeout(function() {
            dropdown.style.width = 0;
          }, 500);
          $('.main-nav').animate({height: 0}, 500);
        }
        closeMenu.style.display = 'none';
        menu.style.display = 'block';
      })
    })


  };


});
