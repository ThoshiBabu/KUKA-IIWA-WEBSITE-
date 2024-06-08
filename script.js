document.addEventListener("DOMContentLoaded", function() {
    var content = document.getElementById("content");
    var contentPosition = content.getBoundingClientRect().top;
    var screenPosition = window.innerHeight / 1.3;

    function contentAnimation() {
        if (contentPosition < screenPosition) {
            content.classList.add("visible");
        }
    }

    contentAnimation(); // Call the function initially to make sure the content is visible when the page loads

    window.addEventListener("scroll", contentAnimation);
});
