"use strict";

var _swiper = require("swiper");

var _micromodal = _interopRequireDefault(require("micromodal"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_swiper.Swiper.use([_swiper.Navigation]);

document.addEventListener('DOMContentLoaded', function () {
  var tab = function tab() {
    var tabNav = document.querySelectorAll('.download-catigories__list'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;
    tabNav.forEach(function (item) {
      item.addEventListener('click', selectTabNav);
      console.log('edsfs');
    });

    function selectTabNav() {
      tabNav.forEach(function (item) {
        item.classList.remove('is-active');
      });
      this.classList.add('is-active');
      tabName = this.getAttribute('data-tab-name');
      selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
      tabContent.forEach(function (item) {
        item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
      });
    }
  };

  var swiperDoor = new _swiper.Swiper('.doors-container', {
    slidesPerView: 1,
    loop: false,
    speed: 2400,
    navigation: {
      prevEl: '.swiper-button-prev',
      nextEl: '.swiper-button-next'
    }
  });
  var accordions = document.querySelectorAll('.accordion__item');
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = accordions[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;
      item.addEventListener('click', function () {
        if (this.classList.contains('active')) {
          this.classList.remove('active');
        } else {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = accordions[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var el = _step2.value;
              el.classList.remove('active');
            }
          } catch (err) {
            _didIteratorError2 = true;
            _iteratorError2 = err;
          } finally {
            try {
              if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
                _iterator2["return"]();
              }
            } finally {
              if (_didIteratorError2) {
                throw _iteratorError2;
              }
            }
          }

          this.classList.add('active');
        }
      });
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  var burgerMenu = function burgerMenu() {
    var burger = document.querySelector('#sidebarBurger');
    var sidebar = document.querySelector('#sidebar');
    var body = document.body;
    burger.addEventListener('click', function (event) {
      body.classList.toggle('show-sidebar');
      burger.classList.toggle('active');
    });
  };

  _micromodal["default"].init({
    openTrigger: 'data-micromodal-open',
    closeTrigger: 'data-micromodal-close',
    disableFocus: true,
    disableScroll: true,
    awaitOpenAnimation: true,
    awaitCloseAnimation: true
  });

  var searchHeader = function searchHeader() {
    var searchInput = document.querySelector('#search-input');
    var searchBtn = document.querySelector('#search-btn');
    var searchForm = document.querySelector('#header__search');
    searchBtn.addEventListener('click', function (event) {
      event.preventDefault();
      console.log('sad');
      searchForm.classList.toggle('active');
      searchInput.classList.toggle('active');
    });
  };

  burgerMenu();
  tab();
  searchHeader();
});