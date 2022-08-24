leftWrist_x = 0;
leftWrist_y = 0;
rightWrist_x = 0;
rightWrist_y = 0;
difference = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(520,520);
    video.position(270,90);
    canvas = createCanvas(500,400);
    canvas.position(900,150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);

}
function modelLoaded(){
    console.log("Model Loaded");

}
function preload(){

}

function draw(){
    background("#DCDCDC");
    textSize(difference)
    fill("#175368");
    text("Hello", 0, 300);
    document.getElementById("font_size").innerHTML = "Font Size will be: "+difference+"px"
    
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        leftWrist_x = results[0].pose.leftWrist.x;
        rightWrist_x = results[0].pose.rightWrist.x;
        console.log("Left Wrist X = "+leftWrist_x);
        console.log("Right Wrist X = "+rightWrist_x);
        difference = floor(leftWrist_x - rightWrist_x);
    }
}
