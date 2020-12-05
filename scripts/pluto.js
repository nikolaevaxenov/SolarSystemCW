import { arrMenu } from "./menu.js";

$(document).ready(function () {
  if (window.innerWidth < 620 || window.innerHeight < 400) {
    $("#m1, #m2, #m3, #m4, #m5").remove();
    $("#pagepiling").append('<div class="section"><div id="am"></div></div>');
    $("#am").multilevelpushmenu({
      menu: arrMenu,
      mode: "cover",
      menuWidth: window.innerWidth,
      menuHeight: window.innerHeight,
      onItemClick: function () {
        var event = arguments[0],
          $menuLevelHolder = arguments[1],
          $item = arguments[2],
          options = arguments[3];
        var itemHref = $item.find("a:first").attr("href");
        location.href = itemHref;
      },
    });

    $("#pagepiling").pagepiling({
      menu: null,
      direction: "vertical",
      anchors: [
        "pluto",
        "orbitandrotation",
        "weightanddimensions",
        "atmosphere",
        "satellites",
        "menu",
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
    });
  } else {
    $("#m1, #m2, #m3, #m4, #m5").multilevelpushmenu({
      menu: arrMenu,
      mode: "cover",
      containersToPush: [$(".p1"), $(".p2"), $(".p3"), $(".p4"), $(".p5")],
      menuWidth: "20%",
      menuHeight: "100%",
      collapsed: true,
      onItemClick: function () {
        var event = arguments[0],
          $menuLevelHolder = arguments[1],
          $item = arguments[2],
          options = arguments[3];
        var itemHref = $item.find("a:first").attr("href");
        location.href = itemHref;
      },
    });

    $("#pagepiling").pagepiling({
      menu: null,
      direction: "vertical",
      anchors: [
        "pluto",
        "orbitandrotation",
        "weightanddimensions",
        "atmosphere",
        "satellites",
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
          "Плутон",
          "Орбита и вращение",
          "Масса и размеры",
          "Атмосфера",
          "Спутники",
        ],
      },

      normalScrollElements: null,
      normalScrollElementTouchThreshold: 5,
      touchSensitivity: 5,
      keyboardScrolling: true,
      sectionSelector: ".section",
      animateAnchor: false,
      onLeave: function (index, nextIndex, direction) {
        $("#m" + index).multilevelpushmenu("collapse");
        $("#m" + index).multilevelpushmenu("redraw");
      },
    });
  }
});
