$('#postSubmitBTN').on('click', function (event) {
    event.preventDefault();
    // text area turns into var on submit button click
    // do if statement for 150 characters, do not post if more than 150.
    var body = $('#textarea2').val().trim();

    $.get('/users').then(function(data, status) {
        // loops through the keys
        for (var key in data) {
            
            var uEmail = sessionStorage.getItem("email");
            if (uEmail === data[key].email) {
                // define post, give it unique id of user id
                var post = {body: body, upvotes: 0, downvotes: 0, dorm: data[key].dorm, type: 'post', UserId: data[key].id}
    
                console.log(post)
                
                // post that info to sql
                $.post('/students2/posts', post, function (data, status) {
                    console.log(status)
                }); 
            }
        }
    })
});

$.get('/admin/posts').then(function(data, status) {
    for (var key in data) {
        var adminPost = data[key].body
        $('#adminCard').prepend("<div id='aPost'>" + adminPost + "</div>")
    };
});

$('input#input_text, textarea#textarea2').characterCounter()

var maxLength = 150;
$('textarea').keyup(function() {
  var length = $(this).val().length;
  var length = maxLength-length;
  $('#chars').text(length);
});

// logout button
$("#logoutBtn").on("click", function () {
    sessionStorage.setItem("loggedIn", false);
    sessionStorage.removeItem('name');
    sessionStorage.removeItem('email');
    window.location.href = '/';
});
