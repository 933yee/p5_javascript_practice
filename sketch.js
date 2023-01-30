const density = 'Ñ@#W$9876543210?!abc;:+=-,.                               ';

// let img;
let video;
let asciiDiv;
// function preload() {
//     img = loadImage("cat.png");
// }

function setup() {
    // createCanvas(1000, 1000);
    noCanvas();
    video = createCapture(VIDEO);
    video.size(100, 50);

    asciiDiv = createDiv();
}

function draw() {
    // background(0);
    // image(video, 0, 0, width, height);
    video.loadPixels();
    // let w = width / video.width;
    // let h = height / video.height;
    // img.loadPixels();
    let asciiImage = "";
    for (let i = 0; i < video.height; i++) {

        for (let j = 0; j < video.width; j++) {
            const pixelIndex = (j + i * video.width) * 4;
            const r = video.pixels[pixelIndex + 0];
            const g = video.pixels[pixelIndex + 1];
            const b = video.pixels[pixelIndex + 2];
            const avg = (r + g + b) / 3;
            // noStroke();
            // fill(255);
            // square(i * w, j * h, w);

            const len = density.length;
            const charIndex = floor(map(avg, 0, 255, 0, len));
            const c = density.charAt(charIndex);
            if (c == ' ')
                asciiImage += "&nbsp";
            else
                asciiImage += c;
            // textSize(w);
            // textAlign(CENTER, CENTER);
            // text(density.charAt(charIndex), i * w + w * 0.5, j * h + h * 0.5);

        }
        asciiImage += '<br/>'
        // createDiv(row);
    }
    asciiDiv.html(asciiImage);

}