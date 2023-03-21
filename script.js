var audio=document.createElement('audio');
audio.setAttribute('src','sound.mp3');
audio.loop=true;
audio.play();
let sky=document.getElementById('sky');
let field=document.getElementById('field');
let night=document.querySelector('#night');
let light=document.querySelector('#light');
setInterval(change_background, 1000 * 60 * 60);
    function change_background() {
      var d = new Date();
      var n = d.getHours();
      var m=d.getMonth();
      if(m>=10 || m==11 || m<2){
        field.style.backgroundImage="url('winter.png')";
        if (n >= 19 || n==23 || n < 5) {
            sky.style.backgroundImage="url('night.avif')";
            night.style.zIndex="0.5"
            light.style.display="block";
          } else if(n==5 || n<11){
            sky.style.backgroundImage="url('morning.avif')";
          }else if(n==11 || n<16){
            sky.style.backgroundImage="url('istockphoto-1004682020-612x612.jpg')";
          }else if(n==16 || n<19){
            sky.style.backgroundImage="url('evening.avif')";
          }
      }
      else if(m==2 || m<4){
        field.style.backgroundImage="url('spring.png')";
        if (n >= 19 || n==23 || n < 5) {
            sky.style.backgroundImage="url('night.avif')";
            night.style.zIndex="0.5"
            light.style.display="block";
          } else if(n==5 || n<11){
            sky.style.backgroundImage="url('morning.avif')";
          }else if(n==11 || n<16){
            sky.style.backgroundImage="url('istockphoto-1004682020-612x612.jpg')";
          }else if(n==16 || n<19){
            sky.style.backgroundImage="url('evening.avif')";
          }
      }else if(m==4 || m<8){
        field.style.backgroundImage="url('summer.png')";
        if (n >= 19 || n==23 || n < 5) {
            sky.style.backgroundImage="url('night.avif')";
            night.style.zIndex="0.5"
            light.style.display="block";
          } else if(n==5 || n<11){
            sky.style.backgroundImage="url('morning.avif')";
          }else if(n==11 || n<16){
            sky.style.backgroundImage="url('istockphoto-1004682020-612x612.jpg')";
          }else if(n==16 || n<19){
            sky.style.backgroundImage="url('evening.avif')";
          }
      }
      else if(m==8 || m<10){
        field.style.backgroundImage="url('automn.png')";
        if (n >= 19 || n==23 || n < 5) {
            sky.style.backgroundImage="url('night.avif')";
            night.style.zIndex="0.5"
            light.style.display="block";
          } else if(n==5 || n<11){
            sky.style.backgroundImage="url('morning.avif')";
          }else if(n==11 || n<16){
            sky.style.backgroundImage="url('istockphoto-1004682020-612x612.jpg')";
          }else if(n==16 || n<19){
            sky.style.backgroundImage="url('evening.avif')";
          }
      }
    }
    change_background();