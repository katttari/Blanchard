document.addEventListener("DOMContentLoaded", function() {

// плавная прокрутка до элемента
const smoothLinks = document.querySelectorAll('a[href^="#"]');
  for (let smoothLink of smoothLinks) {
      smoothLink.addEventListener('click', function (e) {
          e.preventDefault();
          const id = smoothLink.getAttribute('href');

          document.querySelector(id).scrollIntoView({
              behavior: 'smooth',
              block: 'start'
          });
      });
};

// const smoothLinks1 = document.querySelectorAll('button[data-path^="data-target"]');
//   for (let smoothLink1 of smoothLinks1) {
//       smoothLink1.addEventListener('touchstart', function (e) {
//           e.preventDefault();
//           const id = smoothLink1.getAttribute('data-path');

//           document.querySelector(id).scrollIntoView({
//               behavior: 'smooth',
//               block: 'start'
//           });
//       });
// };


// header__burger-1024
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#header__burger-1024__btn').addEventListener('click', function() {
    document.querySelector('#header__burger-1024').classList.add('header-burger-1024-active');
    document.querySelector('#header__burger-1024__btn').classList.add('header-burger-1024__btn-click');
    document.querySelector('body').classList.add('wrapper__no-active-scroll');
    });
  });


  // header-burger-1024-click
window.addEventListener('DOMContentLoaded', function() {
  const buttons = document.querySelectorAll('.header-burger-1024__link');
  function handleClick() {
    console.log('click');
    document.querySelector('#header__burger-1024').classList.remove('header-burger-1024-active');
    document.querySelector('#header__burger-1024__btn').classList.remove('header-burger-1024__btn-click');
    document.querySelector('body').classList.remove('wrapper__no-active-scroll');
  }
  buttons.forEach((button) => {
    button.addEventListener('click', handleClick);
  });
  });



// header__burger-1024__btn-open
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#header__burger-1024__btn-close').addEventListener('click', function() {
    document.querySelector('#header__burger-1024').classList.remove('header-burger-1024-active');
    document.querySelector('#header__burger-1024__btn').classList.remove('header-burger-1024__btn-click');
    document.querySelector('body').classList.remove('wrapper__no-active-scroll');
    });
  });



// header-search-icon
window.addEventListener('DOMContentLoaded', function() {
  document.querySelector(".header-container__first-line__btn-search-1024").addEventListener("click", function() {
    document.querySelector(".header-container__first-line__search-1024-form").classList.add("header-container__first-line__search-1024-form__active");
    this.classList.add("active");
  })

document.addEventListener("click", function(e) {
  let target = e.target;
  let form = document.querySelector(".header-container__first-line__search-1024-form");
  if (!target.closest(".header-container__first-line__search-1024")) {
  form.classList.remove("header-container__first-line__search-1024-form__active");
    form.querySelector("input").value = "";
    document.querySelector(".header-container__first-line__btn-search-1024").classList.remove("active")
    }
  })

  document.querySelector('.search-1024-form__btn-close').addEventListener('click', function() {
  document.querySelector('.header-container__first-line__search-1024-form').classList.remove('header-container__first-line__search-1024-form__active');
  document.querySelector('.header-container__first-line__btn-search-1024').classList.remove('active');
  });

});

window.addEventListener('DOMContentLoaded', function() {
  document.getElementById("button-search-form").tabIndex = "0";
});

window.addEventListener('DOMContentLoaded', function() {
  document.getElementById("search-1024-form__btn-submit").tabIndex = "0";
});

window.addEventListener('DOMContentLoaded', function() {
  document.getElementById("search-1024-form__btn-close").tabIndex = "0";
});



// header-menu (second-line__dropdown)
document.querySelectorAll(".second-line-dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
  scrollbarMaxSize: 28,
});
});


const btns = document.querySelectorAll(".second-line-list__btn");
const activeClassbtns = "second-line-list__btn__active";
const dropdowns = document.querySelectorAll(".second-line-list__dropdown");
const activeClassdropdowns = "second-line-list__dropdown__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".second-line-list__dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
       }
      });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns);
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    // btns.classList.toggle(activeClassbtns);
    this.classList.toggle(activeClassbtns);
  })
});


