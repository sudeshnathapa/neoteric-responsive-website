$('.counter').counterUp({
    delay: 10,
    time: 1000
});

$(function() {
    $('.animate__animated').textillate();
});

//owl-carousel js
$('.testimonial-carousel').owlCarousel({
    loop: true,
    margin: 40,
    nav: true,
    navText: ["<img src='https://alcs-slider.netlify.app/images/icon-prev.svg'>", "<img src='https://alcs-slider.netlify.app/images/icon-next.svg'>"],
    items: 1,
    autoplaySpeed: 1000,
    smartSpeed: 500,
    transitionStyle: "fade",
    dots: false,
    autoplay: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.product-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    items: 1,
    autoplaySpeed: 1000,
    smartSpeed: 500,
    transitionStyle: "fade",
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});
$('.mobile-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    items: 1,
    autoplaySpeed: 1000,
    smartSpeed: 500,
    transitionStyle: "fade",
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});
$('.blog-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    items: 1,
    autoplaySpeed: 1000,
    smartSpeed: 500,
    transitionStyle: "fade",
    dots: true,
    autoplay: true,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1

        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
});

$(document).ready(function() {

    var sync1 = $("#sync1");
    var sync2 = $("#sync2");
    var slidesPerPage = 4; //globaly define number of elements per page
    var syncedSecondary = true;

    sync1.owlCarousel({
        items: 1,
        slideSpeed: 2000,
        nav: true,
        autoplay: true,
        dots: true,
        loop: true,
        responsiveRefreshRate: 200,
        navText: ['<svg width="50%" height="50%" viewBox="0 0 11 20"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M9.554,1.001l-8.607,8.607l8.607,8.606"/></svg>', '<svg width="50%" height="50%" viewBox="0 0 11 20" version="1.1"><path style="fill:none;stroke-width: 1px;stroke: #000;" d="M1.054,18.214l8.606,-8.606l-8.606,-8.607"/></svg>'],
    }).on('changed.owl.carousel', syncPosition);

    sync2
        .on('initialized.owl.carousel', function() {
            sync2.find(".owl-item").eq(0).addClass("current");
        })
        .owlCarousel({
            items: slidesPerPage,
            dots: true,
            nav: true,
            smartSpeed: 200,
            slideSpeed: 500,
            slideBy: slidesPerPage, //alternatively you can slide by 1, this way the active slide will stick to the first item in the second carousel
            responsiveRefreshRate: 100
        }).on('changed.owl.carousel', syncPosition2);

    function syncPosition(el) {
        //if you set loop to false, you have to restore this next line
        //var current = el.item.index;

        //if you disable loop you have to comment this block
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - (el.item.count / 2) - .5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }

        //end block

        sync2
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = sync2.find('.owl-item.active').length - 1;
        var start = sync2.find('.owl-item.active').first().index();
        var end = sync2.find('.owl-item.active').last().index();

        if (current > end) {
            sync2.data('owl.carousel').to(current, 100, true);
        }
        if (current < start) {
            sync2.data('owl.carousel').to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            sync1.data('owl.carousel').to(number, 100, true);
        }
    }

    sync2.on("click", ".owl-item", function(e) {
        e.preventDefault();
        var number = $(this).index();
        sync1.data('owl.carousel').to(number, 300, true);
    });
});


// about-us-image-slide-up-animation

// getting images from dom
const imageFront = document.querySelector('.image-front');
const imageBack = document.querySelector('.image-back');

// making initial scroll position as top
let scrollPos = window.pageYOffset || document.documentElement.scrollTop;

window.addEventListener('scroll', function() {
    // after scrolling new scroll position is
    const newScrollPos = window.pageYOffset || document.documentElement.scrollTop;

    if (newScrollPos > scrollPos) {
        // if scrolling down
        imageFront.classList.add('slide-down');
        imageBack.classList.remove('slide-down');
        imageBack.classList.add('slide-up');
    } else {
        // if scrolling up
        imageFront.classList.add('slide-up');
        imageFront.classList.remove('slide-down');
        imageBack.classList.remove('slide-up');
        imageBack.classList.add('slide-down');
    }
    scrollPos = newScrollPos;
});

const carousel = document.querySelector('#carouselExampleInterval');
const cards = document.querySelectorAll('.card');

// Looping through each card
cards.forEach((card, index) => {
    card.addEventListener('click', () => {
        // Set the active slide of the carousel to the corresponding index
        carousel.querySelector('.active').classList.remove('active');
        carousel.querySelector(`.carousel-item:nth-child(${index + 1})`).classList.add('active');
    });
});





//for meghamenu with bootstrap tab Show the corresponding tab-content on tablink hover

var dropdownMenu = document.querySelector('.dropdown-menu');
var tablinks = dropdownMenu.querySelectorAll('.nav-link');
var tabContents = document.querySelectorAll('.tab-pane');

tablinks.forEach(function (tablink) {
    tablink.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});

tablinks.forEach(function (tablink, index) {
    tablink.addEventListener('mouseenter', function () {

        tablinks.forEach(function (btn) {
            btn.classList.remove('active');
        });
        tabContents.forEach(function (tabContent) {
            tabContent.classList.remove('show', 'active');
        });

        tabContents[index].classList.add('show', 'active');
        tablink.classList.add('active');
    });
});

tablinks[0].classList.add('active');
tabContents[0].classList.add('show', 'active');



// JavaScript for preventing tab-pills behaviour at <=425px
document.addEventListener('DOMContentLoaded', function() {

    var navLinks = document.querySelectorAll('.dropdown-menu .nav-link');

    navLinks.forEach(function(navLink) {
      navLink.addEventListener('click', function(event) {

        if (window.innerWidth <= 425) {
          event.preventDefault();
          var linkUrl = navLink.getAttribute('href');
          window.location.href = linkUrl;
        }
      });
    });
  });
