//The code here is the code for the datepicker which will log the date the user picks
window.addEventListener('DOMContentLoaded', (event) => {
    const contain = document.querySelector('#check-height');
    const body = document.querySelector('body');
    const wrapper = document.querySelector('.wrapper');

    function create_element(type, parent, classtype) {
      var identify = document.createElement(type);
      identify.classList.add(classtype);
      parent.appendChild(identify);
      //console.log(identify);
      return identify;
    };

    //Creating elements for confirm page

    //positions the confirmation "page" to fixed
    const confirmPosition = create_element('DIV', body, 'confirm-fixed');

    //positions everything relative to confirm
    const confirm = create_element('DIV', confirmPosition, 'confirm-box');
    confirm.classList.add('box');

    const confirmHeadingDiv = create_element('DIV', confirm, 'confirm-heading-div');

    const confirmHeadingDivH1 = create_element('H1', confirmHeadingDiv);
    confirmHeadingDivH1.innerHTML = "CONGRATULATIONS!";

    const confirmHeadingDivH1p1 = create_element('p', confirmHeadingDivH1);
    confirmHeadingDivH1p1.innerHTML = "You'll be flying with Explore";

    const confirmHeadingDivFlatten = create_element('DIV', confirmHeadingDivH1, 'confirm-heading-div-flatten');


});
