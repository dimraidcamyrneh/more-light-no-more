function myDrop() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.topnav')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  function myCap() {
    document.getElementById("myCaption").classList.toggle("caption-show");
  }
  
  // Close the dropdown if the user clicks outside of it
 /*  window.onclick = function(event) {
    if (!event.target.matches('.caption-link')) {
      var captions = document.getElementsByClassName("caption-content");
      var i;
      for (i = 0; i < captions.length; i++) {
        var openCaption = captions[i];
        if (openCaption.classList.contains('caption-show')) {
          openCaption.classList.remove('caption-show');
        }
      }
    }
  } */

  function myCap1() {
    document.getElementById("myCaption1").classList.toggle("caption-show");
  }
  function myCap2() {
    document.getElementById("myCaption2").classList.toggle("caption-show");
  }
  function myCap3() {
    document.getElementById("myCaption3").classList.toggle("caption-show");
  }
  function myCap4() {
    document.getElementById("myCaption4").classList.toggle("caption-show");
  }
  function myCap5() {
    document.getElementById("myCaption5").classList.toggle("caption-show");
  }
  function myCap6() {
    document.getElementById("myCaption6").classList.toggle("caption-show");
  }
  function myCap7() {
    document.getElementById("myCaption7").classList.toggle("caption-show");
  }
  function myCap8() {
    document.getElementById("myCaption8").classList.toggle("caption-show");
  }
  function myCap9() {
    document.getElementById("myCaption9").classList.toggle("caption-show");
  }
  function myCap10() {
    document.getElementById("myCaption10").classList.toggle("caption-show");
  }
  function myCap11() {
    document.getElementById("myCaption11").classList.toggle("caption-show");
  }
  function myCap12() {
    document.getElementById("myCaption12").classList.toggle("caption-show");
  }
  function myCap13() {
    document.getElementById("myCaption13").classList.toggle("caption-show");
  }
  function myCap14() {
    document.getElementById("myCaption14").classList.toggle("caption-show");
  }
  function myCap15() {
    document.getElementById("myCaption15").classList.toggle("caption-show");
  }


function openModal() {
    document.getElementById("myModal").style.display = "block";
}
function closeModal() {
    document.getElementById("myModal").style.display = "none";
}
  
var slideIndex = 1;
  showSlides(slideIndex);
  
function plusSlides(n) {
    showSlides(slideIndex += n);
}
  
function currentSlide(n) {
    showSlides(slideIndex = n);
}
  
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
    captionText.innerHTML = dots[slideIndex-1].alt;
}