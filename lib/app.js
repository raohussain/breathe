class Breathe {
    constructor({ sizeJump = 20, maxWidth = 300, minWidth = 10 }) {
        this.sizeJump = sizeJump;
        this.maxWidth = maxWidth;
        this.minWidth = minWidth;

        this.intervalHandle = null;
    }

    start() {
        if (this.intervalHandle) {
            console.warn('Already running the session!');
            return;
        }

        const container = document.querySelector('.breathe-container');
        let sizeJump = this.sizeJump;

        this.intervalHandle = window.setInterval(() => {
            const width = window.getComputedStyle(container).width;
            const numericWidth = parseInt(width.replace('px', ''), 10);

            const newWidth = numericWidth + sizeJump;

            container.style.width = `${newWidth}px`;

            if (newWidth >= this.maxWidth) {
                sizeJump = -sizeJump;
            } else if (newWidth <= this.minWidth) {
                sizeJump = Math.abs(sizeJump);
            }
        }, 100);
    }

    stop() {
        window.clearInterval(this.intervalHandle);
        this.intervalHandle = null;
    }
}