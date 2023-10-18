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

