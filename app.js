/* Created by GeekStar Codes */

const w = innerWidth,
    h = innerHeight
const amount = 37

function setup() {
    v = min(w, h)
    createCanvas(w, h)
    background(0, 0, 0, 10)
}

function draw() {
    colorMode(RGB)
    background(0, 0, 0, 10)

    var t = frameCount / 60 + 3 / 2 * PI
    t += cos(t) / 3 * 2
    const R = v / 3

    for (let i = 0; i < amount; i++) {
        const a = i / amount * PI * (sin(t) + 1) + t
        const r = v / 20 * sin(i / amount * 10 * PI) * (sin(t) + 1) / 2
        const x = w / 2 + (R + r) * cos(a)
        const y = h / 2 - (R + r) * sin(a)

        colorMode(HSB, 2 * PI, 100, 100)
        stroke(a - t, 50, 100)
        fill(a - t, 50, 100)
        ellipse(x, y, v / 50, v / 50)
    }
}

/* Created by GeekStar Codes */

/* 
Subscribe to my YouTube channel for more cool stuffs.
Link: https://t2m.io/pXUSmgPx 
*/