document.addEventListener("click", function(e) {
  let target = e.target;
  if (!target.closest(".header-container__second-line__list")) {
    document.querySelectorAll(".second-line-list__dropdown").forEach(el => {
        el.classList.remove("second-line-list__dropdown__active");
    })
     document.querySelectorAll(".second-line-list__btn").forEach(el => {
        el.classList.remove("second-line-list__btn__active");
    });
  }
});



// swiper-hero
// const swiper = new Swiper('.hero-swiper-wrapper', {
const swiper = new Swiper('.hero-swiper-container', {
  spaceBetween: 100,
  slidesPerView: 1,
  loop: true,
  speed: 2000,
  autoplay: {
    delay: 2000
  },

  effect: "fade",
  allowTouchMove: false,

  pagination: {
  el: '.hero-swiper-pagination',
  type: 'bullets',
  clickable: true,
  },

  navigation: {
  nextEl: '.hero-swiper-button-next',
  prevEl: '.hero-swiper-button-prev',
  },
});



// gallery-choices
const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled: false,
  renderChoiceLimit: -6,
  allowHTML: true,
  shouldSort: false,
  resetScrollPosition: false,
});

window.addEventListener('DOMContentLoaded', function() {
  document.getElementById("gallery__choices").tabIndex = "0";
  });



// gallery-checkbox
// window.addEventListener('DOMContentLoaded', function() {
//   $('.gallery__checkbox-item__checkbox').change(function(){
//     $('input[name="check' + $(this).attr('name') +'"]').removeAttr('checked');
//     $(this).prop('checked', true);
//   });
// });

document.querySelectorAll('.gallery__checkbox-item__label').forEach(function(input1){
  input1.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

document.querySelectorAll('.gallery__checkbox-item__label').forEach(function(text){
  text.classList.remove('gallery__checkbox-item__label-active')});
  e.currentTarget.classList.add('gallery__checkbox-item__label-active');

document.querySelector(`[data-target="${path}"]`).classList.add('gallery__checkbox-item__label-active');
  });
});


document.addEventListener("click", function(e2) {
  let target = e2.target;
  if (target.closest(".gallery__checkbox-item__label")) {
    document.querySelectorAll(".gallery__checkbox-item__label__text").forEach(ell => {
        ell.classList.remove("gallery__checkbox-item__label-active");
    });
  }
});



// gallery-swiper
const swiper2 = new Swiper('.gallery-swiper', {
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: false,

  pagination: {
    el: ".gallery-swiper-pagination",
    type: "fraction"
  },

  navigation: {
    prevEl: '.gallery-swiper-button-prev',
    nextEl: '.gallery-swiper-button-next',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15
    },

    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 38
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "0";
        } else {
          slide.tabIndex = "0";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "0";
        } else {
          slide.tabIndex = "0";
        }
      });
    },
  },
});



// gallery-modal
window.addEventListener('DOMContentLoaded', function() {
$(function () {
  $('#open-button').click(function () {
    $('.modal').addClass('modal_active');
    $('body').addClass('hidden');
  });

  $('.modal-gallery__btn-close').click(function () {
    $('.modal').removeClass('modal_active');
    $('body').removeClass('hidden');
  });
});

// Закрытие модального окна при клике вне его контентной области
 $('.modal').mouseup(function (e) {
   let modalContent = $("#modal-overlay");
   if (!modalContent.is(e.target) && modalContent.has(e.target).length === 0) {
     $(this).removeClass('modal_active');
     $('body').removeClass('hidden');
   }
 });
});



// catalog-accordion
$(".accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  active: false,
  tabIndex: 9,
});

document.addEventListener('keyup', function() {console.log(document.activeElement)
});

window.addEventListener('DOMContentLoaded', function() {
document.getElementById("accordion__list__item__title-1").tabIndex = "0";
document.getElementById("accordion__list__item__title-2").tabIndex = "0";
document.getElementById("accordion__list__item__title-3").tabIndex = "0";
document.getElementById("accordion__list__item__title-4").tabIndex = "0";
document.getElementById("accordion__list__item__title-5").tabIndex = "0";
document.getElementById("accordion__list__item__title-6").tabIndex = "0";
document.getElementById("accordion__list__item__title-7").tabIndex = "0";
});



