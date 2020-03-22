window.addEventListener('DOMContentLoaded', (event) => {

  sessionStorage.setItem('page', 'home');
  console.log(sessionStorage);

  console.log(sessionStorage);
  const cleveland = document.querySelector(".box:nth-child(1) .button");
  console.log(cleveland);
  const boston = document.querySelector(".box:nth-child(2) .button");
  console.log(boston);
  const hartford = document.querySelector(".box:nth-child(3) .button");
  console.log(hartford);
  const warwick = document.querySelector(".box:nth-child(4) .button");
  const wilmington = document.querySelector(".box:nth-child(5) .button");
  const baltimore = document.querySelector(".box:nth-child(6) .button");
  console.log(baltimore);
  const optionValue = document.querySelector('#arrival-location .option');

  if (hartford == null) {
    sessionStorage.removeItem('page');
    sessionStorage.setItem('page', 'book');
    console.log(sessionStorage)
    console.log("hartford == null");
  }

  if (sessionStorage.getItem('page') === "home") {
    cleveland.addEventListener('click', OptionPick('Ohio'));
    boston.addEventListener('click', OptionPick('Boston'));
    baltimore.addEventListener('click', OptionPick('Maryland'));
    wilmington.addEventListener('click', OptionPick('North Carolina'));
    hartford.addEventListener('click', OptionPick('Connecticut'));
    warwick.addEventListener('click', OptionPick("Rhode Island"));

    cleveland.addEventListener('click', function() {
      sessionStorage.setItem('place', 'Ohio');
    });

    boston.addEventListener('click', function() {
      sessionStorage.setItem('place', 'Boston');
    });

    baltimore.addEventListener('click', function() {
      sessionStorage.setItem('place', 'Maryland');
    });

    wilmington.addEventListener('click', function() {
      sessionStorage.setItem('place', 'North Carolina');
    });

    hartford.addEventListener('click', function() {
      sessionStorage.setItem('place', 'Connecticut');
    });

    warwick.addEventListener('click', function() {
      sessionStorage.setItem('place', 'Rhode Island');
    });
  };

  function OptionPick(location, e) {
    console.log(location);
    sessionStorage.setItem('place', location)
  };

  $("#arrival-location option:contains('"+ sessionStorage.getItem('place') +"')").attr("selected","selected");

  console.log(sessionStorage);

});
