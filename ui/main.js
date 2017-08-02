console.log('Loaded!');
var img= document.getElementById('1');
var marginLeft=0;
img.onclick = function() {
    var interval=setInterval(moveRight,50);
    
};
function moveRight() {
    marginLeft=marginLeft+1;
    img.style.marginLeft= marginLeft+'px';
    
}