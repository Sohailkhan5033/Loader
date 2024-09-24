let btn=document.querySelector("button");
let audio=document.querySelector("audio");

btn.addEventListener("click",function(){
    if(audio.paused){
        audio.play();
        btn.textContent="Pause";
    }else{
        audio.pause();
        btn.textContent="Play";
    }
    
    
});

