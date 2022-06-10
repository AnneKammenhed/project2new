//** event listener*/
document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {
        button.addEventListener("click", function() {
            if (this.getAttribute("game-type") === "rock") {
               alert("You played rock!");
            } else if (this.getAttribute("game-type") === "scissors"){
                alert("You played scissors!")
            }
        });
    }
});
