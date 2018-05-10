$("#btn").on('click', function () {
    var user = {
        post: $("#input").val()
    }
    $.post('/users', user).then(function () {
        console.log('posts')
    })
})

// character counter function on post
var data-length
$('input#input_text, textarea#textarea2').characterCounter()
    if(data-length > 150) {
        console.log('too long')
    }

// logout button
$("#logoutBtn").on("click", function () {
    console.log("sup")
    loggedIn = sessionStorage.setItem("loggedIn", false);
})

// Or with jQuery
$(document).ready(function(){
    $('ul.tabs').tabs({
      swipeable : true,
      responsiveThreshold : 1920
    });
  });

  $(function() {      
    //Enable swiping...
    $("#test").swipe( {
      //Generic swipe handler for all directions
      swipe:function(event, direction, distance, duration, fingerCount, fingerData) {
        $(this).text("You swiped " + direction );  
      },
      //Default is 75px, set to 0 for demo so any distance triggers swipe
       threshold:0
    });
  });

