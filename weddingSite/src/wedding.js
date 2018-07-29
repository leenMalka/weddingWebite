$(document).ready(function() {
    $(".addeventatc").on("click", function() {
      $(".ategoogle").click();
      
    });
      $(".download").on("click", function() {
     var a = document.createElement('a');
  a.href = "../images/wedding.jpg";
  a.download = "wedding.png";
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  });
      
    });
  
  