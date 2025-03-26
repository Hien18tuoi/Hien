document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector(".ripple-button");

    button.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");

        // Lấy vị trí click
        const x = e.clientX - button.offsetLeft;
        const y = e.clientY - button.offsetTop;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        button.appendChild(ripple);

        // Xóa hiệu ứng sau khi hoàn thành
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});
