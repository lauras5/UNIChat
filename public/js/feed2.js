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
                    $('#newPosts').empty()
                    getPosts()
                }); 
            };
        }
    });
    // clear input field on submit
});

// post admin posts on admin card
$.get('/admin/posts').then(function(data, status) {
    for (var key in data) {
        var adminPost = data[key].body
        $('#adminCard').prepend("<hr><div id='aPost'>" + adminPost + "</div>")
    };
});

$.get('/ra2/posts').then(function(data, status) {
    for (var key in data) {
        var raPost = data[key].body
        $('#raCard').prepend("<hr><div id='raPost'>" + raPost + "</div>")
    };
});

$('input#input_text, textarea#textarea2').characterCounter();

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

// drop down for comment link
$(document).on('click', '#commentLink', function () {
    var postVal = $(this).val();
    
    $('#commentRegion-' + postVal).html("<div><input id='comment' type='text' name='comments'><button id='commentBTN' value='" + postVal + "'>Post</button></div>");
    $.get('/students2/comments', function (data, status) {
        for (var key in data) {
            if (postVal == data[key].PostId) {
                $('#commentRegion-' + postVal).append(data[key].body + "<br>");
            }
        }
    });

    $('#tcommentRegion-' + postVal).html("<div><input id='tcomment' type='text' name='comments'><button id='tcommentBTN' value='" + postVal + "'>Post</button></div>");
    $.get('/students2/comments', function (data, status) {
        for (var key in data) {
            if (postVal == data[key].PostId) {
                $('#tcommentRegion-' + postVal).append(data[key].body + "<br>");
            }
        }
    });

});

// comment section for new page
$(document).on('click', '#commentBTN', function () {
    var postVal = $(this).val();

    $('#commentRegion-' + postVal).append($("#comment").val() + "<br>");

    $.get('/users', function (data, status) {
        for (var key in data) {
            if (sessionStorage.getItem("name") == data[key].name) {
                var userId = data[key].id;

                var commentInfo = {
                    body: $("#comment").val(),
                    author: sessionStorage.getItem("name"),
                    UserId: userId,
                    PostId: postVal
                };

                $.post('/students2/comments', commentInfo, function (data, status) {
                });
            };
        };
    });
});

// comment section for trending page
$(document).on('click', '#tcommentBTN', function () {
    var postVal = $(this).val();
    var postBody = $('#tcomment').val()
    $('#tcommentRegion-' + postVal).append(postBody + "<br>");

    // console.log(postBody)

    $.get('/users', function (data, status) {
        for (var key in data) {
            if (sessionStorage.getItem("name") == data[key].name) {
                var userId = data[key].id;

                var commentInfo = {
                    body: postBody,
                    author: sessionStorage.getItem("name"),
                    UserId: userId,
                    PostId: postVal
                };

                $.post('/students2/comments', commentInfo, function (data, status) {
                });
            };
        };
    });
});
