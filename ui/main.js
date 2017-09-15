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

var button = document.getElementById('counter');

//var footer = document.getElementsByClassName("footer");
var request1 = new XMLHttpRequest();

request1.onreadystatechange = function() 
    {
        if(request1.readyState == XMLHttpRequest.DONE)
        {
            if(request1.status == 200)
            {
                var counter = request1.responseText;
                 var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    
   request1.open('GET', 'http://divyatulasi93.imad.hasura-app.io/counter', true );
   request1.send(null);

button.onclick = function()
{
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() 
    {
        if(request.readyState == XMLHttpRequest.DONE)
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

var nameInput = document.getElementById('name');

var submitButton = document.getElementById('submit');

submitButton.onclick =function()
{
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function() 
    {
        if(request.readyState == XMLHttpRequest.DONE)
        {
            if(request.status == 200)
            {
                 var names = request.responseText;
                 names = JSON.parse(names);
                 var list = '';
                 for (var i=0; i<names.length; i++)
                     {
                         list+='<li>' + names[i] + '</li>';
                    }
                var ul = document.getElementById('namelist');
                 ul.innerHTML = list;
            }
        }
    };
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
   request.open('GET', 'http://divyatulasi93.imad.hasura-app.io/submitname?name=' + name, true );
   request.send(null);
   
   };