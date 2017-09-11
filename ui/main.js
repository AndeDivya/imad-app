console.log('Loaded!');
var img = document.getElementById("madi");
var marginleft = 0;
function moveRight()
{
    marginleft = marginleft + 1;
    img.style.marginLeft = marginleft + 'px';
}

img.onclick = function()
{
    var interval = setInterval(moveRight, 10);
    
};

var button = document.getElementById("counter");

button.onclick = function()
{
    
    counter = counter + 1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};