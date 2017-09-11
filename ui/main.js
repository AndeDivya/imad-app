console.log('Loaded!');
var img = document.getElementById("madi");
var marginleft = 0;
function moveRight()
{
    marginleft = marginleft + 10;
    img.style.marginLeft = marginleft + 'px';
}

img.onclick = function()
{
    var interval = setInterval(moveRight, 10);
    
};
var element = document.getElementById("main-text");
element.innerHtml = 'New Content';