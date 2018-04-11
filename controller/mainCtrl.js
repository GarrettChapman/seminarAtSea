angular.module("sas, []").controller('mainCtrl', [$scope, function($scope){




  // Modal Image Gallery
  function onClick(element) {
    document.getElementById("img01").src = element.src;
    document.getElementById("modal01").style.display = "block";
    var captionText = document.getElementById("caption");
    captionText.innerHTML = element.alt;
  }

  // Change style of navbar on scroll
  window.onscroll = function() {myFunction()};
  function myFunction() {
      var navbar = document.getElementById("myNavbar");
      if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
          navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-#8cf0ec";
      } else {
          navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-#8cf0ec", "");
      }
  }

  // toggle the menu on small screens when clicking on the menu button
  function toggleFunction() {
      var x = document.getElementById("navDemo");
      if (x.className.indexOf("w3-show") == -1) {
          x.className += " w3-show";
      } else {
          x.className = x.className.replace(" w3-show", "");
      }
  }

  // Get the modal
  var modal = document.getElementById('myModal');
  var modal1 = document.getElementById('myModal1');
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  var btn1 = document.getElementById("myBtn1");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  var span1 = document.getElementsByClassName("close1")[0];


  window.onclick = function(event) {
      if (event.target == modal1) {
          modal1.style.display = "none";

      }else if (event.target == modal) {
          modal.style.display = "none";

      }
  }


}])
