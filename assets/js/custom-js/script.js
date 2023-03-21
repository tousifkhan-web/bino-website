// mobile menu //////////////////////

$("#mobile-menu-btn").click(function () {
  $(".mobile-menu").addClass("show")
})

$("#mobile-close-btn").click(function () {
  $(".mobile-menu").removeClass("show")
})

$(".mobile-menu-close").click(function () {
  $(".mobile-menu").removeClass("show")
})

// aos ////////////////////////

AOS.init({
  duration: 1000,
  
})

// scroll to top //////////////
$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 200) {
      $("#scrolltotop").fadeIn()
    } else {
      $("#scrolltotop").fadeOut()
    }
  })
  // scroll body to 0px on click
  $("#scrolltotop").click(function () {
    $("body,html").animate(
      {
        scrollTop: 0,
      },
      400
    )
    return false
  })
})

// var docWidth = document.documentElement.offsetWidth
// ;[].forEach.call(document.querySelectorAll("*"), function (el) {
//   if (el.offsetWidth > docWidth) {
//     console.log(el)
//   }
// })

// counter ///////////////////////////////////

var counted = 0
$(window).scroll(function () {
  var oTop = $("#counter").offset().top - window.innerHeight
  if (counted == 0 && $(window).scrollTop() > oTop) {
    $(".count").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count")
      $({
        countNum: $this.text(),
      }).animate(
        {
          countNum: countTo,
        },

        {
          duration: 2000,
          easing: "swing",
          step: function () {
            $this.text(Math.floor(this.countNum))
          },
          complete: function () {
            $this.text(this.countNum)
            //alert('finished');
          },
        }
      )
    })
    counted = 1
  }
})
