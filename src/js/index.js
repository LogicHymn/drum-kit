var DrumButton = document.querySelectorAll(".drum");

//Mouse Click
for(var i = 0; i<DrumButton.length; i++){
    DrumButton[i].addEventListener("click", function(){
        makeSound(this.innerHTML);
    });
}

//Keyboard Click
document.addEventListener("keydown", function(event){
    makeSound(event.key);
});


//Sound Logic
function makeSound(key){
    switch(key){
            case "w":
                var tom1 = new Audio("assests/sounds/tom-1.mp3");
                tom1.play();
                break;

            case "a":
                var tom2 = new Audio("assests/sounds/tom-2.mp3");
                tom2.play();
                break;

            case "s":
                var tom3 = new Audio("assests/sounds/tom-3.mp3");
                tom3.play();
                break;

            case "d":
                var tom4 = new Audio("assests/sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var snare = new Audio("assests/sounds/snare.mp3");
                snare.play();
                break;

            case "k":
                var crash = new Audio("assests/sounds/crash.mp3");
                crash.play();
                break;
            
            case "l":
                var kickBass = new Audio("assests/sounds/kick-bass.mp3");
                kickBass.play();
                break;

            default:
                console.log("Invalid-key: ", key);
        }

}
