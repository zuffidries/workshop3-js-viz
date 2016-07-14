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




# P5.js Tutuorial

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
