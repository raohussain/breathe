class Breathe {
    start(timerMs) {
        const container = document.querySelector('.breathe-container');
        let sizeJump = 10;

        window.setInterval(() => {
            const width = window.getComputedStyle(container).width;
            const numericWidth = parseInt(width.replace('px', ''), 10);

            const newWidth = numericWidth + sizeJump;

            container.style.width = `${newWidth}px`;

            if (newWidth >= 300) {
                sizeJump = -sizeJump;
            } else if (newWidth <= 10) {
                sizeJump = Math.abs(sizeJump);
            }
        }, timerMs);

        console.log(container);
    }
}