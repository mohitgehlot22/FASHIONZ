
//bar mobail responsiv

var bar = document.querySelector('.fa-bars');
var nav = document.querySelector('nav');

bar.addEventListener('click', () => {

  bar.classList.remove('bar1');
  bar.classList.toggle('fa-xmark')
  nav.classList.toggle('nav_active');

});

//bar mobail responsiv

// pop page 


var pop = document.querySelector('.pop');
var buttonPop = document.querySelector('ul button');
var popRemove = document.querySelector('.xmarkIcon');

buttonPop.addEventListener('click', () => {
  pop.classList.add('popactive');
});
popRemove.addEventListener('click', () => {
  pop.classList.remove('popactive');
});

//pop page

// slider owl 


jQuery("#carousel").owlCarousel({
  autoplay: false,
  rewind: true,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: false,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 2
    },

    1024: {
      items: 3
    },

    1366: {
      items: 1
    }
  }
});


//slider owl

//light box



$(".gallery a").attr("data-fancybox", "mygallery");

$(".gallery a").each(function () {
  $(this).attr("data-caption", $(this).find("img").attr("alt"));
  $(this).attr("title", $(this).find("img").attr("alt"));
});

$(".gallery a").fancybox();


//light box

//light box slider

jQuery("#lightbox_slider").owlCarousel({
  autoplay: true,
  rewind: true,
  margin: 20,
  responsiveClass: true,
  autoHeight: true,
  autoplayTimeout: 7000,
  smartSpeed: 800,
  nav: true,
  responsive: {
    0: {
      items: 1
    },

    600: {
      items: 3
    },

    1024: {
      items: 4
    },

    1366: {
      items: 4
    }
  }
});

//light box slider

//floor light box

$("#gallery a").attr("data-fancybox", "mygallery");

$("#gallery a").each(function () {
  $(this).attr("data-caption", $(this).find("img").attr("alt"));
  $(this).attr("title", $(this).find("img").attr("alt"));
});

$("#gallery a").fancybox();


//floor light  box


// taebs 

var taebsbtn = document.querySelectorAll('.tebs button');
var allclass = document.querySelectorAll('.arae_tebs');


taebsbtn.forEach((v, i) => {

  v.addEventListener('click', () => {

    allclass.forEach((vv, ii) => {

      console.log(vv)
      vv.classList.add('teabs');
      vv.classList.remove('active');
      taebsbtn[ii].classList.remove('active_btn')

    });

    allclass[i].classList.add('active');
    v.classList.add('active_btn');

  })
});

//taebs

