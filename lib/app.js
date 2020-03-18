class Breathe {
    constructor({ sizeJump = 20, maxWidth = 300, minWidth = 10 }) {
        this.sizeJump = sizeJump;
        this.maxWidth = maxWidth;
        this.minWidth = minWidth;
    }

    start(timerMs) {
        const container = document.querySelector('.breathe-container');
        let sizeJump = this.sizeJump;

        window.setInterval(() => {
            const width = window.getComputedStyle(container).width;
            const numericWidth = parseInt(width.replace('px', ''), 10);

            const newWidth = numericWidth + sizeJump;

            container.style.width = `${newWidth}px`;

            if (newWidth >= this.maxWidth) {
                sizeJump = -sizeJump;
            } else if (newWidth <= this.minWidth) {
                sizeJump = Math.abs(sizeJump);
            }
        }, timerMs);

        console.log(container);
    }
}