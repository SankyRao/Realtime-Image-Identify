function preload() {

}

function setup() {
    Canvas = createCanvas(280, 250)
    Canvas.position(510, 300)
    video = createCapture(VIDEO)
    video.hide();

    teachableM = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/ekyJJXZGJ/model.json", modelloaded)
}

function draw() {
    image(video, 0, 0, 280, 250)
    teachableM.classify(video, gotresult)
}

function modelloaded() {
    console.log("ModelLoaded")
}

function gotresult(ERROR, result) {
    if (ERROR) {
        console.error(ERROR);
    } else {
        console.log(result);
        document.getElementById("BlankSpan").innerHTML = result[0].label;
        document.getElementById("blankSpan").innerHTML = result[0].confidence.toFixed(3);
    }
}