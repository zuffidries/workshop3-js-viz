# D3 Tutorial

##Introduction
Fork this repo...
To see what we're starting with run the index.html page on your local server. Reminder on running pages locally:
> cd workshop-js-viz
> python -m SimpleHTTPServer 9000

As you can see the page is very simple. It just shows three circles hardcoded into html and css. Let's see what d3 can do.

##Setting up
In your index.html file link the d3/d3.js file right above the index.js file!
<script type="text/javascript" src="d3/d3.js"></script>

##Selecting Items
One of d3's ability that we mentioned is its more compact way to selec DOM elements. Select your circles with ...

##Binding Data
Now for the real, powerful feature of d3: let's attach some data to our circles!

circle.data([#, #, #]);

Make the data mean something, so they're not just arbitrary numbers

For example you can make the data represent the radii of the circles i.e.:

circle.attr("r", function(d) { return Math.sqrt(d); });

PLay around with the data and make the circles different sizes. Create a row of circles in ascending size and vice versa!




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
In your editor in sketch.js, type the following:

**function setup() {**

**}**

**function draw() {**
  **ellipse(50, 50, 80, 80);**
**}**


This line of code means “draw an ellipse, with the center 50 pixels over from the left and 50 pixels down from the top, with a width and height of 80 pixels.”

Save your sketch and refresh your page view in your browser. If you’ve typed everything correctly, you’ll see this appear in the display window:

If you didn’t type it correctly, you might not see anything. If this happens, make sure that you’ve copied the example code exactly: the numbers should be contained within parentheses and have commas between each of them, and the line should end with a semicolon.

Next, we’ll skip ahead to a sketch that’s a little more exciting. Delete the text from the last example, and try this:

**function setup() {**
  **createCanvas(window.innderWidth, window.innerHeight);**
**}**

**function draw() {**
  **if (mouseIsPressed) {**
    **fill(0);**
  **} else {**
    **fill(255);**
  **}**
  **ellipse(mouseX, mouseY, 80, 80);**
**}**


This program starts drawing white circles at the position of the mouse. When a mouse button is pressed, the circle color changes to black. We’ll explain more about the elements of this program in detail later. For now, run the code, move the mouse, and click to experience it.

Parts of this tutorial were adapted from the book, Getting Started with p5.js, by Lauren McCarthy, Casey Reas, and Ben Fry, O’Reilly / Make 2015. Copyright © 2015 Lauren McCarthy, Casey Reas and Ben Fry. All rights reserved.

# paper.js Tutorial

##Introduction
This tutorial will give you the basics of what you need to start familiarizing yourself with paper.js.  First thing to do is to fork this repository!

##Installing paper.js
We have been using Node.js and Atom so far, so we will continue to use these.  We will use NPM to install Paper, but first, we need to install Cairo graphics.  In the folder in which you will be working, issue the following command:

brew install cairo pango

Note that on OSX, there is an issue with Cairo.  The following line should fix it:

PKG_CONFIG_PATH=/opt/X11/lib/pkgconfig/ npm install paper

Next, install the paper library:

npm install paper

##Accessing paper.js
You will see that paper.js is located under the "paper" folder under "node_modules".  There are various other folders after that.  We need the path to paper.js.  This should already be in the index.html, but in case it isn't, search through the folders until you find the correct path to the paper.js.  Then, add this to the line under "load the Paper.js library".

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
Triangles are cool, but we should definitely have more than 1.  Delete the paperscript code starting at **var path = new Path(points);** until the end of the paperscript code.  Then, add in the following after the "points" section:
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
