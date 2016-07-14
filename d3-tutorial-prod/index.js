var circle = d3.selectAll("body");

circle.style("fill", "red");
circle.attr("r", 30);

circle.attr("cx", function() { return Math.random() * 720; });
