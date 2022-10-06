noseX=0;
noseY=0;

function preload()
{
    lipstick = loadImage("https://i.postimg.cc/PxFvYgkv/l1.png")
}

function setup()
{
    canvas = createCanvas(300, 300)
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is inittialized');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lipX = results[0].pose.nose.x;
        lipY = results[0].pose.nose.y;
        console.log("lip x = " + noseX);
        console.log("lip y = " + noseY);
    }
}

function draw()
{
 image(video,0, 0, 300, 300);
 image(lipstick, lipX-15, lipY+15, 30, 30);
}

function take_snapshot()
{
      SVGAKlement('myFilterImage.png')
}