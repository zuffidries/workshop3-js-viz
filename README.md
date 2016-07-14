# D3 Tutorial

##Introduction
Fork this repo...

##Setting up
In your index.html file link the d3/d3.js file right above the index.js file!
```
<script type="text/javascript" src="d3/d3.min.js"></script>
```
##Selecting Items and Entering the selection 
One of d3's ability that we mentioned is its more compact way to select DOM elements. As you can see in your index.js file, we have already selected the svg circles with the d3.selectAll() method and entered the selection using the chaining method shown below. Notice that your html does not specify any svg elements, we are creating them and selecting them here. 
```
var circles = svg.selectAll('circle')
  .data(attributes)
  .enter()
  .append("circle")
  .attr('fill', color)
  .attr('r', radius)
  .attr('cx', cx)
  .attr('cy', '50px');
```

Let's go through this chain of methods in more detail...

  > svg.selectAll("circle") — Selects all circles in the DOM. Since none exist, thie returns an empty selection. These represent the circles that will soon exist

  > .data(dataset) — Counts and parses our data values, the attributes of the circle. We will set these attributes next. 

  > .enter() — To create new, data-bound elements, you must use enter(). This method looks at the DOM, and then at the data it is being passed. If there are more data values than corresponding DOM elements, then enter() creates a new placeholder element to hand off to the next part of the chain. In this case there are three placeholder elements created!

  >.append("circle") — Takes the placeholder selection created by enter() and inserts the circle elements into the DOM. Yay! Passes the reference of these three circles to the next chain. 

  >.attr("fill", color) — This sets the attributes of the circle based on the data passed to it. 

The .data method sets the attributes As you may notice, the atttributes of these circles have not been set. Create a variable attributes that is an array of JSON data, each element indicating the values for the color, radius (r), and x position (cx) for each circle. 
```
var attributes = [{color: 'red', r: 40, cx: 100},  //example line 
                  {color: '/////', r: ////, cx:////}, 
                  {color: '////', r: ////, cx://///}, 
                  {color: '////', r: ////, cx:///}];
```
filling the slashes with your desired color, size, and position. 

To see what your circles look like, run the page locally. Here's a reminder how 
```
cd workshop-js-viz/d3-tutorial-prod
python -m SimpleHTTPServer 9000
```

#Exiting the selection 
Underneath entering the circles, you see a commented out chain of methods which looks like this: 
````
svgCircles.selectAll('circle')
  .data(attributesExit)
  .exit()
  .attr("fill", changeColor);
````
Unlike the enter Selection which represents a mapping of the DOM nodes that will be created in order to map an excess of data points, the exit selection represents the opposite. It represents mappings to DOM that do not have the corresponding data points. The DOM nodes of these mappings will either be deleted or its attributes are changed. 

To see it in effect, un comment out this code and set the attribuetsExit variable to the data of the circles that you do not want your selection to include. Then set the changeColor in the .attr("fill", changeColor) after the .exit() to the color you want to change your selection to. 
```
var attributesExit = [{color: 'red', r: 40, cx: 100}];
```



##Map 

D3.geo is one of D3's toolkits. It provides several tools to work with maps and topography, in this case we are gonna map the US using the usual projection used for this area - mercator. 

We've provided a topoJSON file which was previously explained. This JSON file contains the data for the map and shows how D3 can take multiple formats of data. 

Paste the following code in your index.js. Where it says longitude and latitude, look up what the longitude and latitude of the center of the US is and paste the values where indicated.  Also don't forget to set the scale and offset

````
d3.json("usa.json", function(error, usa) {
    if (error) return console.error(error);

    // var scale = integer;  // around 800 should be fine
    // var center = [longitude, latitude];
    // var zoomOffset = double;  // the amount the zoom center should deviate from the map's center

    zoom.center(center.map(function(el){return el + zoomOffset;}));

    var usaObject = usa.objects.layer1;
    var topoUsaFeatures = topojson.feature(usa, usaObject);

    var projectionLittle = d3.geo.mercator()
                                .scale(scale)
                                .center(center);

    var path = d3.geo.path()
                      .projection(projectionLittle);
                      svgMap.append("path")
                      .datum(topoUsaFeatures)
                      .attr("d", path);
    });
````
Now you can see your map on the page! 

# P5.js Tutorial

##Get Started
This page walks you through setting up a p5.js project and making your first sketch. If you are using the p5 editor, you can skip to the Your First Sketch section. Processing users may want to check out the Processing transition tutorial found at:
https://github.com/processing/p5.js/wiki/Processing-transition

##Download and File Setup
The easiest way to start is by using the empty example that comes with the p5.js complete download found at:
http://p5js.org/download/

##Environment
You can use the code editor of your choice. We will be using Atom.

In your terminal, find the downloaded folder (mine was called "p5.zip").

Open this folder in Atom (cd p5.zip; atom .;).

