// Get the img tag for the image on display
const imageOnDisplay = document.querySelector('.image-on-display img');
// Get all the img tags in image-list div
const imageList = document.querySelectorAll('.image-list img'); // This is an array

// Let's loop through the img tags in image-list div
imageList.forEach((image) => {
    // Add an 'mouseover' event listener on each image in image list
    image.addEventListener('mouseover', (ev) => {
        // Change the src of the 'image on display' on hovering over the images in image list
        imageOnDisplay.src = ev.target.src
    });
});
