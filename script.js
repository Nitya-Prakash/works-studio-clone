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
// function page2Animation() {
//   var elem1 = document.querySelector("#elem1");
//   var elem2 = document.querySelector("#elem2");
//   var elem3 = document.querySelector("#elem3");
//   var elem4 = document.querySelector("#elem4");
//   var elem5 = document.querySelector("#elem5");
//   var img1 = document.querySelector("#img1");
//   var img2 = document.querySelector("#img2");
//   var img3 = document.querySelector("#img3");
//   var img4 = document.querySelector("#img4");
//   var img5 = document.querySelector("#img5");

//   elem1.addEventListener("mouseenter", function () {
//     img1.style.opacity = 1;
//   });
//   elem1.addEventListener("mouseleave", function () {
//     img1.style.opacity = 0;
//   });

//   elem2.addEventListener("mouseenter", function () {
//     img2.style.opacity = 1;
//   });
//   elem2.addEventListener("mouseleave", function () {
//     img2.style.opacity = 0;
//   });

//   elem3.addEventListener("mouseenter", function () {
//     img3.style.opacity = 1;
//   });
//   elem3.addEventListener("mouseleave", function () {
//     img3.style.opacity = 0;
//   });

//   elem4.addEventListener("mouseenter", function () {
//     img4.style.opacity = 1;
//   });
//   elem4.addEventListener("mouseleave", function () {
//     img4.style.opacity = 0;
//   });

//   elem5.addEventListener("mouseenter", function () {
//     img5.style.opacity = 1;
//   });
//   elem5.addEventListener("mouseleave", function () {
//     img5.style.opacity = 0;
//   });
// }
// page2Animation();
