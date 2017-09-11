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
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() 
    {
        if(request.readystate == XMLHttpRequest.DONE)
        {
            if(request.status == 200)
            {
                var counter = request.responseText;
                 var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
   request.open('GET', 'http://divyatulasi93.imad.hasura-app.io/counter', true );
   request.send(null);
};