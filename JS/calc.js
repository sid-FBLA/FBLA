window.addEventListener('DOMContentLoaded', (event) => {
  console.log("DOM content fully loaded and parsed");

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



  /*other global variables*/


  console.log("hi");

  // function calc(city1, city2) {
  //   var x1 = city1[1];
  //   var y1 = city1[0];
  //   var x2 = city2[1];
  //   var y2 = city2[0];
  //   //one degree of longitude is 84km at latitude 41.5 if f(x) is a logarithmic function and g(x) is a sine function then input f(g(x))
  //   //one degree of latitude is approx 111km
  //   //The multiplication to convert to km
  //   var xdistance = (x2 - x1)*111;
  //   console.log(xdistance);
  //   var ydistance = (y2 - y1)*84;
  //   console.log(ydistance);
  //   var xsquared = Math.pow(xdistance, 2);
  //   console.log(xsquared);
  //   var ysquared = Math.pow(ydistance, 2);
  //   console.log(ysquared);
  //   var squaresadded = xsquared + ysquared;
  //   console.log(squaresadded);
  //   var distance = Math.sqrt(squaresadded);
  //   console.log(distance);
  //   if (distance < 100) {
  //     return "no";
  //   }
  //   //0.17 is the price/km
  //   var price = Math.ceil((distance*0.09)/10)*10 + 50;
  //   price = price*2;
  //   return price;
  //   console.log(price);
  // };

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
    price = price*2;
    return price;
    console.log(price);
  };

  console.log(calc(newark, cleveland));
  console.log(calc(newark, boston));
  console.log(calc(newark, hartford));
  console.log(calc(newark, warwick));
  console.log(calc(newark, wilmington));
  console.log(calc(newark, baltimore));

  let search = document.querySelector('.flight-book');
  const form = document.querySelector('form');
  const select = document.querySelector('.selection');
  const wrapper = document.querySelector('.wrapper');
  const selectMenus = document.querySelectorAll('.selection')
  const body = document.querySelector('body');
  const select1 = document.querySelector('#select-1');
  const select2 = document.querySelector('#select-2');
  const windowWidth = $('body').width();

  let searchClick = 0;

  //Function for creating elements
  function create_element(type, parent, classtype) {
    var identify = document.createElement(type);
    identify.classList.add(classtype);
    parent.appendChild(identify);
    console.log(identify);
    return identify;
  };


  //creates the element contain
  let contain = create_element('DIV', form);
  contain.style.display = "inline-block";
  contain.style.width = "100%";
  contain.setAttribute("id", "check-height");


  //function to create select elements
  function create_select(identify) {
    let select = create_element('DIV', contain, 'relative');
    select.setAttribute('ID', identify);
    contain.appendChild(select);
    return select;
  };

  //function to create arrow Elements
  function create_arrow(parent) {
    let arrow = create_element('SPAN', parent, 'arrow');
    return arrow;
  };

    //function to create down arrow image
  function create_image() {
    let img = create_element('img', contain);
    console.log(img);
    img.src = '../../Images/down-arrow.png';
    img.width = 32;
    img.height = 32;
  }

  //Departure date elements down-arrow right offset
  let offSet = $('.selection').outerWidth();
  console.log(offSet);
  let outerSet = offSet/4;
  console.log(outerSet);
  let right = outerSet + 16;

  /*Submit info button*/
  console.log(searchClick);

  /*Departure Date Heading*/
  const depHeading = create_element('H2', contain, 'select-heading');
  depHeading.innerHTML = 'Departure Date';

  /*Depature Date Select DIV + Arrow(this has been created underneath the function)*/
  const select3 = create_select('select-3');
  const arrow0 = create_arrow(select3);
  arrow0.style.right = right;

  /*Depature Time Select DIV + Arrow*/
  const select4 = create_select('select-4');
  const arrow1 = create_arrow(select4);

  /*Departure date + time select menus*/
  const depDate = create_element('DIV', select3, 'selection');
  depDate.classList.add('left');
  depDate.style.borderWidth = 1;
  depDate.style.cssFloat = "left";
  depDate.style.width = "75%";
  depDate.style.marginBottom = 8;

  /*Date Format*/
  const format_tell = create_element('p', contain, 'disclaimer');
  format_tell.innerHTML = "*Dates are in DD/MM/YYYY format";

  const depTime = create_element('SELECT', select4, 'selection');
  depTime.setAttribute('ID', "time1");
  depTime.classList.add('right');
  depTime.style.width = "25%";
  depTime.style.cssFloat = "right";
  depTime.style.marginBottom = 8;
  const depChoose = create_element('option', depTime);
  depChoose.innerHTML = "Time";
  depChoose.value = "";
  const depTime1 =  create_element('option', depTime);
  depTime1.innerHTML = "14:00";
  depTime1.value = "14:00";
  const depTime2 =  create_element('option', depTime);
  depTime2.innerHTML = "19:00";
  depTime2.value = "19:00";


  /*Down Arrow*/
  create_image();

  /*Arrival Date Heading*/
  const arrHeading = create_element('H2', contain, 'select-heading');
  arrHeading.innerHTML = 'Return Date';

  /*Arrival Date Select DIV + Arrow*/
  const select5 = create_select('select-5');
  const arrow2 = create_arrow(select5);
  arrow2.style.right = right;

  /*Arrival Time Select DIV + Arrow*/
  const select6 = create_select('select-6');
  const arrow3 = create_arrow(select6);

  /*Arrival date + time select menus*/
  const arrDate = create_element('DIV', select5, 'selection');
  arrDate.setAttribute('ID', 'check4');
  arrDate.style.borderWidth = 1;
  arrDate.style.cssFloat = "left";
  arrDate.style.width = "75%";
  arrDate.style.marginBottom = 8;

  /*Date Format*/
  const format_tell2 = create_element('p', contain, 'disclaimer');
  format_tell2.innerHTML = "*Dates are in DD/MM/YYYY format";

  const arrTime = create_element('SELECT', select6, 'selection');
  arrTime.setAttribute('ID', "time2");
  arrTime.style.width = "25%";
  arrTime.style.cssFloat = "right";
  arrTime.style.marginBottom = 8;
  const arrChoose = create_element('option', arrTime);
  arrChoose.innerHTML = "Time";
  arrChoose.value = "";
  const arrTime1 =  create_element('option', arrTime);
  arrTime1.innerHTML = "14:00";
  arrTime1.value = "14:00";
  const arrTime2 =  create_element('option', arrTime);
  arrTime2.innerHTML = "19:00";
  arrTime2.value = "19:00";
  console.log(arrTime2.value);

  /*Down Arrow*/
  create_image();

  /*Passengers Heading*/
  const passengerHeading = create_element('H1', contain, 'select-heading');
  passengerHeading.innerHTML = "Passengers";

  /*Select DIV + arrow*/
  const select7 = create_select('select-7');
  const arrow4 = create_arrow(select7);

  /*Passenger number selection*/
  const passengerSelect = create_element('SELECT', select7, 'selection');

  /*Creating options for passengerSelect*/
  const pass1 =  create_element('option', passengerSelect);
  pass1.innerHTML = "1 Passenger";
  pass1.value = "1";

  const pass2 =  create_element('option', passengerSelect);
  pass2.innerHTML = "2 Passengers";
  pass2.value = "2";

  const pass3 =  create_element('option', passengerSelect);
  pass3.innerHTML = "3 Passengers";
  pass3.value = "3";

  const pass4 =  create_element('option', passengerSelect);
  pass4.innerHTML = "4 Passengers";
  pass4.value = "4";

  const pass5 =  create_element('option', passengerSelect);
  pass5.innerHTML = "5 Passengers";
  pass5.value = "5";

  const pass6 =  create_element('option', passengerSelect);
  pass6.innerHTML = "6 Passengers";
  pass6.value = "6";

  const pass7 =  create_element('option', passengerSelect);
  pass7.innerHTML = "7 Passengers";
  pass7.value = "7";

  const pass8 =  create_element('option', passengerSelect);
  pass8.innerHTML = "8 Passengers";
  pass8.value = "8";

  const pass9 =  create_element('option', passengerSelect);
  pass9.innerHTML = "9 Passengers";
  pass9.value = "9";

  /*Disclaimer*/
  const disclaimer = create_element('DIV', contain, 'disclaimer');
  disclaimer.textContent = "*All flights are two-way trips";

  const containHeight = $('#check-height').outerHeight(true);

  $('#check-height').height(0);

  //Date picker
  //body.style.backgroundColor = '#FFCE00';

  const arrow = $('.arrow');

  function create_element(type, parent, classtype) {
    var identify = document.createElement(type);
    identify.classList.add(classtype);
    parent.appendChild(identify);
    //console.log(identify);
    return identify;
  };

  //Creates DIV for datepicker fixed positioning
  const contain_date_picker = create_element('DIV', body, 'fixed');
  contain_date_picker.classList.add('height-none');
  //Creates DIV for heading for date_picker
  const heading_div = create_element('DIV', contain_date_picker, 'heading-div');

  //Creates HEADINGS for datepicker both departure and arrival
  const date_picker_heading_departure = create_element('H1', heading_div, 'date-picker-heading');
  date_picker_heading_departure.innerHTML = "Departure Date";
  let depIndex = 0;
  const date_picker_heading_arrival = create_element('H1', heading_div, 'date-picker-heading');
  date_picker_heading_arrival.setAttribute('id', 'arrival-heading');
  date_picker_heading_arrival.innerHTML = "Return Date";
  $('#arrival-heading').offset({left: windowWidth});

  //Creates main date-picker DIV
  const date_picker = create_element('DIV', contain_date_picker, 'date-picker');

  //Selects DIV for selected date, display formatted selected date
  const selected_date = create_element('DIV', select3, 'selected-date');
  const selected_arrival_date = create_element('DIV', select5, 'selected-date');

  //Creates DIV that holds all dates
  const dates = create_element('DIV', date_picker, 'dates');

  //Creates DIV that holds all months
  const months = create_element('DIV', dates, 'months');

  //Creates DIVs that allow the user to swithc between months
  const prevMonth = create_element('DIV', months, 'pointers');
  prevMonth.classList.add('prev-mth');
  prevMonth.innerHTML = '&lt;';

  //Class inbetween two arrows to style month text
  const mth = create_element('DIV', months, 'mth');

  const nextMonth = create_element('DIV', months, 'pointers');
  nextMonth.classList.add('next-mth');
  nextMonth.innerHTML = '&gt;';

  //Array displaying all the days in a month
  const days = create_element('DIV', dates, 'days');

  //Image for closing
  var close = document.createElement('img');
  close.src = '../Images/close.png';
  heading_div.appendChild(close);
  close.style.position = 'absolute';
  close.classList.add('close-position')

  //SET text
  const dates_height = $('.dates').height();
  const set = create_element('H3', date_picker, 'set');
  set.classList.add('close-position');
  set.innerHTML = 'SET';
  set.style.top = dates_height;
  set.style.right = 46;

  //Adding variables that are associated with elements in date-picker
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
'October', 'November', 'December'];

  //const daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let selectedDate =  date;
  let selectedDay = day;
  let selectedMonth = month;
  let selectedYear = year;

  let selectedArrivalDate = date;
  let selectedArrivalDay = day;
  let selectedArrivalMonth = month;
  let selectedArrivalYear = year;

  console.log(monthsOfYear[month]);
  mth.innerHTML = monthsOfYear[month] + ' ' + year;

  selected_date.innerHTML = formatDate(date);

  //Adding event Listeners
  select3.addEventListener('click', toggleDatePickerDisplay);
  select5.addEventListener('click', toggleDatePickerDisplay);
  nextMonth.addEventListener('click', goToNextMonth);
  prevMonth.addEventListener('click', goToPrevMonth);
  close.addEventListener('click', closeDatePicker);
  set.addEventListener('click', toggleDepartureArrival);
  set.addEventListener('click', populateUnavailableDates);
  populateUnavailableDates();
  populateDates();
  populateUnavailableDates();

  //Event Listeners that relate exclusively to date picker
  function toggleDatePickerDisplay(e) {
    e.stopPropagation();
    if (contain_date_picker.classList.contains('height-none')) {
      contain_date_picker.classList.remove('height-none');
      contain_date_picker.classList.add('height-full');
    } else if (contain_date_picker.classList.contains('height-full')) {
      contain_date_picker.classList.remove('height-full');
      contain_date_picker.classList.add('height-none');
    }
  }

