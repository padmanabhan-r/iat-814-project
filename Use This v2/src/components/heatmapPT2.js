import React, { Component } from 'react';
import * as d3 from 'd3';
import data from '../data/heatmapdata2.json';

class HeatmapChart extends Component {

  
  constructor(props) {
    super(props)
    this.myRef = React.createRef();
    }

  componentDidMount() {
      this.drawChart();
  }

  componentDidUpdate() {
    this.drawChart()
  }

  drawChart() {




    var dataset;
 // var days =  ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  var days = ["1N","1E","1S","SCU","BP","1W"];
 // var days =["Unit"];
	var times = d3.range(24);
  
  var margin = {top:40, right:50, bottom:70, left:50};
  
  // calculate width and height based on window size
  var w = Math.max(Math.min(window.innerWidth, 1000), 500) - margin.left - margin.right - 20,
  gridSize = Math.floor(w / times.length),
	h = gridSize * (days.length+2);

  //reset the overall font size
	// var newFontSize = w * 62.5 / 900;
	// d3.select(this.myRef.current).style("font-size", newFontSize + "%");
  
  // svg container


  // load data
  var dataset = data;
  dataset.forEach(function(d) {
        d.day = +d.day;
        d.hour = +d.hour;
        d.value = +d.value;
        console.log(d.day);
    });

  var aRef = d3.select(this.myRef.current)
  	.append("svg")
  	.attr("width", w + margin.top + margin.bottom)
  	.attr("height", h + margin.left + margin.right)
  	.append("g")
  	.attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
  // linear colour scale
  var colours = d3.scaleLinear()
  	.domain(d3.range(1,11,1))
  	.range(["#bdbdbd","#756bb1"]);
  
  var dayLabels = aRef.selectAll(".dayLabel")
  	.data(days)
  	.enter()
  	.append("text")
  	.text(function(d) { return d; })
  	.attr("x", 0)
  	.attr("y", function(d, i) { return i * gridSize; })
  	.style("text-anchor", "end")
		.attr("transform", "translate(-8," + gridSize / 1.5 + ")")

  var timeLabels = aRef.selectAll(".timeLabel")
    .data(times)
    .enter()
    .append("text")
    .text(function(d) { return d; })
    .attr("x", function(d, i) { return i * gridSize; })
    .attr("y", 0)
    .style("text-anchor", "middle")
    .attr("transform", "translate(" + gridSize / 2 + ", -6)");

  
     // group data by location
    var nest = d3.nest()
      .key(function(d) { return d.location; })
      .entries(dataset);
      console.log(nest);

    // array of locations in the data
    var locations = nest.map(function(d) { return d.key; });
    var currentLocationIndex = 0;
    console.log(locations);

    // create location dropdown menu
     var locationMenu = d3.select("#locationDropdown");
     locationMenu
   
      .append("select")
      .attr("id", "locationMenu")
      .selectAll("option")
        .data(days)
        .enter()
        .append("option")
        .attr("value", function(d, i) { return i; })
        .text(function(d) { return d; });

    // function to create the initial heatmap
    var drawHeatmap = function(location) {

    //  // filter the data to return object of location of interest
    //   var selectLocation = nest.find(function(d) {
    //     return d.key == location;
        var selectLocation= nest.find(function(d) { 
        return d.key == location;
           
            });


    //  var selectLocation= nest.map(function(d) { return d.values;})
      console.log(selectLocation);

    //   var allLocations = d3.nest().key(function(d) { return d.location; })
    //   .entries(dataset);

    //  console.log(allLocations);

      var heatmap = aRef.selectAll(".hour")
        .data(function(d,i){return nest.values[i];})
        .enter()
        .append("rect")
        .attr("x", function(d) { return (d.hour-1) * gridSize; })
        .attr("y", function(d) { return (d.day-1) * gridSize; })
        .attr("class", "hour bordered")
        .attr("width", gridSize)
        .attr("height", gridSize)
        .style("stroke", "white")
        .style("stroke-opacity", 0.6)
        .style("fill", function(d) { return colours(d.value); })
      }
    drawHeatmap(locations[currentLocationIndex]);

    var updateHeatmap = function(location) {
      console.log("currentLocationIndex: " + currentLocationIndex)
      // filter data to return object of location of interest
    //   var selectLocation = nest.find(function(d) {
    //     return d.key == location;
    var selectLocation= nest.map(function(d) { 
        return d.key = d.location;
   

      });

      // update the data and redraw heatmap
      var heatmap = aRef.selectAll(".hour")
        .data(selectLocation.values)
        .transition()
          .duration(500)
          .style("fill", function(d) { return colours(d.value); })
    }

    // run update function when dropdown selection changes
    locationMenu.on("change", function() {
      // find which location was selected from the dropdown
      var selectedLocation = d3.select(this)
        .select("select")
        .property("value");
      currentLocationIndex = +selectedLocation;
      // run update function with selected location
      updateHeatmap(locations[currentLocationIndex]);
    });    

    d3.selectAll(".nav").on("click", function() {
      if(d3.select(this).classed("left")) {
        if(currentLocationIndex == 0) {
          currentLocationIndex = locations.length-1;
        } else {
          currentLocationIndex--;  
        }
      } else if(d3.select(this).classed("right")) {
        if(currentLocationIndex == locations.length-1) {
          currentLocationIndex = 0;
        } else {
          currentLocationIndex++;  
        }
      }
      d3.select("#locationMenu").property("value", currentLocationIndex)
      updateHeatmap(locations[currentLocationIndex]);
    })
  


}


render() {

 
    return (
        
        <div>
        <meta charSet="utf-8" />
        <style dangerouslySetInnerHTML={{__html: "\n\t\thtml { \n      font-size: 62.5%; \n    } \n    \n    body {\n      margin-top: 30px;\n      font-size: 1.4rem;\n      font-family: 'Source Sans Pro', sans-serif;\n      font-weight: 400;\n      fill: #696969;\n      text-align: center;\n    }\n    \n    .timeLabel, .dayLabel {\n\t\t    font-size: 1.6rem;\n\t\t    fill: #AAAAAA;\n\t\t    font-weight: 300;\n\t\t}\n\n    #nav-container {\n      display: flex;\n      justify-content: center;\n      cursor: pointer;\n    }\n\n    #nav-container .left {\n      margin-right: 20px;\n    }\n\n    #nav-container .right {\n      margin-left: 20px;\n    }\n  " }} />
        <div id="nav-container">
          {/* <div className="nav left">left</div> */}
          <div id="locationDropdown" />
          <div className="nav right">Units</div>
        </div>
        
        <div ref={this.myRef} ></div>
      
      </div>


   

 
    )
  }

 };

 export default HeatmapChart;