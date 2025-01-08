

let songIndex= 0;
let audioElement = new Audio('satranga.mp3');
letmasterPlay= document.getElementById('masterPlay');
let progressbar= document.getElementById('progressbar');
let gifs=document.getElementById('gifs');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs =[
    {songName: "Angaroo", filepath:"songs/1.mp3", coverPath:"covers/1.jpg"},
    {songName: "Aayi nai", filepath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName: "Pushpa Pushpa", filepath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName: "Kesariya", filepath:"songs/4.mp3", coverPath:""},
    {songName: "Kesariya", filepath:"songs/5.mp3", coverPath:""},
]

songItems.forEach((element)=>{
    //console.log(element, i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText =songs[i].songname;
})

//audioElement.play();

//For Listening.

//Playor Pause
masterPlay.addEventListener('click' ,()=>{
    if(audioElement.paused|| audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-solid fa-play');
        masterPlay.classList.add('fa-solid fa-pause');
        gifs.style.opacity=1;
    }
    else{
       audioElement.pause();
        masterPlay.classList.remove('fa-solid fa-pause');
        masterPlay.classList.add('fa-solid fa-pause');
        gifs.style.opacity=0;
    }
})



audioElement.addEventListener('time', ()=>{

    console.log('time');



//seekbar
 progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
console.log(progress);
progressbar.value = progress;
})

progressbar.addEventListener('change',()=>{
    audioElement.currentTime= progressbar.value*audioElement.duration/100;
})


const makeAllPlays=()=>{
    
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-solid fa-pause');
        element.classList.add('fa-solid fa-play');
    })

}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=> {
console.log(e.target);
makeAllPlays();
index = parseInt(e.target.id);
e.target.classList.remove('fa-solid fa-play');
e.target.classList.add('fa-solid fa-pause');
audioElement.src= 'songs/${index},mp3';
audioElement.currentTime = 0;
audioElement.play();
masterPlay.classList.remove('fa-solid fa-play');
masterPlay.classList.add('fa-solid fa-pause');
        })
})