prediction1="";
prediction2="";
Webcam.set({width:350,height:300,image_format:"png",png_quality:90});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function (data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
}
console.log("ml5 version",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/qed5i3nmb/model.json",modelloaded);
function modelloaded(){
    console.log("model has loaded");
}
function check(){
    img=document.getElementById("captured_image");
    classifier.classify(img,gotresult);
}
function gotresult(error,results){
if(error){
    console.error(error);
}
else{console.log(results);
   document.getElementById("result1").innerHTML=results[0].label;
   document.getElementById("result2").innerHTML=results[1].label;
   prediction1=results[0].label;
   prediction2=results[1].label;
   if(results[0].label=="Happy"){
       document.getElementById("update_emoji").innerHTML="&#128522;";
   }
   if(results[0].label=="Sad"){
    document.getElementById("update_emoji").innerHTML="&#128532;";
}
   if(results[0].label=="Angry"){
    document.getElementById("update_emoji").innerHTML="&#128548;";
}
if(results[0].label=="Happy"){
    document.getElementById("update_emoji1").innerHTML="&#128522;";
}
if(results[0].label=="Sad"){
 document.getElementById("update_emoji1").innerHTML="&#128532;";
}
if(results[0].label=="Angry"){
 document.getElementById("update_emoji1").innerHTML="&#128548;";
}
}
}