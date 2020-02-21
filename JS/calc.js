window.addEventListener('DOMContentLoaded', (event) => {
  console.log("DOM content fully loaded and parsed");

  const newark = [40.6895, -74.1745];
  //Newark Liberty Airport
  const cleveland = [41.4058, -81.8539];
  //Cleveland Hopkins International Airport
  const boston = [42.3656, -71.0096];
  //Boston Logan International Airport
  const hartford = [41.7658, -72.6734];
  const warwick = [41.7001, -71.4162];
  const wilmington = [34.2669, -77.9105];
  const baltimore = [39.1774, -76.6684];


  /*other global variables*/


  console.log("hi");

  function calc(city1, city2) {
    var x1 = city1[0];
    var y1 = city1[1];
    var x2 = city2[0];
    var y2 = city2[1];
    //one degree of longitude is 84km at latitude 41.5
    //one degree of latitude is approx 111km
    //The multiplication to convert to km
    var xdistance = (x2 - x1)*111;
    console.log(xdistance);
    var ydistance = (y2 - y1)*84;
    console.log(xdistance);
    var xsquared = Math.pow(xdistance, 2);
    console.log(xsquared);
    var ysquared = Math.pow(ydistance, 2);
    console.log(ysquared);
    var squaresadded = xsquared + ysquared;
    console.log(squaresadded);
    var distance = Math.sqrt(squaresadded);
    console.log(distance);
    //0.17 is the price/km
    var price = Math.ceil(((distance*0.17)/10))*10;
    if(distance < 100) {
      return "no";
    }
    return price;
  };

  console.log(calc(boston, warwick));
  console.log(calc(newark, cleveland));

  let search = document.querySelector('.flight-book');
  const form = document.querySelector('form');
  const select = document.querySelector('.selection');
  const wrapper = document.querySelector('.wrapper');
  const selectMenus = document.querySelectorAll('.selection')
  console.log(selectMenus);
  const body = document.querySelector('body');
  const select1 = document.querySelector('#select-1');
  console.log(select1);
  const select2 = document.querySelector('#select-2');

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

  console.log(contain);

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
  let offSet = $('.selection').width();
  console.log(offSet);
  let outerSet = offSet/4;
  console.log(outerSet);
  let right = outerSet + 16;
  console.log(right);

  console.log('hi')

  /*Submit info button*/
  console.log(searchClick);

  /*Departure Date Heading*/
  const depHeading = create_element('H2', contain, 'select-heading');
  depHeading.innerHTML = 'Departure Date';

  /*Depature Date Select DIV + Arrow(this has been created underneath the function)*/
  const select3 = create_select('select-3');
  console.log(select3);
  const arrow0 = create_arrow(select3);
  arrow0.style.right = right;
  console.log(arrow0);

  /*Depature Time Select DIV + Arrow*/
  const select4 = create_select('select-4');
  const arrow1 = create_arrow(select4);

  /*Departure date + time select menus*/
  const depDate = create_element('DIV', select3, 'selection');
  depDate.style.borderWidth = 1;
  depDate.style.cssFloat = "left";
  depDate.style.width = "75%";
  depDate.style.marginBottom = 8;

  const depTime = create_element('SELECT', select4, 'selection');
  depTime.style.width = "25%";
  depTime.style.cssFloat = "right";
  depTime.style.marginBottom = 8;

  /*Down Arrow*/
  create_image();

  /*Arrival Date Heading*/
  const arrHeading = create_element('H2', contain, 'select-heading');
  arrHeading.innerHTML = 'Arrival Date';

  /*Arrival Date Select DIV + Arrow*/
  const select5 = create_select('select-5');
  const arrow2 = create_arrow(select5);
  arrow2.style.right = right;

  /*Arrival Time Select DIV + Arrow*/
  const select6 = create_select('select-6');
  const arrow3 = create_arrow(select6);

  /*Arrival date + time select menus*/
  const arrDate = create_element('DIV', select5, 'selection');
  arrDate.style.borderWidth = 1;
  arrDate.style.cssFloat = "left";
  arrDate.style.width = "75%";
  arrDate.style.marginBottom = 8;

  const arrTime = create_element('SELECT', select6, 'selection');
  arrTime.style.width = "25%";
  arrTime.style.cssFloat = "right";
  arrTime.style.marginBottom = 8;

  /*Down Arrow*/
  create_image();

  const containHeight = $('#check-height').height();
  console.log(containHeight);

  $('#check-height').height(0);

  //Date picker
  body.style.backgroundColor = '#FFCE00';

  const arrow = $('.arrow');

  function create_element(type, parent, classtype) {
    var identify = document.createElement(type);
    identify.classList.add(classtype);
    parent.appendChild(identify);
    console.log(identify);
    return identify;
  };

  //Creates DIV for datepicker fixed positioning
  const contain_date_picker = create_element('DIV', body, 'fixed');
  contain_date_picker.classList.add('height-none');
  //Creates DIV for heading for date_picker
  const heading_div = create_element('DIV', contain_date_picker, 'heading-div');

  //Creates HEADING for datepicker
  const date_picker_heading = create_element('H1', heading_div, 'date-picker-heading');
  date_picker_heading.innerHTML = "Departure Date";

  //Creates main date-picker DIV
  const date_picker = create_element('DIV', contain_date_picker, 'date-picker');

  //Selects DIV for selected date, display formatted selected date
  const selected_date = create_element('DIV', select3, 'selected-date');

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
  console.log(close);
  close.src = '../Images/close.png';
  heading_div.appendChild(close);
  close.style.position = 'absolute';
  close.classList.add('close-position')

  //Adding variables that are associated with elements in date-picker
  const monthsOfYear = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
'October', 'November', 'December'];

  const daysOfMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let date = new Date();
  let day = date.getDate();
  let month = date.getMonth();
  let year = date.getFullYear();

  let selectedDate =  date;
  let selectedDay = day;
  let selectedMonth = month;
  let selectedYear = year;

  console.log(monthsOfYear[month]);
  mth.innerHTML = monthsOfYear[month] + ' ' + year;

  selected_date.innerHTML = formatDate(date);

  //Adding event Listeners
  select3.addEventListener('click', toggleDatePickerDisplay);
  nextMonth.addEventListener('click', goToNextMonth);
  prevMonth.addEventListener('click', goToPrevMonth);
  close.addEventListener('click', closeDatePicker)

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

 function closeDatePicker(e) {
   contain_date_picker.classList.remove('height-full');
   contain_date_picker.classList.add('height-none');
 }

  function goToNextMonth(e) {
    month++;
    if (month > 11) {
      month = 0;
      year++;
    }
    mth.innerHTML = monthsOfYear[month] + ' ' + year;
  }

  function goToPrevMonth(e) {
    month--;
    if (month = 0) {
      month = 11;
      year--;
    }
    if (year < 2020) {
      alert('you cannot book for a flight in the past');
      year = 2020;
    }
    mth.innerHTML = monthsOfYear[month] + ' ' + year;
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

    let month = d.getMonth();

    let year = d.getFullYear();

    return day + '/' + month + '/' + year;
  }

    /* "Adding" all arrows to event listener */
    select1.addEventListener('click', flipper);
    select2.addEventListener('click', flipper);
    select3.addEventListener('click', flipper);
    select4.addEventListener('click', flipper);
    select5.addEventListener('click', flipper);
    select6.addEventListener('click', flipper);


    //Now that all the elements are inside the container we can check for the height of the container
    contain.style.overflow = "hidden";

/*date booking for mobile*/
  search.addEventListener('click', function() {
    if(searchClick === 0) {
      console.log(containHeight);
      $('#check-height').animate({height:containHeight}, 1000);
      console.log(containHeight);
      const buttonbook = document.querySelector('.flight-book');
      buttonbook.style.backgroundColor = '#f10000';
      buttonbook.style.color = 'white';
      buttonbook.innerHTML = 'BOOK';
      console.log(buttonbook);
      searhClick = 1;
    }
  });




});