In the "empty-example" folder, you will find a "sketch.js" and an "index.html" file. Your p5.js code will go into the sketch.js and you can view the output by opening the html file.

Open the index.html file in your browser by double clicking on it in your file manager or type: file:///the/file/path/to/your/html in the address bar to view your sketch.

##Your First Sketch
In your editor in sketch.js, notice that there are two functions -- setup and draw.

Setup is called once at the beginning of the program while draw is called constantly in a loop.

In the draw function create a circle:
```
ellipse(50, 50, 80, 80);
```

This line of code means “draw an ellipse, with the center 50 pixels over from the left and 50 pixels down from the top, with a width and height of 80 pixels.”

Save your sketch and refresh your page view in your browser. If you’ve typed everything correctly, you’ll see a circle in the display window.

If you didn’t type it correctly, you might not see anything. If this happens, make sure that you’ve copied the example code exactly: the numbers should be contained within parentheses and have commas between each of them, and the line should end with a semicolon.

p5js makes it very simple to create animations that interact with the user. There are two variables: mouseX and mouseY that can be used in the sketch.

Make your circle follow the mouse by changing the first two parameters in the ellipse to mouseX and mouseY

Next, we’ll skip ahead to a sketch that’s a little more exciting. Delete the text from the last example, and try this:
```
	ellipse(mouseX,mouseY,80,80);
```

You'll notice that circles are created to follow the mouse. Even in the first example new circles were constantly being drawn over the old ones, but you couldn't tell because they were being created in the same spot. 

You'll also notice that they are only being created on a very small canvas. Let's change that!

In the setup method, set that canvas size
```
canvas = createCanvas(window.innerWidth, window.innerHeight);
```
This creates a canvas that is the width of the window and the height of the window.

Maybe we want to add some color to these circles. There are two variables to change: stroke and fill. Stroke is the outline of the shape and fill is the inside of a shape. Each shape created will have the properties of the last stroke or fill called.

Lets make the fill blue and the stroke orange!

```
	stroke(255,127,80);
	fill(40,70,100);
```
Remember, these lines need to be added before the ellipse if you want them to take effect!

p5js also makes it easy to react to mouse click and key press events with the booleans "mouseIsPressed" and "keyIsPressed"

Let's change the color of the circle to green if the mouse is clicked and purple if a key is pressed!

Under the original fill statement, put an if statement to change the colors if a mouse or key is pressed.

```
if (mouseIsPressed) {
    fill(153,51,255);
}
if (keyIsPressed) {
    fill(0,204,102);
}
```
You'll notice that the original ellipse will change based on the color because that is constantly being drawn as well. 

P5js makes it simple to create animations, respond to user interaction, insert music and insert images. For more examples go to the p5js website: https://p5js.org/examples/  

Parts of this tutorial were adapted from the book, Getting Started with p5.js, by Lauren McCarthy, Casey Reas, and Ben Fry, O’Reilly / Make 2015. Copyright © 2015 Lauren McCarthy, Casey Reas and Ben Fry. All rights reserved.

# paper.js Tutorial

##Introduction
This tutorial will give you the basics of what you need to start familiarizing yourself with paper.js.  First thing to do is to fork this repository!

##Installing paper.js
We have been using Node.js and Atom so far, so we will continue to use these.  We will use NPM to install Paper, but first, we need to install Cairo graphics.  In the folder in which you will be working, issue the following command:
```
brew install cairo pango
```

Note that on OSX, there is an issue with Cairo.  The following line should fix it:
```
PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig/ npm install paper
```
Next, install the paper library:
```
npm install paper
```

If you are still having trouble, there is additional information here: https://www.npmjs.com/package/paper

##Accessing paper.js
You will see that paper.js is located under the "paper" folder under "node_modules".  There are various other folders after that.  We need the path to paper.js.  This should already be in the index.html, but in case it isn't, search through the folders until you find the correct path to the paper.js.  Then, make sure that this is the correct path under the comment "load the Paper.js library".  If not, change the path to the correct one.

##Starting out
Starting out, we have an index.html file, which is really all we need to get a quick introduction to the paper.js library.  For more complex projects, it is better to have a separate .js file to store the PaperScript you use.  But for our purposes, the index works just fine.  Our index.html loads the paper.js library in the first script tag.  Notice that in the second script tag, the type is "text/paperscript".  PaperScript is the language for paper.js; it is very similar to JavaScript.  It is inside this script tag (the second one) that we will be experimenting with the powers of paper.js.

##First paper graphic!
First, start running a python server in the paper folder with this command:
```
python -m SimpleHTTPServer
```
Now, you can see your work.
Underneath the GRAPHICS section, add in the following code:
```
var myCircle = new Path.Circle(view.center, 20);
myCircle.fillColor = "white";
```
You should see a white circle in the center of the page.

