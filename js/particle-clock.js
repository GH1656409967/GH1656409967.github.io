const digit = [
    [[0, 0, 1, 1, 1, 0, 0], [0, 1, 1, 0, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 0, 1, 1, 0], [0, 0, 1, 1, 1, 0, 0]],
    [[0, 0, 0, 1, 1, 0, 0], [0, 1, 1, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [1, 1, 1, 1, 1, 1, 1]],
    [[0, 1, 1, 1, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 1, 1], [1, 1, 1, 1, 1, 1, 1]],
    [[1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0]],
    [[0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 1, 0], [0, 0, 1, 1, 1, 1, 0], [0, 1, 1, 0, 1, 1, 0], [1, 1, 0, 0, 1, 1, 0], [1, 1, 1, 1, 1, 1, 1], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 1, 1]],
    [[1, 1, 1, 1, 1, 1, 1], [1, 1, 0, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0], [1, 1, 1, 1, 1, 1, 0], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0]],
    [[0, 0, 0, 0, 1, 1, 0], [0, 0, 1, 1, 0, 0, 0], [0, 1, 1, 0, 0, 0, 0], [1, 1, 0, 0, 0, 0, 0], [1, 1, 0, 1, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0]],
    [[1, 1, 1, 1, 1, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 0, 1, 1, 0, 0], [0, 0, 1, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0], [0, 0, 1, 1, 0, 0, 0]],
    [[0, 1, 1, 1, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 1, 1, 1, 0]],
    [[0, 1, 1, 1, 1, 1, 0], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [1, 1, 0, 0, 0, 1, 1], [0, 1, 1, 1, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 0, 1, 1], [0, 0, 0, 0, 1, 1, 0], [0, 0, 0, 1, 1, 0, 0], [0, 1, 1, 0, 0, 0, 0]],
    [[0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0]]
];

let canvas, ctx, data = [], balls = [], timer = null, R, H = 100, W = 700;
const colors = ["#3BE", "#09C", "#A6C", "#93C", "#9C0", "#690", "#FB3", "#F80", "#F44", "#C00"];

function getColor() {
    return document.querySelector('html')?.getAttribute('data-theme') === 'dark' ? '#fff' : '#000';
}

function renderDigit(index, num) {
    for (let i = 0; i < digit[num].length; i++) {
        for (let j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j]) {
                ctx.beginPath();
                ctx.arc(14 * (R + 2) * index + j * 2 * (R + 1) + (R + 1), i * 2 * (R + 1) + (R + 1), R, 0, 2 * Math.PI);
                ctx.fillStyle = getColor();
                ctx.fill();
            }
        }
    }
}

function updateTime() {
    const t = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
    const newData = [t[1], t[2], 10, t[3], t[4], 10, t[5], t[6]];

    for (let i = 0; i < data.length; i++) {
        if (newData[i] !== data[i]) {
            addBalls(i, (Number(data[i]) + 1) % 10);
        }
    }
    data = newData;
}

function updateBalls() {
    for (let i = balls.length - 1; i >= 0; i--) {
        balls[i].stepY += balls[i].disY;
        balls[i].x += balls[i].stepX;
        balls[i].y += balls[i].stepY;
        if (balls[i].x > W + R || balls[i].y > H + R) {
            balls.splice(i, 1);
        }
    }
}

function addBalls(index, num) {
    for (let i = 0; i < digit[num].length; i++) {
        for (let j = 0; j < digit[num][i].length; j++) {
            if (digit[num][i][j]) {
                balls.push({
                    x: 14 * (R + 2) * index + j * 2 * (R + 1) + (R + 1),
                    y: i * 2 * (R + 1) + (R + 1),
                    stepX: Math.floor(Math.random() * 4 - 2),
                    stepY: -2 * [1, 2, 3][Math.floor(Math.random() * 3)],
                    color: colors[Math.floor(Math.random() * colors.length)],
                    disY: 1
                });
            }
        }
    }
}

function render() {
    canvas.height = H;
    for (let i = 0; i < data.length; i++) renderDigit(i, data[i]);
    for (let i = 0; i < balls.length; i++) {
        ctx.beginPath();
        ctx.arc(balls[i].x, balls[i].y, R, 0, 2 * Math.PI);
        ctx.fillStyle = balls[i].color;
        ctx.fill();
    }
}

function startDiyClock(canvasId) {
    if (timer) clearInterval(timer);

    canvas = document.getElementById(canvasId);
    if (!canvas?.getContext) return;

    ctx = canvas.getContext('2d');
    canvas.height = H;
    canvas.width = W;
    R = H / 20 - 1;
    balls = [];

    const t = /(\d)(\d):(\d)(\d):(\d)(\d)/.exec(new Date());
    data = [t[1], t[2], 10, t[3], t[4], 10, t[5], t[6]];

    render();
    timer = setInterval(() => {
        updateTime();
        updateBalls();
        render();
    }, 50);
}