// catalog-tabs
document.querySelectorAll('.accordion__list-in__item__btn').forEach(function(tabsBtn){
  tabsBtn.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;

document.querySelectorAll('.accordion__list-in__item__btn').forEach(function(btn){
  btn.classList.remove('accordion__list-in__item__btn--active')});
  e.currentTarget.classList.add('accordion__list-in__item__btn--active');

document.querySelectorAll('.tabs-descr').forEach(function(tabsBtn){
  tabsBtn.classList.remove('tabs-descr--active')});

document.querySelector(`[data-target="${path}"]`).classList.add('tabs-descr--active');
    });
  });


document.addEventListener("DOMContentLoaded", function() {
document.querySelectorAll('.accordion__list-in__item__btn').forEach(function(tabsBtn1){
  tabsBtn1.addEventListener('touchstart', function(e1){
    const path = e1.currentTarget.dataset.path;

document.querySelectorAll('.accordion__list-in__item__btn').forEach(function(btn1){
  btn1.classList.remove('accordion__list-in__item__btn--active')});
  e1.currentTarget.classList.add('accordion__list-in__item__btn--active');

document.querySelectorAll('.tabs-descr').forEach(function(tabsBtn1){
  tabsBtn1.classList.remove('tabs-descr--active')});

document.querySelector(`[data-target="${path}"]`).classList.add('tabs-descr--active');
    });
  });
});



// events-swiper
const swiper3 = new Swiper('.events-swiper', {
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: false,

  navigation: {
    nextEl: '.events-swiper-button-next',
    prevEl: '.events-swiper-button-prev',
  },

  pagination: {
    el: '.events-swiper-pagination',
    type: 'bullets',
    clickable: true,
    bulletElement: 'span',
    bulletClass: 'events-swiper-pagination-bullet',
    bulletActiveClass: 'events-swiper-pagination-bullet-active',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 15
    },

    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 30
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 27
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 40
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  // on: {
  //   init: function () {
  //     this.slides.forEach((slide) => {
  //       if (!slide.classList.contains("slide-visible")) {
  //         slide.tabIndex = "11";
  //       } else {
  //         slide.tabIndex = "11";
  //       }
  //     });
  //   },
  //   slideChange: function () {
  //     this.slides.forEach((slide) => {
  //       if (!slide.classList.contains("slide-visible")) {
  //         slide.tabIndex = "11";
  //       } else {
  //         slide.tabIndex = "11";
  //       }
  //     });
  //   },
  // },

});


// projects__tooltips (tippy js)
tippy('.projects__container__descr__tolltip-icon-1', {
  content: 'Пример современных тенденций - современная методология разработки',
  arrow: false,
  maxWidth: 264,
  delay: 60,
  role: 'tooltip',
  trigger: 'click',
  zIndex: 20,
  placement: 'top',
  theme: 'projects__container__descr__tolltip-text',
});

tippy('.projects__container__descr__tolltip-icon-2', {
  content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
  arrow: false,
  maxWidth: 264,
  delay: 60,
  role: 'tooltip',
  trigger: 'click',
  zIndex: 20,
  placement: 'top',
  theme: 'projects__container__descr__tolltip-text',
});

tippy('.projects__container__descr__tolltip-icon-3', {
  content: 'В стремлении повысить качество',
  arrow: false,
  maxWidth: 264,
  delay: 60,
  role: 'tooltip',
  trigger: 'click',
  zIndex: 20,
  placement: 'top',
  theme: 'projects__container__descr__tolltip-text',
});


const btntippy = document.querySelectorAll(".projects__container__descr__tolltip-icon");
const activeClassbtntippy = "projects__container__descr__tolltip-icon-active";

btntippy.forEach(item1 => {
  item1.addEventListener("click", function(eltippy) {
    let target = eltippy.target;
    btns.forEach(el => {
      if (!target != this) {
        document.querySelectorAll(".projects__container__descr__tolltip-icon").forEach(elementtippy => {
          elementtippy.classList.remove("projects__container__descr__tolltip-icon-active");
        })
      }
    });
    this.classList.toggle(activeClassbtntippy);
  })
});

