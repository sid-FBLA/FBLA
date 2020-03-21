window.addEventListener('DOMContentLoaded', (event) => {

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

  const test = document.querySelectorAll("#arrival-location option");

  cleveland.addEventListener('click', OptionPick('Ohio'));
  boston.addEventListener('click', OptionPick('Boston'));
  baltimore.addEventListener('click', OptionPick('Maryland'));
  wilmington.addEventListener('click', OptionPick('North Carolina'));
  warwick.addEventListener('click', OptionPick("Rhode Island"));
  hartford.addEventListener('click', OptionPick('Connecticut'));


  function OptionPick(location) {
    $("#arrival-location option:contains('"+ location +"')").attr("selected","selected");
  }

});
