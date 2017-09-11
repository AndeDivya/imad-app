var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var elements = {
    one : {
        heading : "Hi This is One",
        Date: "Sept 5, 2016",
        Content : `
<div class = "container">

<div>
<a href="/"> Home </a>
</div>

<hr/>

<h3>
Article one
</h3>

<div>
Sept 5, 2016
</div>

<div>
<p>
This is the content
</p>
<p>
This is second in the content
</p>
</div>

</div>
` },
    two : {
        heading : "Hi This is Two",
        Date: "Sept 15, 2016",
        Content : `
<div class = "container">

<div>
<a href="/"> Home </a>
</div>

<hr/>

<h3>
Article two
</h3>

<div>
Sept 5, 2016
</div>

<div>
<p>
This is the content
</p>
<p>
This is second in the content
</p>
</div>

</div>
`
    },
    three : {
        Heading : "Hi This is Three",
        Date: "Sept 55, 2016",
        Content : `
<div class = "container">

<div>
<a href="/"> Home </a>
</div>

<hr/>

<h3>
Article three
</h3>

<div>
Sept 5, 2016
</div>

<div>
<p>
This is the content
</p>
<p>
This is second in the content
</p>
</div>

</div>
`
    }
};
function createTemplate(data)
{
   var heading = data.Heading;
   var date = data.Date;
   var content= data.Content;
    
var htmlTemplate = `    
<html>
<head>
<title>
${heading}
</title>
<link href="/ui/style.css" rel="stylesheet" />
<meta name="viewiport" content="width=device-width, intial-scale=1" />
${date}
</head>
<body>
${content}
</body>
</html>`;
return htmlTemplate;
}

 var counter =0;
 
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/counter', function (req, res) {
    counter = counter + 1;
    res.send(counter.toString())
});

var names = [];

app.get('/submitname/name', function (req, res) {
   var name = req.params.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

app.get('/:articleName', function (req, res){
    var articleName = req.params.articleName;
   res.send(createTemplate(elements[articleName]));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
