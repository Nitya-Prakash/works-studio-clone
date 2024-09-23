const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

function loaderanim() {
  let tl = gsap.timeline();

  tl.to(".yellow1", {
    top: "-100%",
    delay: 0.5,
    duration: 0.7,
    ease: "expo.out",
  });

  tl.from(
    ".yellow2",
    {
      top: "100%",
      delay: 0.7,
      duration: 0.7,
      ease: "expo.out",
    },
    "anim"
  );

  tl.from(
    ".page1 h1",
    {
      color: "white",
      delay: 0.6,
      duration: 0.7,
    },
    "anim"
  );

  tl.to(".loader", {
    opacity: 0,
    display: "none",
  });

  tl.to(
    ".nav svg path",
    {
      fill: "#000",
      delay: 0.6,
    },
    "anim"
  );
}

function page2Anim() {
  var elems = document.querySelectorAll(".elem");
  var page2 = document.querySelector(".page2");
  elems.forEach(function (ele) {
    ele.addEventListener("mouseenter", function () {
      var bgimg = ele.getAttribute("data-img");
      page2.style.backgroundImage = `url(${bgimg})`;
    });
    ele.addEventListener("mouseleave", function () {
      var bgimg = ele.getAttribute("data-img");
      page2.style.backgroundImage = "none";
    });
  });
}

function clickableanim() {
  document.querySelector(".foot-1").addEventListener("click", function () {
    locoScroll.scrollTo(0);
  });
  
  document.querySelector(".page1-footer i")
    .addEventListener("click", function () {
      locoScroll.scrollTo(".page2");
    });
  
  document.querySelector(".nav a").addEventListener("click", function () {
    locoScroll.scrollTo(0);
  });
  
  
  document.querySelector(".elem a").addEventListener("click", function () {
    locoScroll.scrollTo(".page2");
  });
}

loaderanim();
page2Anim();
clickableanim();
