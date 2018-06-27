var svg = d3.select('#balls').append("svg");

svg.attr("width", 500).attr("height", 200);

var dataset = [5, 10, 15, 20, 25]; //dataset seria a tabela 

svg.selectAll("rec")  // record , pega os dados do array
    .data(dataset)
    .enter()
    .append("circle")
    .attr("r", function (d) { return d; })
    .attr("cx", function (d, i) { return (i * 50) + 25; })
    .attr("cy", 50)
    .attr("fill", "yellow")
    .attr("stroke", "red")
    .attr("stroke-width", "5");

var svg = d3.select('#balls2').append("svg");

svg.attr("width", 400).attr("height", 400);

var dataset = [5, 10, 15, 20, 32, 37];

svg.selectAll("rec")
    .data(dataset)
    .enter()
    .append("circle")
    .attr("r", function (d) { return d; })
    .attr("cx", function (d, i) { return (i * 50) + 25; })
    .attr("cy", 50)
    .attr("fill", "blue")
    .attr("stroke", "yellow")
    .attr("stroke-width", "5");