// logout button

$.get('/admin/posts').then(function(data, status) {
    for (var key in data) {
        var adminPost = data[key].body
        $('#adminCard').prepend("<div id='aPost'>" + adminPost + "</div>")
    };
});

$("#logoutBtn").on("click", function () {
    sessionStorage.setItem("loggedIn", false);
    sessionStorage.removeItem('name');
    window.location.href = '/';
});