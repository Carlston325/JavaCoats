var numberOfButtons = document.querySelectorAll(".btn").length;

for (var i = 0; i < numberOfButtons; i++) {
    document.querySelectorAll(".btn")[i].addEventListener("mouseenter", function () {
        var buttonValue = (this.classList[1]);

       buttonHightlight(buttonValue);
    });
}

function buttonHightlight(btnKey) {
    var activeButton = document.querySelector("." + btnKey);
    activeButton.classList.add("btnHighlight");

    for (var i = 0; i < numberOfButtons; i++) {
        document.querySelectorAll(".btn")[i].addEventListener("mouseleave", function () {
    
            var activeButton = document.querySelector("." + btnKey);
            activeButton.classList.remove("btnHighlight");
        });
    }
}



jQuery(document).ready(function($) {
    var alterClass = function() {
        var ww = document.body.clientWidth;
        if (ww < 850) {
        $("body > div.container-fluid.text-center.marketing.bg-white > div").removeClass("text-start");
        } else if (ww >= 851) {
        $("body > div.container-fluid.text-center.marketing.bg-white > div").addClass("text-start");
        };
    };

    $(window).resize(function(){
        alterClass();
    });

    alterClass();
});

var userEnquiryNames = [];
var userEnquiryEmails = [];
var userEnquiryMessages = [];

$("#responseSubmit").on ("click", function (ev) {
    ev.preventDefault();

    function UserInfo (name, email, message) {
        this.name = name;
        this.email = email;
        this.message = message;
    }
   
    var userName = document.querySelector("#floatingInput2").value;
    var userEmail = document.querySelector("#floatingInput").value;
    var userMessage = document.querySelector("#floatingTextarea2").value;

    
    enquiryFrom = new UserInfo(userName, userEmail, userMessage);

    userEnquiryNames.push(enquiryFrom.name);

    console.log(enquiryFrom);
    console.log(userEnquiryNames);
    
});