//This line may be useless
 function closeDatePicker(e) {
   contain_date_picker.classList.remove('height-full');
   contain_date_picker.classList.add('height-none');
 }

 function toggleDepartureArrival(e) {
   //original width of the arrival date heading is 492px
   e.stopPropagation();
   if ($(window).width() >= 320 && $(window).width() < 1024) {
     date_picker_heading_arrival.style.width = 492;
     let arrivalLeft = windowWidth/2 - 492/2;
     date_picker_heading_arrival.style.marginLeft = 0;
     date_picker_heading_departure.style.display = "none";
     $('#arrival-heading').animate({
       left: arrivalLeft}, 492, 'linear'
     );
     date_picker_heading_arrival.style.width = 492;
     depIndex = 1;
   }

   if ($(window).width() >= 1024) {
     date_picker_heading_arrival.style.width = 246;
     let arrivalLeft = windowWidth/2 - 246/2;
     date_picker_heading_arrival.style.marginLeft = 0;
     date_picker_heading_departure.style.display = "none";
     $('#arrival-heading').animate({
       left: arrivalLeft}, 246, 'linear'
     );
     date_picker_heading_arrival.style.width = 246;
     depIndex = 1;
   };

   select3.addEventListener('click', function() {
     depIndex = 0;
     date_picker_heading_arrival.style.display = "none";
     date_picker_heading_departure.style.display = "block";
     populateUnavailableDates();
     set.addEventListener('click', toggleDatePickerDisplay);
     if (contain_date_picker.classList.contains('height-none')) {
       set.removeEventListener('click', toggleDatePickerDisplay);
     }
   });

 }

 select5.addEventListener('click', function() {
   //Declaring some variables any styles
   if ($(window).width() >= 320 && $(window).width() < 1024) {
     date_picker_heading_arrival.style.width = 492;
     let arrivalLeft = windowWidth/2 - 492/2;
     date_picker_heading_arrival.style.marginLeft = 0;
     depIndex = 1;
     date_picker_heading_departure.style.display = "none";
     date_picker_heading_arrival.style.display = "block";
     $('#arrival-heading').animate({
       left: arrivalLeft}, 10, 'linear'
     );
   }
   if ($(window).width() >= 1024) {
     date_picker_heading_arrival.style.width = 246;
     let arrivalLeft = windowWidth/2 - 246/2;
     date_picker_heading_arrival.style.marginLeft = 0;
     depIndex = 1;
     date_picker_heading_departure.style.display = "none";
     date_picker_heading_arrival.style.display = "block";
     $('#arrival-heading').animate({
       left: arrivalLeft}, 10, 'linear'
     );
   }
   //Done that
   populateUnavailableDates();
   set.addEventListener('click', toggleDatePickerDisplay);
   if (contain_date_picker.classList.contains('height-none')) {
     set.removeEventListener('click', toggleDatePickerDisplay);
   }
 });


  function goToNextMonth(e) {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }

    if (year > 2020) {
      alert('Our flight schedules do not expand this far into the future');
      month = 0;
      year = 2020;
    }

    mth.innerHTML = monthsOfYear[month] + ' ' + year;

    populateDates();
    populateUnavailableDates();
  }

  function goToPrevMonth(e) {
    month--;
    if (month < 0) {
      month = 11;
      year--;
    }
    if (year < 2020) {
      alert('you cannot book for a flight in the past');
      month = 0;
      year = 2020;
    }
    mth.innerHTML = monthsOfYear[month] + ' ' + year;

    populateDates();
    populateUnavailableDates();
  }

  let modifier = true;
  //Unavailable dates for populateDates();
  //selects days that are not available

  function populateUnavailableDates() {
    let arr = [
        [3, 9, 20, 27],
        [5, 12, 15, 22],
        [7, 21, 22],
        [3, 9, 15, 27],
        [7, 11, 15, 21],
        [11, 17, 19],
        [5, 3, 7, 20, 25],
        [7, 15, 21, 29],
        [9, 15, 31],
        [12, 21, 27],
        [6]
    ];

    let arr2 = [
        [5, 12, 15, 22],
        [3, 9, 23, 27],
        [9, 19, 26],
        [3, 4, 21],
        [11, 19],
        [7, 9],
        [20, 25],
        [12, 29],
        [15, 17, 31],
        [13, 23, 27],
        []
    ];
    var unavailableDates = arr[month];
    console.log(unavailableDates);

    var unavailableArrDates = arr2[month];

    if(depIndex == 0) {
      for (let i = 0; i < 6; i++) {
        $(".day:contains('" + unavailableArrDates[i] + "')").removeClass('unavailable');
        $(".day:contains('" + unavailableDates[i] + "')").addClass('unavailable');
        console.log(unavailableDates[i]);
        // let unavailableMark = $(".day:contains('" + unavailableDates[i] + "')");
        // console.log(unavailableMark);
        // console.log(unavailableDates);
        // create_element('DIV', days.unavailableDates, 'day-unavailable');
      }

      let unavailables = document.querySelectorAll('.unavailable');
      console.log(unavailables.length);
      if (unavailables.length > 5) {
        $(".day:contains('23')").removeClass('unavailable');
        $(".day:contains('25')").removeClass('unavailable');
        $(".day:contains('31')").removeClass('unavailable');
        $(".day:contains('29')").removeClass('unavailable');
        $(".day:contains('15')").removeClass('unavailable');
      }
    }

    if(depIndex == 1) {
      for (let i = 0; i < 6; i++) {
        $(".day:contains('" + unavailableDates[i] + "')").removeClass('unavailable');
        $(".day:contains('" + unavailableArrDates[i] + "')").addClass('unavailable');
        console.log(unavailableArrDates[i]);
      }
      let unavailables = document.querySelectorAll('.unavailable');
      console.log(unavailables.length);
      if (unavailables.length > 5) {
        $(".day:contains('23')").removeClass('unavailable');
        $(".day:contains('25')").removeClass('unavailable');
        $(".day:contains('31')").removeClass('unavailable');
        $(".day:contains('29')").removeClass('unavailable');
        $(".day:contains('15')").removeClass('unavailable');
      }
    }


};

  function populateDates(e) {


    days.innerHTML = '';

    let amountDays = 30;

    if (month == 1) {
      amountDays = 28;
      days.style.height = 500;
      if ($(window).width() >= 1023) {
        days.style.height = 400;
      }
    }

    if (month == 0 || month == 2 || month == 4 || month == 6 || month == 7 || month == 9 || month == 11) {
      amountDays = 31;
      days.style.height = 623.5;
      if ($(window).width() >= 1023) {
        days.style.height = 400;
      }
    }


    for (let i = 0; i < amountDays; i++) {
      const day = create_element('DIV', days, 'day');
      day.innerHTML = i + 1;
      day.textContent = i + 1;

      if (selectedDay == (i + 1) && selectedMonth == month && selectedYear == year) {
        day.classList.add('selected');
      }

      if (day.classList.contains('unavailable')) {
      }

      let selectedDayValue = Number(day.innerHTML);
      let selectedMonthValue = month+1;
      today = new Date();
      var dd = today.getDate();
      var mm = today.getMonth()+1;

      day.addEventListener('click', function() {
        if(depIndex == 0) {
          if (day.classList.contains('unavailable')) {
            alert('Sorry, you can only fly on available dates, any dates marked in gray are unavailable.');
            return false;
          }
          if (selectedMonthValue < mm || selectedDayValue < dd && selectedMonthValue <= mm) {
            alert('You cannot book for a flight in the past.');
            return false;
          }
          selectedDate = new Date(year + '-' + (month + 1) + '-' + (i+1));
          selectedDay = (i + 1);
          selectedMonth = month;
          selectedYear = year;
          selected_date.textContent = formatDate(selectedDate);
          selected_date.dataset.value = selectedDate;
          populateUnavailableDates();
          populateDates();
          populateUnavailableDates();
        } else if (depIndex == 1) {
            console.log(depIndex);
            if (day.classList.contains('unavailable')) {
              alert('Sorry, you can only fly on available dates, any dates marked in gray are unavailable.');
              return false;
            }
            if (selectedMonthValue < mm || selectedDayValue < dd && selectedMonthValue <= mm) {
              alert('You cannot book for a flight in the past.');
              return false;
            } //if you have time work on this statement so that if a user presses the arrival before he departs
            // else if(selectedMonthValue <  || selectedDayValue <  && selectedMonthValue <= ) {
            //   alert('Your arrival must be after your departure.')
            // }
            selectedDate = new Date(year + '-' + (month + 1) + '-' + (i+1));
            selectedDay = (i + 1);
            selectedMonth = month;
            selectedYear = year;
            if (day.classList.contains('unavailable')) {
              alert('Sorry, you can only fly on available dates, any dates marked in gray are unavailable');
              day.classList.remove('selected');
              day.classList.add('unavailable');
            }
            selected_arrival_date.textContent = formatDate(selectedDate);
            selected_arrival_date.dataset.value = selectedDate;
            populateUnavailableDates();
            populateDates();
            populateUnavailableDates();
            set.addEventListener('click', toggleDatePickerDisplay);
          //});
        }
      });
    }
  }

  //All event listners


  /* "flip" arrows */
  function flipper(e) {
    e.stopPropagation();
    let arrow = e.target.previousElementSibling;
    if (arrow.classList.contains('arrow-up')) {
      arrow.classList.remove('arrow-up');
      arrow.classList.add('arrow-down');
    } else if (arrow.classList.contains('arrow-down')) {
      arrow.classList.remove('arrow-down');
      arrow.classList.add('arrow-up');
    } else {
      arrow.classList.remove('arrow-up');
      arrow.classList.add('arrow-down');
    }

  };

  /* Changes the arrow class to "up" when the user presses outside the body */
  $("body").click(e => {
    $('.arrow').removeClass('arrow-down');
    $('.arrow').addClass('arrow-up');
  });

  /*Helper functions*/

  //Checks if an element has a specific class
  function checkEventPathForClass (path, selector) {
    for(let i = 0; i < path.length; i++) {
      if (path[i].classList && path[i].classList.contains(selector)) {
      return true;
      } else {
      return false;
      }
    }
  }

  function formatDate(d) {
    let day = d.getDate();

    if (day < 10) {
      day = '0' + day;
    }

    let month = d.getMonth() + 1;

    if (month < 10) {
      month = '0' + month;
    }

    let year = d.getFullYear();

    return day + ' / ' + month + ' / ' + year;
  }

    /* "Adding" all arrows to event listener */
    select1.addEventListener('click', flipper);
    select2.addEventListener('click', flipper);
    select3.addEventListener('click', flipper);
    select4.addEventListener('click', flipper);
    select5.addEventListener('click', flipper);
    select6.addEventListener('click', flipper);
    select7.addEventListener('click', flipper);

  console.log($('#time1'))

  contain.style.overflow = "hidden";

  let newContainHeight = 500;

  if ($(window).width() <= 1023 ) {
    search.addEventListener('click', function() {
      if(searchClick === 0) {
          console.log(containHeight);
          $('#check-height').animate({height:containHeight}, 1000);
          console.log(containHeight);
          const buttonbook = document.querySelector('.flight-book');
          buttonbook.style.backgroundColor = '#f10000';
          buttonbook.style.color = 'white';
          buttonbook.innerHTML = 'BOOK';
          searchClick = 1;
        }
      });
    }


  //Laptops media query 1024px
  if ($(window).width() >= 1023) {

    //Contain Height

    //setting widths of elements with classes left and right
    const select3 = document.querySelector('#select-3');
    const select5 = document.querySelector('#select-5');
    const time1 = document.querySelector('#time1');
    const time2 = document.querySelector('#time2');
    const bookingBox = document.querySelector('.position');
    console.log(bookingBox);

    const widthLeft = $('#select3').outerWidth();
    const widthRight = $('#time1').outerWidth();

    console.log(widthRight);

    select3.style.width = widthLeft - 8;
    select5.style.width = widthLeft - 8;

    time1.style.width = widthRight - 8;
    time2.style.width = widthRight - 8;

    console.log(time1.style.width = widthRight - 8);

    //Setting positions of selections for selected date dropdown arrow
    let newOffSet = $('#time1').outerWidth();
    console.log(newOffSet);
    let newOuterSet = newOffSet;
    console.log(newOuterSet);
    let newRight = newOuterSet + 24;
    console.log(newRight);

    /*arrows 0 and 2, are for select 3 and select 5 respectively*/
    arrow0.style.right = newRight;
    arrow2.style.right = newRight;

    //Date Picker
    days.style.height = 400;

    //Contain Height
    //Now that all the elements are inside the container we can check for the height of the container
    contain.style.overflow = "hidden";

    let newContainHeight = 549;

    console.log(newContainHeight);

    /*date booking for mobile*/
    search.addEventListener('click', function() {
      if(searchClick === 0) {
          console.log(newContainHeight);
          $('#check-height').animate({height:newContainHeight}, 1000);
          console.log(newContainHeight);
          const buttonbook = document.querySelector('.flight-book');
          searchClick = 1;
        }
      });



  }




});
