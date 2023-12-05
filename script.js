// script.js

// Function to play witch laugh
function playWitchLaugh() {
    // You can replace the audio file URL with your own
    var audio = new Audio('this-is.mp3'); // Replace 'witch-laugh.mp3' with the actual file name
    audio.play();
}

// Execute the playWitchLaugh function when the "Halloween Costumes" text is clicked
document.addEventListener('DOMContentLoaded', function () {
    var halloweenCostumesText = document.querySelector('h1');
    halloweenCostumesText.addEventListener('click', playWitchLaugh);
});
