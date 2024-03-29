// var margin = {top: 100, right: 100, bottom: 100, left: 100},
//     width = 960 - margin.left - margin.right,
//     height = 500 - margin.top - margin.bottom;

var margin = {top: 60, right: 60, bottom: 60, left: 60},
    width = 700 - margin.left - margin.right,
    height = 360 - margin.top - margin.bottom;

var x = d3.scale.linear()
    .domain([0, 5.9])
    .range([0, width]);

var y = d3.scale.linear()
    .domain([-1, 1])
    .range([height, 0]);

var z = d3.scale.linear()
    .domain([0, 5.9])
    .range([0, 360]);

var points = d3.range(0, 6, .1).map(function(t) {
  return {value: t, 0: x(t), 1: y(Math.sin(t))};
});

var svg = d3.select("#demo").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

var path = svg.selectAll("path")
    .data(quad(points))
  .enter().append("path")
    .style("fill", function(d) { return d3.hsl(z(d[1].value), 1, .5); })
    .style("stroke", "#000");

var t0 = Date.now();
d3.timer(function() {
  var dt = (Date.now() - t0) * .001;
  points.forEach(function(d) { d[1] = y(d.scale = Math.sin(d.value + dt)); });
  path.attr("d", function(d) { return lineJoin(d[0], d[1], d[2], d[3], 80 * d[1].scale * d[1].scale + 10); });
});

// Compute quads of adjacent points [p0, p1, p2, p3].
function quad(points) {
  return d3.range(points.length - 1).map(function(i) {
    return [points[i - 1], points[i], points[i + 1], points[i + 2]];
  });
}

// Compute stroke outline for segment p12.
function lineJoin(p0, p1, p2, p3, width) {
  var u12 = perp(p1, p2),
      r = width / 2,
      a = [p1[0] + u12[0] * r, p1[1] + u12[1] * r],
      b = [p2[0] + u12[0] * r, p2[1] + u12[1] * r],
      c = [p2[0] - u12[0] * r, p2[1] - u12[1] * r],
      d = [p1[0] - u12[0] * r, p1[1] - u12[1] * r];

  if (p0) { // clip ad and dc using average of u01 and u12
    var u01 = perp(p0, p1), e = [p1[0] + u01[0] + u12[0], p1[1] + u01[1] + u12[1]];
    a = lineIntersect(p1, e, a, b);
    d = lineIntersect(p1, e, d, c);
  }

  if (p3) { // clip ab and dc using average of u12 and u23
    var u23 = perp(p2, p3), e = [p2[0] + u23[0] + u12[0], p2[1] + u23[1] + u12[1]];
    b = lineIntersect(p2, e, a, b);
    c = lineIntersect(p2, e, d, c);
  }

  return "M" + a + "L" + b + " " + c + " " + d + "Z";
}

// Compute intersection of two infinite lines ab and cd.
function lineIntersect(a, b, c, d) {
  var x1 = c[0], x3 = a[0], x21 = d[0] - x1, x43 = b[0] - x3,
      y1 = c[1], y3 = a[1], y21 = d[1] - y1, y43 = b[1] - y3,
      ua = (x43 * (y1 - y3) - y43 * (x1 - x3)) / (y43 * x21 - x43 * y21);
  return [x1 + ua * x21, y1 + ua * y21];
}

// Compute unit vector perpendicular to p01.
function perp(p0, p1) {
  var u01x = p0[1] - p1[1], u01y = p1[0] - p0[0],
      u01d = Math.sqrt(u01x * u01x + u01y * u01y);
  return [u01x / u01d, u01y / u01d];
}
