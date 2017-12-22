$(document).ready(function() {
  var scrollSection = function() {
    if ($('body').hasClass('fp-viewing-contact')) {
        $.fn.fullpage.moveTo('intro', 0);
    } else {
      $.fn.fullpage.moveSectionDown();
    }
  };

  $('#fullpage').fullpage({
    //Navigation
    lockAnchors: false,
    anchors:['intro', 'partnership', 'strengths', 'experimentation', 'contact'],
    navigation: false,
    slidesNavigation: false,

    //Scrolling
    css3: true,
    scrollingSpeed: 1000,
    autoScrolling: true,
    fitToSection: true,
    fitToSectionDelay: 1000,
    scrollBar: false,
    easing: 'easeInOutCubic',
    easingcss3: 'cubic-bezier(0.770, 0.000, 0.175, 1.000)',
    loopBottom: false,
    loopTop: false,
    continuousVertical: false,
    continuousHorizontal: false,
    scrollHorizontally: false,
    interlockedSlides: false,
    dragAndMove: false,
    offsetSections: false,
    resetSliders: false,
    fadingEffect: false,
    normalScrollElements: '#element1, .element2',
    scrollOverflow: false,
    scrollOverflowReset: false,
    scrollOverflowOptions: null,
    touchSensitivity: 15,
    normalScrollElementTouchThreshold: 5,
    bigSectionsDestination: null,

    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,

    //Design
    controlArrows: false,
    verticalCentered: true,
    fixedElements: '.navigation, .grid-ornament, .nav-button',
    responsiveSlides: false,
    parallax: false,
    parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

    //Custom selectors
    sectionSelector: '.section',
    slideSelector: '.slide',

    lazyLoading: true,

    //events
    onLeave: function(index, nextIndex, direction){},
    afterLoad: function(anchorLink, index){},
    afterRender: function(){},
    afterResize: function(){},
    afterResponsive: function(isResponsive){},
    afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
    onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
  });
    
  $('.js-scroll-button').on('click', scrollSection);
});