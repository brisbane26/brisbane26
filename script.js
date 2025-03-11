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
