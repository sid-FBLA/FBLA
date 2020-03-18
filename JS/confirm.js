//The code here is the code for the datepicker which will log the date the user picks
window.addEventListener('DOMContentLoaded', (event) => {
    const contain = document.querySelector('#check-height');
    const body = document.querySelector('body');
    const wrapper = document.querySelector('.wrapper');
    const show = document.querySelector('.flight-book');
    console.log(show);
    const form = document.querySelector('form');
    const containCheck = document.querySelector('#check-height');
    const departureLocation = document.querySelector('#departure-location');
    const arrivalLocation = document.querySelector('#arrival-location');
    const position = document.querySelector('.position');

    const check1 = $('#arrival-location');
    const check2 = $('#time1');
    const check3 = $('#time2');
    const check4 = $('#check4');

    const time1 = document.querySelector('#time1');
    const time2 = document.querySelector('#time2');
    const passengers = document.querySelector('#select-7 .selection');
    //Retrieving values

    //written in (y,x), longitude, latitude
    const newark = [40.6895, -74.1745];
    //Newark Liberty Airport
    const cleveland = [41.4058, -81.8539];
    //Cleveland Hopkins International Airport
    const boston = [42.3656, -71.0096];
    //Boston Logan International Airport
    const hartford = [41.7658, -72.6734];
    //Bradely International Airport
    const warwick = [41.7245, -71.4304];
    //TF Green International Airport
    const wilmington = [34.2669, -77.9105];
    //Wilmington International Airport
    const baltimore = [39.1774, -76.6684];

    //Functions etc...

    function create_element(type, parent, classtype) {
      var identify = document.createElement(type);
      identify.classList.add(classtype);
      parent.appendChild(identify);
      //console.log(identify);
      return identify;
    };

    //Creating elements for confirm page
    const mobileHeight = 1850;
    const pcHeight = 775;

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

    const confirmDepDate = create_element('H1', confirmFlightInfo, 'flight-info');
    //confirmDepDate.innerHTML = "Date: " + ;

    const confirmDepTime = create_element('H1', confirmFlightInfo, 'flight-info');

    //Arrival H1 for flight info
    const confirmArr = create_element('H1', confirmFlightInfo, 'content-heading');
    confirmArr.innerHTML = "Return";

    //All Arrival Flight Info, need to collect and add dates
    const confirmArrLoc = create_element('H1', confirmFlightInfo, 'flight-info');
    confirmArrLoc.innerHTML = "Location:";

    const confirmArrDate = create_element('H1', confirmFlightInfo, 'flight-info');
    confirmArrDate.innerHTML = "Date:";

    const confirmArrTime = create_element('H1', confirmFlightInfo, 'flight-info');
    confirmArrTime.innerHTML = "Time:";

    //Passengers and Price H1 for flight Info
    const confirmP = create_element('H1', confirmFlightInfo, 'content-heading');
    confirmP.innerHTML = "Flight Info";

    //Flight Class
    const confirmClass = create_element('H1', confirmFlightInfo, 'flight-info');
    confirmClass.innerHTML = "Class: Explore Seat";

    /*Flight Class "disclaimer"*/
    const confirmClassDisclaimer = create_element('p', confirmClass, 'disclaimer');
    confirmClassDisclaimer.innerHTML = "*Explore Seat is our only class, each seat is equipped with a TV and tray, and plenty of legroom.";

    //Passengers
    const confirmPassengers = create_element('H1', confirmFlightInfo, 'flight-info');
    confirmPassengers.innerHTML = "Passengers:";

    //Price
    const confirmPrice = create_element('H1', confirmFlightInfo, 'flight-info');
    confirmPrice.innerHTML = "Price:";


    //Go Back BUTTON
    const goBack = create_element('BUTTON', confirmContentBackground, 'button');
    goBack.innerHTML = "Go <br> Back";
    goBack.classList.add('confirm-submit');
    goBack.classList.add('go-back');

    //Submit BUTTON
    const submit = create_element('BUTTON', confirmContentBackground, 'button');
    submit.setAttribute("type", "submit");
    submit.innerHTML = "Confirm <br> Booking";
    submit.classList.add('confirm-submit');

    //Adding elements to event listeners
    show.addEventListener('click', toggleConfirmDisplay);
    goBack.addEventListener('click', close);
    submit.addEventListener('click', confirmSubmit);


    //Event Listeners
    var selects = $('select');
    // for (let i = 0; i < selections.length; i++) {
    //
    // };
    console.log(selects.length);
    console.log(check4.val());

    let shakeIndex = 1;

    function toggleConfirmDisplay(e) {
      if (check1.val() != '' && check2.val() != '' && check3.val() != '' && check4.val() != null) {

        const contentHeight = $('.confirm-flight-info').height();
        confirmContentBackground.style.height = contentHeight;

        const depLocation = departureLocation.options[departureLocation.selectedIndex].text;
        confirmDepLoc.innerHTML = "Departure Location: " + depLocation;

        const depDateText = document.querySelector('#select-3 .selected-date').innerHTML;
        confirmDepDate.innerHTML = "Date: " + depDateText;

        const depTimeText = time1.options[time1.selectedIndex].text;
        confirmDepTime.innerHTML = "Time: " + depTimeText;

        const arrLocation = arrivalLocation.options[arrivalLocation.selectedIndex].text;
        confirmArrLoc.innerHTML = "Arrival Location: " + arrLocation;

        const arrDateText = document.querySelector('#select-5 .selected-date').innerHTML;
        confirmArrDate.innerHTML = "Date: " + arrDateText;

        const arrTimeText = time2.options[time2.selectedIndex].text;
        confirmArrTime.innerHTML = "Time: " + arrTimeText;

        const passenger = passengers.options[passengers.selectedIndex].text;
        console.log(passenger);
        confirmPassengers.innerHTML = "Passengers: " + passenger;
        console.log(confirmPassengers);


        //The below lines are to calculate flight price

        let calcDepLocation = departureLocation.options[departureLocation.selectedIndex].value;
        console.log(calcDepLocation);
        let calcArrLocation = arrivalLocation.options[arrivalLocation.selectedIndex].value;
        console.log(calcArrLocation);

        const newark = [40.6895, -74.1745];
        //Newark Liberty Airport
        const cleveland = [41.4058, -81.8539];
        //Cleveland Hopkins International Airport
        const boston = [42.3656, -71.0096];
        //Boston Logan International Airport
        const hartford = [41.7658, -72.6734];
        //Bradely International Airport
        const warwick = [41.7245, -71.4304];
        //TF Green International Airport
        const wilmington = [34.2669, -77.9105];
        //Wilmington International Airport
        const baltimore = [39.1774, -76.6684];

        console.log(newark);

        if(calcDepLocation === "newark") {
          calcDepLocation = newark;
        }

        if(calcDepLocation === "cleveland") {
          calcDepLocation = cleveland;
        }

        if(calcDepLocation === "boston") {
          calcDepLocation = boston;
        }

        if(calcDepLocation === "hartford") {
          calcDepLocation = hartford;
        }

        if(calcDepLocation === "warwick") {
          calcDepLocation = warwick;
        }

        if(calcDepLocation === "wilmington") {
          calcDepLocation = wilmington;
        }

        if(calcDepLocation === "baltimore") {
          calcDepLocation = baltimore;
        }

        if(calcArrLocation === "newark") {
          calcArrLocation = newark;
        }

        if(calcArrLocation === "cleveland") {
          calcArrLocation = cleveland;
        }

        if(calcArrLocation === "boston") {
          calcArrLocation = boston;
        }

        if(calcArrLocation === "hartford") {
          calcArrLocation = hartford;
        }

        if(calcArrLocation === "warwick") {
          calcArrLocation = warwick;
        }

        if(calcArrLocation === "wilmington") {
          calcArrLocation = wilmington;
        }

        if(calcArrLocation === "baltimore") {
          calcArrLocation = baltimore;
        }

        let passengerNumber = passengers.options[passengers.selectedIndex].value;

        console.log(calcArrLocation);
        console.log(calcDepLocation);

        let flightPrice = calc(calcDepLocation, calcArrLocation);
        console.log(flightPrice);

        flightPrice = flightPrice*passengerNumber

        confirmPrice.innerHTML = "Price: " + flightPrice + "USD";

        if ($(window).width() < 1024) {
          if ($('.confirm-box').height() < mobileHeight) {
            confirmPosition.style.display = "block";
            $('.confirm-box').animate({height:mobileHeight}, 300);
            confirmBox.style.maxHeight = "100vh";
          }
        }

        if ($(window).width() >= 1024) {
          confirmPosition.style.width = 819.19;
          confirm.style.width = 819.19;

          if ($('.confirm-box').height() < pcHeight) {
            confirmPosition.style.display = "block";
            $('.confirm-box').animate({height:pcHeight}, 300);
          }
        }

        if ($(window).width() >= 1440) {
          confirmPosition.style.width = 1208;
          confirm.style.width = 1208;

          if ($('.confirm-box').height() < pcHeight) {
            confirmPosition.style.display = "block";
            $('.confirm-box').animate({height:pcHeight}, 300);
          }
        }

        console.log(flightPrice);

        let flightPriceText = String(flightPrice);

        if (flightPriceText === "NaN") {
          confirmPosition.style.display = "none";
          $('.confirm-box').height(0);
          const flashMessage = create_element('DIV', wrapper, 'flash-message');
          flashMessage.innerHTML = "Make sure you have made a valid selection for each option."
          flashMessage.setAttribute('ID', 'flashMessage');
          if ($(window).width() >= 1024) {
            wrapper.insertBefore(flashMessage, position);
          }
          if ($('.flash-message').length > 1) {
            wrapper.removeChild(flashMessage);
          }
          $('#flashMessage')
            .hide()
            .slideDown(820)
            .delay(5000)
            .slideUp(820);
          $('.position').addClass('shake');
          setTimeout(function() {
            $('.position').removeClass('shake');
          }, 820);
        }

      } else if($('#check-height').height() > 90) {
        const flashMessage = create_element('DIV', wrapper, 'flash-message');
        flashMessage.innerHTML = "Make sure you have made a valid selection for each option.";
        flashMessage.setAttribute('ID', 'flashMessage');
        if ($(window).width() >= 1024) {
          wrapper.insertBefore(flashMessage, position);
        }
        if ($('.flash-message').length > 1) {
          wrapper.removeChild(flashMessage);
        }
        $('#flashMessage')
          .hide()
          .slideDown(820)
          .delay(5000)
          .slideUp(820);
        $('.position').addClass('shake');
        setTimeout(function() {
          $('.position').removeClass('shake');
        }, 820);
      }
    }


    function calc(city1, city2) {
      let lon1 = city1[1];
      let lon2 = city2[1];
      let lat1 = city1[0];
      let lat2 = city2[0];
      var R = 6371; // kilo-metres
      var φ1 = lat1 * Math.PI / 180;
      var φ2 = lat2 * Math.PI / 180;
      var Δφ = (lat2-lat1)* Math.PI / 180;
      var Δλ = (lon2-lon1)* Math.PI / 180;

      var a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
              Math.cos(φ1) * Math.cos(φ2) *
              Math.sin(Δλ/2) * Math.sin(Δλ/2);
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));

      var distance = (R * c);

      if (distance < 100) {
        return "no";
      }
      //0.09 is the price/km
      var price = Math.ceil((distance*0.09)/10)*10 + 50;
      console.log(price);
      price = price*2;
      return price;
      console.log(price);
    };

    function close(e) {
      $('.confirm-box').animate({height:0}, 300);
      $('.confirm-fixed').delay(3000).hide();
    }

    function confirmSubmit(e) {
      $('.confirm-box').animate({height:0}, 300);
      $('.confirm-fixed').delay(3000).hide();
      alert("Congratulations! You'll be flying with Explore Airlines, your flight has been booked.");
    }

    console.log(calc(newark, hartford));

});
