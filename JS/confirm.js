//The code here is the code for the datepicker which will log the date the user picks
window.addEventListener('DOMContentLoaded', (event) => {
    const contain = document.querySelector('#check-height');
    const body = document.querySelector('body');
    const wrapper = document.querySelector('.wrapper');
    const show = document.querySelector('.flight-book');
    console.log(show);
    const form = document.querySelector('form');
    const containCheck = document.querySelector('#check-height');

    function create_element(type, parent, classtype) {
      var identify = document.createElement(type);
      identify.classList.add(classtype);
      parent.appendChild(identify);
      //console.log(identify);
      return identify;
    };

    //Creating elements for confirm page
    const mobileHeight = 1500;

    //positions the confirmation "page" to fixed
    const confirmPosition = create_element('DIV', body, 'confirm-fixed');
    confirmPosition.style.display = "none";

    //positions everything relative to confirm
    const confirm = create_element('DIV', confirmPosition, 'confirm-box');
    confirm.classList.add('box');

    //DIV for confirm heading background
    const confirmHeadingDiv = create_element('DIV', confirm, 'confirm-heading-div');

    //Heading and "slogan"
    const confirmHeadingDivH1 = create_element('H1', confirmHeadingDiv);
    confirmHeadingDivH1.innerHTML = "CONGRATULATIONS!";

    //Flattens the main heading DIV
    const confirmHeadingDivFlatten = create_element('DIV', confirmHeadingDivH1, 'confirm-heading-div-flatten');

    const confirmHeadingDivH1p1 = create_element('p', confirmHeadingDivH1);
    confirmHeadingDivH1p1.innerHTML = "You'll be flying with Explore";

    //Div for content, the background DIV is exclusive to the background and all child elements
    const confirmContent = create_element('DIV', confirm, 'confirm-content');
    const confirmContentBackground = create_element('DIV', confirmContent, 'confirm-content-background')

    //"2nd Heading"
    const confirmSecondHeading = create_element('H1', confirmContentBackground, 'second-heading');
    confirmSecondHeading.innerHTML = "Your Booking";

    //Main DIV for flight info
    const confirmFlightInfo = create_element('DIV', confirmContentBackground, 'confirm-flight-info')

    //Departure H1 for flight info
    const confirmDep = create_element('H1', confirmFlightInfo, 'content-heading');
    confirmDep.innerHTML = "Departure";

    //All Departure Flight Info, need to collect and add dates
    const confirmDepLoc = create_element('H1', confirmFlightInfo, 'flight-info');
    confirmDepLoc.innerHTML = "Location:";

    const confirmDepDate = create_element('H1', confirmFlightInfo, 'flight-info');
    confirmDepDate.innerHTML = "Date:";

    const confirmDepTime = create_element('H1', confirmFlightInfo, 'flight-info');
    confirmDepTime.innerHTML = "Time:";

    //Arrival H1 for flight info
    const confirmArr = create_element('H1', confirmFlightInfo, 'content-heading');
    confirmArr.innerHTML = "Arrival";

    //All Arrival Flight Info, need to collect and add dates
    const confirmArrLoc = create_element('H1', confirmFlightInfo, 'flight-info');
    confirmArrLoc.innerHTML = "Location:";

    const confirmArrDate = create_element('H1', confirmFlightInfo, 'flight-info');
    confirmArrDate.innerHTML = "Date:";

    const confirmArrTime = create_element('H1', confirmFlightInfo, 'flight-info');
    confirmArrTime.innerHTML = "Time:";

    //Price
    const price = create_element('H1', confirmFlightInfo, 'content-heading');
    price.innerHTML = "Price";

    //Adding elements to event listeners
    // show.addEventListener('click', toggleConfirmDisplay);
    //
    // //Event Listeners
    // function toggleConfirmDisplay(e) {
    //   if (form.contains(containCheck)) {
    //     confirmPosition.style.display = "block";
    //      $('.confirm-box').animate({height:mobileHeight}, 300);
    //   }
    // }

});
