difference = 0;
rightWristX = 0;
leftWristX = 0;


function setup(){
    video = createCapture(VIDEO);
    video.size(550,500);
    canvas = createCanvas(550,500);
    canvas.position(560,150);
    poseNet = ml5.poseNet(video,modelloaded);
    poseNet.on('pose',getPoses);
}
function preload() {
    
}
function draw(){
background("#969A97");
document.getElementById("font_size").innerHTML = "Font size of the text will be = " + difference +"pixels";
textSize(difference);
fill('F90093');
stroke('F90093');
text('Surya', 50, 400);
}
function modelloaded() {
    console.log("PoseNet Initialized");
}
function getPoses(results){
if(results.length > 0){
    console.log(results);
    leftWristX = results[0].pose.leftWrist.x;
    rightWristX = results[0].pose.rightWrist.x;
    difference = floor(leftWristX - rightWristX);

}
}

