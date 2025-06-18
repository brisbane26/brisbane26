document.addEventListener("DOMContentLoaded", function () {
    const text = document.querySelector(".animated-text");
    const content = "Hello World!";
    let index = 0;

    function animateText() {
        text.textContent = content.substring(0, index);
        index++;

        if (index > content.length) {
            index = 0; // Reset setelah selesai
            setTimeout(animateText, 1000); // Tunggu sebelum restart
        } else {
            setTimeout(animateText, 100); // Efek ketikan
        }
    }

    animateText();
});

// New JavaScript for Back to Top button
window.onload = function() {
    const backToTopBtn = document.getElementById("backToTopBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {
        scrollFunction();
    };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopBtn.style.display = "block";
        } else {
            backToTopBtn.style.display = "none";
        }
    }

    // When the user clicks on the button, scroll to the top of the document
    backToTopBtn.addEventListener("click", function() {
        window.scrollTo({
            top: 0,
            behavior: "smooth" // For a smooth scrolling animation
        });
    });
};
