$(document).ready(function () {
  if (window.innerWidth > 620) {
    $("#pagepiling").pagepiling({
      menu: null,
      direction: "vertical",
      anchors: [
        "solarsystem",
        "sun",
        "earthgroup",
        "asteroids",
        "giantplanets",
        "belt",
      ],
      scrollingSpeed: 500,
      easing: "swing",
      loopBottom: false,
      loopTop: false,
      css3: true,
      navigation: {
        textColor: "#000",
        bulletsColor: "#000",
        position: "right",
        tooltips: [
          "Солнечная система",
          "Солнце",
          "Планеты земной группы",
          "Пояс астероидов",
          "Планеты-гиганты",
          "Пояс Койпера",
        ],
      },

      normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: ".section",
      animateAnchor: false,

      //events
      onLeave: function (index, nextIndex, direction) {},
      afterLoad: function (anchorLink, index) {},
      afterRender: function () {},
    });
  } else {
    $("#pagepiling").pagepiling({
      menu: null,
      direction: "vertical",
      anchors: [
        "solarsystem",
        "sun",
        "earthgroup",
        "asteroids",
        "giantplanets",
        "belt",
      ],
      scrollingSpeed: 500,
      easing: "swing",
      loopBottom: false,
      loopTop: false,
      css3: true,
      navigation: false,

      normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: ".section",
      animateAnchor: false,

      //events
      onLeave: function (index, nextIndex, direction) {},
      afterLoad: function (anchorLink, index) {},
      afterRender: function () {},
    });
  }
});
