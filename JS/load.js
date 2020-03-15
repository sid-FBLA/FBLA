window.addEventListener('DOMContentLoaded', (event) => {
  console.log("DOM content fully loaded and parsed");

  const dropdown = document.querySelector('.main-nav');
  const body = document.querySelector('body');


  function create_element(type, parent, classtype) {
    var identify = document.createElement(type);
    identify.classList.add(classtype);
    parent.appendChild(identify);
    console.log(identify);
    return identify;
  };

  navDiv = document.createElement('DIV', )
});
