var SpeechRecognition = window.webkitSpeechRecognition;
//web speech api is a high-level scripting language built in the browsers the allows you to implement functionality on the web pages/apps 

var recognition = new SpeechRecognition();

//web Speech api is used to recognize what we are speaking and convert it into text. New kewword will ensure that there a new api every time the page loads


function start()
{
    document.getElementById("textbox").innerHTML = "";
    recognition.start();

}

recognition.onresult = function(event) {
    console.log(event);
     
    var Content = event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("textbox").innerHTML = Content;
if(Content=="take my selfie" )
{
    console.log("take my selfie------");
    speak();
}

}

camera = document.getElementById("camera");

Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});

function speak(){
    var synth = window.speechSynthesis;
    //window.speechSynthesis will convert the text into speech so that we can make the system speak 

    speak_data = "Taking my selfie in 5 seconds";
     
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    //speechSynthesisUtterance  interface of the webspeech api represent a speech request it contains the contant of the speech 

    synth.speak(utterThis);

    Webcam.attach(camera);
    //webcam.attach activates the user webcam ask for the approprate permission,and begin showing the live camera image  
    
    setTimeout(function(){
take_snapshot();
save(); 
    }, 5000);

    



}


function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'">';
         })
}

function save()
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}


