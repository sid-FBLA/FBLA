/*Hiding the Elements*/
  $('.animation img').hide()

  const images = document.querySelectorAll('.animation img');

  let windowWidthw = $('body').width();
  console.log(windowWidthw)

  //Appends images for smooth transitions, just one gives the browser enough "hang time"
  if (windowWidthw > 1023) {
    //too lazy to make function

    var img = document.createElement('img');
    console.log(img);
    img.src = 'Images/Animation/discount.png';
    var src = document.querySelector('#space-1');
    console.log(src)

    src.appendChild(img);

    var img = document.createElement('img');
    console.log(img);
    img.src = 'Images/Animation/time.png';
    var source = document.querySelector('#space-2');
    console.log(source);
    source.appendChild(img);

    var img = document.createElement('img');
    console.log(img);
    img.src = 'Images/Animation/diamond.png';
    var src = document.querySelector('#space-3');

    src.appendChild(img);
  }

  //calculating width of the animation img container, then subtracting animation image width, then dividiing by 2 to calculate the left offset
  const width = document.querySelector('.space-between').offsetWidth;
  console.log(width);
  let widthPos = width - 256;
  console.log(widthPos);
  leftoffset = widthPos/2;
  console.log(leftoffset);

  let spaceBetweenWidth = $('.space-between').width();
  let windowWidth = $(window).width();
  console.log(windowWidth);
  let originalLeft = $('.animation img').eq(2).css("marginLeft");
  console.log(originalLeft);
  let rightoffset = windowWidth*-1;
  console.log(rightoffset)

  let rightoffset2 = (rightoffset/3)*2;

  let rightoffset3 = (rightoffset/3);

  if ($(window).width() <= 1023) {
    $('.animation img').eq(0).slideDown(1000);
    $('.animation img').eq(1).delay(1000).slideDown(1000);
    $('.animation img').eq(2).delay(2000).slideDown(1000);
  } else {
    //This line positions all the images in the correct area
    $('.animation img').offset({left: rightoffset});

    $('.animation img').show();
    $('.animation img').eq(0).animate({
      left: leftoffset}, 1000, 'swing'
    );
    //Technically their are 3 children, as their are two discount.png's just leave this alone
    $('.animation img').eq(2).delay(1000).animate({
      left: leftoffset}, 1000, 'swing'
    );

    $('.animation img').eq(4).delay(2000).animate({
      left: leftoffset}, 1000, 'swing'
    );
  }

  //For image boxes
  // const box = document.querySelectorAll('.box');
  // const imageLocation = $("img[src*='Box']");
  // console.log(imageLocation);
  //
  // function shortenImage() {
  //   //All images are 375px
  //   imageLocation.style.width = 369;
  // }
  //
  // shortenImage();