document.addEventListener("click", function(eltippy) {
  let target = eltippy.target;
  if (!target.closest(".projects__container__descr__tolltip-icon")) {
    document.querySelectorAll(".projects__container__descr__tolltip-icon").forEach(elementtippy => {
      elementtippy.classList.remove("projects__container__descr__tolltip-icon-active");
    })
  }
});



// projects__partners__swiper
const swiper4 = new Swiper('.projects__partners__swiper', {
  spaceBetween: 50,
  slidesPerView: 3,
  slidesPerGroup: 3,
  loop: false,

  navigation: {
    nextEl: '.projects__partners__swiper-button-next',
    prevEl: '.projects__partners__swiper-button-prev',
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
      spaceBetween: 19
    },

    576: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 25
    },

    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34
    },

    1024: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50
    },

    1200: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    },

    1920: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50
    }
  },

  a11y: false,
  keyboard: {
    enabled: true,
    onlyInViewport: true
  },

  watchSlidesProgress: true,
  watchSlidesVisibility: true,
  slideVisibleClass: "slide-visible",

  on: {
    init: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "0";
        } else {
          slide.tabIndex = "0";
        }
      });
    },
    slideChange: function () {
      this.slides.forEach((slide) => {
        if (!slide.classList.contains("slide-visible")) {
          slide.tabIndex = "0";
        } else {
          slide.tabIndex = "0";
        }
      });
    },
  },

});



//contacts-form
var selector = document.querySelector("input[type='tel']");

var im = new Inputmask("+7(999) 999-99-99");
im.mask(selector);

const validation = new JustValidate('#contacts__form', {

  errorFieldCssClass: 'is-invalid',
  errorFieldStyle: {
    border: '1px solid red',
  },
  errorLabelCssClass: 'is-label-invalid',
  errorLabelStyle: {
    color: 'red',
    textDecoration: 'underlined',
  },

  focusInvalidField: true,
  lockForm: true,
  tooltip: {
    position: 'top',
  },

  rules: {
    name: {
      required: true,
      minLength: 2,
      maxLength: 25,
    },
    tel: {
      required: true,
      function: (name, value) => {
        const phone = selector.inputmask.unmaskedvalue()
        return Number(phone) && phone.length === 10
       },
      },
     },
  });



// custom-map
ymaps.ready(init);
function init(){
    // Создание карты.
    var myMap = new ymaps.Map("custom_geo-map", {
        // Координаты центра карты.
        // Порядок по умолчанию: «широта, долгота».
        center: [55.759974699968424,37.615005953534485],
        // Уровень масштабирования. Допустимые значения: от 0 (весь мир) до 19.
        zoom: 14,
        controls: [],
        controls: ['geolocationControl', 'zoomControl'],
        }, {
          // Зададим опции для элементов управления.
          geolocationControlFloat: 'none',
          geolocationControlPosition: {
            bottom: '340px',
            right: '10px'
          },
          zoomControlFloat: 'none',
          zoomControlPosition: {
            bottom: '385px',
            right: '10px'
          },
        });

        myMap.behaviors.disable('scrollZoom');
        myMap.behaviors.disable('drag');

    // myMap.controls.add('geolocationControl', {
    //   float: 'none',
    //   position: {
    //     top: '50px',
    //     right: '30px'
    //   },
    // });

    // myMap.controls.add('zoomControl', {
    //   float: 'none',
    //   position: {
    //     bottom: '50px',
    //     right: '100px'
    //   },
    // });

    myMap.controls.get('zoomControl').options.set('size', 'small');

    // myMap.controls.remove('zoomControl');

    var myPlacemark = new ymaps.Placemark([55.759974699968424,37.615005953534485], {}, {
      iconLayout: 'default#image',
      iconImageHref: 'img/location.svg',
      iconImageSize: [20, 20],
    });
    // Размещение геообъекта на карте.
    // myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myPlacemark);
    };

    window.addEventListener('DOMContentLoaded', function() {
      document.getElementById("custom_geo-map").tabIndex = "0";
    });

  })
