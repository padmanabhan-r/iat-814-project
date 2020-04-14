//dancingHistograms.js#
var chart = function module(){
    // d3 version of Alan Dix's original dancing histograms java applet at
    // http://www.meandeviation.com/dancing-histograms/
    
    var transitionTime = 750;

    //Width and height
    var outerWidth = 960;
    var outerHeight = 500;
    var margin = {top: 50, right: 40, bottom: 20, left: 50};
    var padding = {top: 60, right: 60, bottom: 60, left: 60};
    var innerWidth = outerWidth - margin.left - margin.right;
    var innerHeight = outerHeight - margin.top - margin.bottom;
    var w = innerWidth - padding.left - padding.right;
    var h = innerHeight - padding.top - padding.bottom;

    var legendHeight = 20;
    var legendWidth = 175;
    var legendTopOffset = 30;

    var polyOpacity = 1;
    var legendOpacity = 0;
    //outline around groups and legend box -- set to 1 to match original
    var groupStrokeOpacity = 0;

    // hard-coded colors to try to match original
    var colors = function(i){
        return ["limegreen", "yellow", "orange", "crimson","blue"][i];
    };

    var dataByGroup = null;
    var nest = d3.nest()
    .key(function(d) {
        return d.group; });



    //Set up scales

    var format = d3.time.format("%d-%b");
    var xScale = d3.scale.ordinal()
    .rangeRoundBands([0, w], 0.05);

    var xAxis = d3.svg.axis()
        .scale(xScale)
        .orient("bottom")
        .tickFormat(d3.time.format("%d"))
        .ticks(d3.time.weeks);
      

    var yScale = d3.scale.linear()
        .range([h/2,0]);///

    var yAxisScale = d3.scale.linear()
            .range([h,0]);
            
    var yAxis = d3.svg.axis().scale(yAxisScale).orient("left");
            
    var heightScale = d3.scale.linear()
        .range([0,h/2]);///

    var svg = d3.select("body")
            .append("svg");
            
    var g = svg
        .append("g")
        .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    var groups = null;
    var numGroups = null;
    var rects = null;
    var legends = null;
    var line = null;

    var offset = 0; // determines which group is at baseline
    // create a partially initialized array of offsets for each bar stack
    var offsets = [0];

    var div = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("position", "absolute")
        .style("z-index", 1)
        .style("opacity", 1e-6);
            
    function mouseover() {
        div.transition()
        .duration(500)
        .style("opacity", 1);
    }
        
    function mousemove() {
        div.transition()
            .duration(500)
            .style("opacity", 1);
        var datum =d3.select(this).datum();
        div
            .html(datum.DATE + "<br/>" + datum.UNIT + "<br/>" + datum.COUNT )
            .style("left", (d3.event.pageX - 2) + "px")
            .style("top", (d3.event.pageY - 64) + "px");
    }
        
    function mouseout() {
        disappearTooltip();
    }

    function disappearTooltip(){
        div.transition()
        .duration(500)
        .style("opacity", 1e-6)
    }
            
    d3.json("csvjson_unitdbar.json", function(error, data) {
        data.forEach(function(d) {
            d.group = d.UNIT;
            d.x =format.parse(d.DATE);
            d.y = +d.COUNT;
        });

        dataByGroup = nest.entries(data);
        console.log(dataByGroup);

        numGroups = dataByGroup.length;
        var stackz = d3.layout.stack();
        /////////////////////////////////////////////////////////////////////

        var stack = d3.layout.stack()
        .values(function(d) { return d.values; })
        .x(function(d) { return d.x; })
        .y(function(d) { return d.y; })
        .out(function(d, y0) { d.y0 = y0; });

     stack(dataByGroup);

    xScale
        .domain(dataByGroup[0].values.map(function(d) { return d.x; }));
    
    var yMax = d3.max(dataByGroup, function(d) {
        return d3.max(d.values, function(d) {
            return d.y0 + d.y;
        });
    });
    yScale
        .domain([0,yMax]);
    
    yAxisScale
         .domain([-yMax,yMax]);

    heightScale
        .domain([0,
            d3.max(dataByGroup, function(d) {
                return d3.max(d.values, function(d) {
                    return d.y0 + d.y;
                });
            })
        ]);

    // Add a group for each row of data
    groups = g.selectAll(".groups")
        .data(dataByGroup)
        .enter()
        .append("g")
        .attr("class", function(d,i){ return i; })
        .style("fill", function(d, i) {
            return colors(i);
        })
        .style("stroke", "black")
        .style("stroke-opacity", groupStrokeOpacity)
        .style("opacity", function(d,i){
            return polyOpacity;
        });

    groups
        .on("click", function(d,i){
            var thisclass = +d3.select(this).attr("class");
            // ignore clicks on groups already at baseline
            if(offset !== thisclass){
                offset = thisclass;
                my.updateChart(false, offset);
                disappearTooltip();
            }
        });
    
    g
        .append("g")
        .attr("class", "y axis")
        .attr("transform", "translate(" + 4 + ", 0)")
        .call(yAxis);
    
    g
        .append("g")
        .attr("class", "xAxis")
        .attr("transform", "translate(0, " + h/2 + ")")///
        .call(xAxis);

    // Add a rect for each data value
    rects = groups.selectAll("rect")
        .data(function(d,i) {
            var offsetsArray = d.values.map(function(d){
                return d.y0;});
            offsets[i] = offsetsArray.map(function(num){
                return heightScale(num);});
            return d.values; })
        .enter()
        .append("rect")
        .on("mouseover", mouseover)
        .on("mousemove", mousemove)
        .on("mouseout", mouseout);
    
    legends = groups
    .append("g");
    
    // draw a big transparent background rectangle for a bigger cursor target
    legends
        .append("rect")
        .attr("x",0)
        .attr("y",-10)
        .attr("height", legendHeight)
        .attr("width", 150)
        .attr("fill-opacity", legendOpacity)
        .style("stroke-opacity", legendOpacity);
    
    legends
        .append("rect")
        .attr("x",15)
        .attr("y",-10)
        .attr("height", 20)
        .attr("width",  20)
        .attr("fill", function(d,i){return colors(i);})
        .attr("fill-opacity", polyOpacity);
    
    legends.append("g:text")
        .attr("x", 40)
        .attr("dy", ".31em")
        .attr("fill", "black")
        .text(function(d,i,j){
            return d.key;});
    
    // baseline:
    line = g.append("line")
    .style("stroke","black")
    .style("stroke-width",2);
    
    my.updateChart(true, 0); // don't draw the chart until all the data has been processed
});

function my(){}

var lineOffset = 4;
my.updateChart = function(init, inputOffset){
    if(init){
        transitionMS = 0;
    } else {
        transitionMS = transitionTime;
    }
    
    offset = inputOffset;
    var legendXOffset = w;
    
    svg
        .attr("width", outerWidth)
        .attr("height", outerHeight);
    
    line
        .attr("x1", lineOffset)
        .attr("y1", h/2)
        .attr("x2", w - lineOffset)
        .attr("y2", h/2);

    legends
        .attr("transform", function (d, i) {
            return "translate(" + legendXOffset + "," +
                ((numGroups - i) * legendTopOffset) + ")";
        });

    rects
        .transition().duration(transitionMS)
        .attr("x", function(d, i) {
            return xScale(d.x);
        })
        .attr("y", function(d,i,j) {
            return yScale(d.y0 + d.y) + offsets[offset][i];
        })
        .attr("height", function(d) {
            return heightScale(d.y0 + d.y) - heightScale(d.y0);
        })
        .attr("width", function(d,i){return xScale.rangeBand();});

    // move the x axis labels along with the bars
    svg
        .select(".xAxis")
        .selectAll("text")
        .transition().duration(transitionMS)
        .attr("transform", "translate(0," + d3.max(offsets[offset]) + ")");
    
    // chart title
    svg.append("text")
        .attr("x", (innerWidth / 2))
        .attr("y", 0 + (margin.top / 2))
        .attr("text-anchor", "middle")
        .style("font-size", "20px")
        .text("Admissions by Unit");
}
return my;
}