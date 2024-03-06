// loader///
const loader = document.getElementById("loader-wrap") ;

window.addEventListener("load" ,function(){
    loader.style.display = "none"
})

// /*=============== SHOW MENU ===============*/
let navtoggle = document.querySelector('.nav-toggle');
let navlist = document.querySelector(".nav-list");

navlist.addEventListener("click", function() {
    if (navlist.firstElementChild.classList.contains("nav-list-active")) {
        navlist.firstElementChild.classList.replace("nav-list-active", "nav-list");
    } else {
        navlist.firstElementChild.classList.replace("nav-list-", "nav-list-active");
    }
});

navtoggle.addEventListener("click", function() {
    if (navtoggle.firstElementChild.classList.contains("ri-close-line")) {
        navtoggle.firstElementChild.classList.replace("ri-close-line", "ri-menu-4-fill");
    } else {
        navtoggle.firstElementChild.classList.replace("ri-menu-4-fill", "ri-close-line");
    }

    navlist.classList.toggle("nav-list-active");
});


// <!-- our team section end  -->

let imgbx = document.querySelectorAll('.imgbx');
let contentbx = document.querySelectorAll('.contentbx');

for (let i = 0; i < imgbx.length; i++) {
    imgbx[i].addEventListener('mouseover', function () {
        for (let j = 0; j < contentbx.length; j++) {
            contentbx[j].classList.remove('active');
        }
        document.getElementById(this.dataset.id).classList.add('active');

        for (let k = 0; k < imgbx.length; k++) {
            imgbx[k].classList.remove('active');
        }
        this.classList.add('active');
    });
}

// gsap///

// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", function() {
  // Select all program cards
  const programCards = document.querySelectorAll(".program-card");

  // Loop through each program card and set up ScrollTrigger animations
  programCards.forEach((card, index) => {
    gsap.from(card, {
      opacity: 0,
      y: 20,
      duration: 0.2,
      ease: "power2.out",
      
      scrollTrigger: {
        trigger: card,
        start: "top 90%", // Adjust the trigger point as needed
        toggleActions: "play none none reset",
        stagger:1,
      },
    });
  });
});