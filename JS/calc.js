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
  
  let search = document.querySelector('.flight-book');
  const form = document.querySelector('form');
  const select = document.querySelector('.select');
  const wrapper = document.querySelector('.wrapper');
  let searchClick = 0;
  
  //Function for mobile depature/arrival date and time
  function create_element(type, parent, classtype) {
    var identify = document.createElement(type); 
    identify.classList.add(classtype);
    parent.appendChild(identify);
    console.log(identify); 
    return identify;
  };  
  
  /*
  const wrapper = document.querySelector('.wrapper');
  let wallPaper = create_element('DIV', wrapper);
  wallPaper.style.backgroundColor = 'blue';
  wallPaper.style.height = '100vh';
  console.log(wallPaper);
  */
  
  //creates the element contain
  let contain = create_element('DIV', form);
  contain.style.display = "inline-block";
  contain.style.width = "100%";
  contain.setAttribute("id", "check-height");
  
  function form2() {
    /*Submit info button*/
    if(searchClick === 0) {
      console.log(searchClick);
      const buttonbook = document.querySelector('.flight-book');
      buttonbook.style.backgroundColor = '#f10000';
      buttonbook.style.color = 'white';
      buttonbook.innerHTML = 'BOOK';
      console.log(buttonbook);      
      
      /*Departure Date Heading*/
      const depHeading = create_element('H2', contain, 'select-heading');
      depHeading.innerHTML = 'Departure Date';      
      
      /*Departure date + time select menus*/
      const depDate = create_element('DIV', contain, 'selection');
      depDate.style.borderWidth = 1;
      depDate.style.cssFloat = "left";
      depDate.style.width = "75%";
      depDate.style.marginBottom = 48;
      
      const depTime = create_element('SELECT', contain, 'selection');
      depTime.style.width = "25%";
      depTime.style.cssFloat = "right";
      depTime.style.marginBottom = 48;
      
      /*Arrival Date Heading*/
      const arrHeading = create_element('H2', contain, 'select-heading');
      arrHeading.innerHTML = 'Arrival Date';
      
      /*Arrival date + time select menus*/
      const arrDate = create_element('DIV', contain, 'selection');
      arrDate.style.borderWidth = 1;
      arrDate.style.cssFloat = "left";
      arrDate.style.width = "75%";
      arrDate.style.marginBottom = 48;
      
      const arrTime = create_element('SELECT', contain, 'selection');
      arrTime.style.width = "25%";
      arrTime.style.cssFloat = "right";
      arrTime.style.marginBottom = 48;
    }
    
    //Select 2
    /*$('.selection option').select2({
      backgroundColor: "red";
    });*/
    
    //Now that all the elements are inside the container we can check for the height of the container 
    contain.style.overflow = "hidden";  
    searchClick = 1;
  };
  
  //Event Listeners
  select.addEventListener('click', function() {
  
  }
    
/*date booking for mobile*/  
  search.addEventListener('click', function() {
      form2();
      const containHeight = $('#check-height').height();
      console.log(containHeight);
      contain.style.height = 0;
      $('#check-height').animate({height:containHeight}, 1000);
  });
    

});