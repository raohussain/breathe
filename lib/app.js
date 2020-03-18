class Breathe {
    start(timerMs) {
        const container = document.querySelector('.breathe-container');
        let sizeJump = 10;

        window.setInterval(() => {
            const width = window.getComputedStyle(container).width;
            const height = window.getComputedStyle(container).height;

            const numericWidth = parseInt(width.replace('px', ''), 10);
            const numericHeight = parseInt(height.replace('px', ''), 10);

            const newWidth = numericWidth + sizeJump;
            const newHeight = numericHeight + sizeJump;

            container.style.width = `${newWidth}px`;
            container.style.height = `${newHeight}px`;

            if (newHeight >= 300) {
                sizeJump = -sizeJump;
            } else if (newHeight <= 10) {
                sizeJump = Math.abs(sizeJump);
            }
        }, timerMs);

        console.log(container);
    }
}