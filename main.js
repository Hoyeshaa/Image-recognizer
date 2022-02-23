Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:100
});
Webcam.attach('#camera');
camera = document.getElementById("camera")

function capture(){
  Webcam.snap(function(data_uri){
      document.getElementById("results").innerHTML = '<img id="capture_img" src="'+data_uri+'">';
  });
}
console.log("ml5version",ml5.version);
var imports = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/9uqnePEmO/model.json',modelLoaded)
