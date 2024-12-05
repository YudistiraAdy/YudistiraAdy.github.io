// Get the modal
var modal = document.getElementById("modal");
console.log("Modal:", modal);

// Get the image and video elements inside the modal
var modalImg = document.getElementById("modal-img");
var modalVideo = document.getElementById("modal-video");
console.log("Modal Image:", modalImg);
console.log("Modal Video:", modalVideo);

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];
console.log("Close Button:", span);

// Add event listener to all images in projects and gallery sections
var images = document.querySelectorAll("#projects img, #gallery img");
console.log("Images:", images);
images.forEach(img => {
    img.addEventListener("click", function() {
        console.log("Image clicked:", this.src);
        modal.style.display = "block";
        modalImg.style.display = "block";
        modalVideo.style.display = "none";
        modalImg.src = this.src;
    });
});

// Add event listener to all videos in videos section
var videos = document.querySelectorAll("#videos video");
console.log("Videos:", videos);
videos.forEach(video => {
    video.addEventListener("click", function() {
        console.log("Video clicked:", this.querySelector("source").src);
        modal.style.display = "block";
        modalImg.style.display = "none";
        modalVideo.style.display = "block";
        modalVideo.src = this.querySelector("source").src;
    });
});

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    console.log("Close button clicked");
    modal.style.display = "none";
}