##Second graphic: triangle
Circles are cool, but paper lets you connect lines to form whatever shapes you want with the Path().  Let's use it to make a triangle.  Delete the code you had for your first graphic and replace it with the following:
```
var c = view.center;
  var Radius = 50;

  var points = [
    new Point(c.x + Radius, c.y+Radius),
    new Point(c.x - Radius, c.y+Radius),
    new Point(c.x, c.y-Radius)
    ];

  var path = new Path(points);
      path.fillColor = "white";
```
You should see a white triangle in the center of your screen.

This definitely works for one triangle, but what if we want many triangles?  Specifying the path every single time for all 3 sides is going to become super annoying.  So what we can do is package the triangle-making into a function, and then call the function every single time we want to make a triangle!  Delete the code above and replace it with the following:
```
function createTriangle(triangleCenter){
     var c = triangleCenter;
     var Radius = 50;

   var points = [
     new Point(c.x + Radius, c.y+Radius),
     new Point(c.x - Radius, c.y+Radius),
     new Point(c.x, c.y-Radius)
     ];

   var path = new Path(points);
     path.fillColor = Color.random();
 }

 createTriangle(view.center);
```
 Now, you should have a triangle in the center of your screen that changes colors every time you reload your page.

##More triangles
Triangles are cool, but we should definitely have more than 1.  Delete the paperscript code starting at ```var path = new Path(points);``` until the end of the paperscript code.  Then, add in the following after the "points" section:
```
var path = new Path(points);
var triangleColor = Color.random();
path.fillColor = triangleColor;
}
```
But we're not actually creating any triangles in this code.  Yet.  Add the following after the code you just added:
```
var triDistance = 50;

for(var i = 0; i < view.size.width; i+= triDistance) {
    var Radius = triDistance/2;
    var triangleCenter = new Point(i,view.center.y);
    createTriangle(triangleCenter, Radius);
}
```
You should now see a row of multicolored triangles across your screen.  But we want ALL THE TRIANGLES.  So let's add in another for loop so that we get the triangles up and down the page as well.  Replace the code you just added with this:
```
var triDistance = 50;

for(var i = 0; i < view.size.width; i+= triDistance) {
  for(var j = 0; j < view.size.height; j+= triDistance) {

    var Radius = triDistance/2;
    var triangleCenter = new Point(i,j);
    createTriangle(triangleCenter, Radius);
  }
}
```
In the inner for loop of the code you just added, add the following two lines of code to the bottom , after the "createTriangle" function call:
```
var nextTriangleCenter = new Point(i+Radius,j);
createTriangle(nextTriangleCenter, -Radius);
```
Now, your entire screen should be filled with triangles!

##Make this more active
Ok, so we have our triangles.  But we want to make them do stuff.  How can we do that?  What we can do is have our triangles change color.  We'll do this by making an array of possible colors, and randomly assigning a color to a triangle.  Then, we'll update it with each frame.
Replace all the current code you have with this:

```
var colours = ['#363938', '#386567', '#5C4134', '#C4A778', '#CE9B59'];

function createTriangle(_triangleArray, _triangleCenter, _radius){
  var c = _triangleCenter;
  var Radius = _radius;

  var points = [
    new Point(c.x + Radius, c.y+Radius),
    new Point(c.x - Radius, c.y+Radius),
    new Point(c.x, c.y-Radius)
    ];

  var path = new Path(points);
  var triangleColor = colours[Math.floor(Math.random()*colours.length)];
  path.fillColor = triangleColor;

  _triangleArray.push(path);
}
var triArray = [];
var triDistance = 50;

for(var i = 0; i < view.size.width; i+= triDistance) {
    for(var j = 0; j < view.size.height; j+= triDistance) {
      var Radius = triDistance/2;
      var triangleCenter = new Point(i,j);
      createTriangle(triArray, triangleCenter, Radius);

    var nextTriangleCenter = new Point(i+Radius,j);
      createTriangle(triArray, nextTriangleCenter, -Radius);
    }
  }
```
  Remember that paper.js comes equipped with a way to animate things very easily--onFrame.  Add in the following code below everything you've just added:

  ```
  function onFrame(event) {
   for(var i = 0; i < triArray.length; i++) {
        triArray[i].fillColor.hue +=5;
   }
 }
 ```

You should get triangles that change colors.

For a more extreme experience, try this onFrame instead:

```
function onFrame(event) {
   for(var i = 0; i < triArray.length; i++) {
        var triangleColor = Color.random();
        triArray[i].fillColor = triangleColor;
    }
}
```

Another onFrame that changes the size of the triangles:

```
function onFrame(event) {
   for(var i = 0; i < triArray.length; i++) {
      var sinus = Math.sin(event.time * 2 + (i*400));
      triArray[i].scaling = sinus;
    }
}
```

The triangles shrink and fade with the above code.  Play with the onFrame and make your triangles do tons of cool things!  Check out some ideas here: http://paperjs.org/tutorials/animation/creating-animations/

Tutorial adapted from: http://pebblecode.com/blog/maths-and-motion/ and http://paperjs.org/tutorials/.
