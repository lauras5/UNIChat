var LoginModalController = {
    tabsElementName: ".logmod__tabs li",
    tabElementName: ".logmod__tab",
    inputElementsName: ".logmod__form .input",
    hidePasswordName: ".hide-password",

    inputElements: null,
    tabsElement: null,
    tabElement: null,
    hidePassword: null,

    activeTab: null,
    tabSelection: 0, // 0 - first, 1 - second

    findElements: function () {
        var base = this;

        base.tabsElement = $(base.tabsElementName);
        base.tabElement = $(base.tabElementName);
        base.inputElements = $(base.inputElementsName);
        base.hidePassword = $(base.hidePasswordName);

        return base;
    },

    setState: function (state) {
        var base = this,
            elem = null;

        if (!state) {
            state = 0;
        }

        if (base.tabsElement) {
            elem = $(base.tabsElement[state]);
            elem.addClass("current");
            $("." + elem.attr("data-tabtar")).addClass("show");
        }

        return base;
    },

    getActiveTab: function () {
        var base = this;

        base.tabsElement.each(function (i, el) {
            if ($(el).hasClass("current")) {
                base.activeTab = $(el);
            }
        });

        return base;
    },

    addClickEvents: function () {
        var base = this;

        base.hidePassword.on("click", function (e) {
            var $this = $(this),
                $pwInput = $this.prev("input");

            if ($pwInput.attr("type") == "password") {
                $pwInput.attr("type", "text");
                $this.text("Hide");
            } else {
                $pwInput.attr("type", "password");
                $this.text("Show");
            }
        });

        base.tabsElement.on("click", function (e) {
            var targetTab = $(this).attr("data-tabtar");

            e.preventDefault();
            base.activeTab.removeClass("current");
            base.activeTab = $(this);
            base.activeTab.addClass("current");

            base.tabElement.each(function (i, el) {
                el = $(el);
                el.removeClass("show");
                if (el.hasClass(targetTab)) {
                    el.addClass("show");
                }
            });
        });

        base.inputElements.find("label").on("click", function (e) {
            var $this = $(this),
                $input = $this.next("input");

            $input.focus();
        });

        return base;
    },

    initialize: function () {
        var base = this;

        base.findElements().setState().getActiveTab().addClickEvents();
    }
};

$(document).ready(function () {
    LoginModalController.initialize();
});






// click events and userAuth 

// loggedIn = localStorage.getItem(loggedIn);
console.log("Logged in: " + sessionStorage.getItem("loggedIn"))

if (sessionStorage.getItem("loggedIn")) {
    $.get('/students').then(function (data, status) {
        // window.location.href = "index.html";
    })
}
else {
    // direct to logged out page
    $.get('/').then(function (data, status) {
        console.log("logged out")
    })

}


$("#register-btn").on("click", function () {
    event.preventDefault();

    var secKey = $("#user-code").val().trim();

    $.get('/admin/token').then(function (data, status) {
        // returns all saved tokens

        var count = 0;

        for (var key in data) {
            if (secKey === data[key].key) {
                count++;

                loggedIn = sessionStorage.setItem("loggedIn", true);
                console.log("Logged in? " + sessionStorage.getItem("loggedIn"))


                var userp = $("#user-pw-r").val();
                var userpr = $("#user-pw-repeat").val();


                if (userp !== userpr) {
                    alert("Passowords do not match!");
                }
                else {
                    var user = {
                        name: $("#user-flname").val(),
                        email: $("#user-email-r").val(),
                        password: $("#user-pw-r").val(),
                        dorm: data[key].dorm,
                        clearance_level: "student"
                    }
                    console.log(user);
                    $.post('/users', user).then(function (data, status) {
                        console.log("data: " + data);
                        console.log("status" + status)
                    })
                    $.get('/students').then(function (data, status) {
                        // data.redirect;
                    })
                }


            }
        }
        if (count === 0) {
            alert("You have entered an invalid student code. Please try again!")
        }

    })


})


$("#login-btn").on("click", function () {
    event.preventDefault();


    var email = sessionStorage.setItem("email", $("#user-email-l").val().trim());
    var password = sessionStorage.setItem("password", $("#user-pw-l").val().trim());

})