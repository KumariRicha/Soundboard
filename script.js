const sounds=[{title:"Aria",id:"s1"},
{title:"Kai ",id:"s2"},
{title:"Misha ",id:"s3"},
{title:"Cymbal ",id:"s4"},
{title:"Ode ",id:"s5"}]

sounds.forEach((sound)=>{
    const btn = document.createElement('button');
    btn.classList.add('btn');
    btn.innerText = sound.title;
    btn.addEventListener('click',()=>{
        stopSongs();
        console.log('PLAY: ',sound)
        document.getElementById(sound.id).play()
    })
    document.getElementById('button').appendChild(btn);
})
function stopSongs(){
    sounds.forEach(sound =>{
        const song = document.getElementById(sound.id);
        song.pause();
        song.currentTime=0;
    })
}