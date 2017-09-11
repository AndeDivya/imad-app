console.log('Loaded!');
var img = document.getElementById("madi");
function moveRight()
{
    marginLeft = marginLeft + 10;
    img.style.marginLeft = marginLeft + 'px';
}
var marginleft = 0;
img.onclick = function()
{
    var interval = setInterval(moveRight, 100);
    
};
var element = document.getElementById("main-text");
element.innerHtml = 'New Content';