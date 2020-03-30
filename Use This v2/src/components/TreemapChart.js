
import React, { Component } from 'react';
import * as d3 from 'd3';
import data from '../data/hospital_tree.json';
import { extent } from "d3";

class TreemapChart extends Component {

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

// // set the dimensions and margins of the graph
// var margin = {top: 10, right: 30, bottom: 30, left: 60},
//     width = 600 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;

//     var parseTime = d3.timeParse("%Y-%m-%d");
//     var bisectDate = d3.bisector(function (d) { return d.date; }).left;


var margin = {top: 40, right:80, bottom: 20, left: 20},
  width =600 - margin.left - margin.right,
  height = 500 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select(this.myRef.current)
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

  // Give the data to this cluster layout:
  console.log(data);
  var root = d3.hierarchy(data).count((d) => d.value) // Here the size of each leave is given in the 'value' field in input data


// // Read data
// d3.csv('data\treemapdata2.tm3', function(data) {
//  console.log(data);
//   // stratify the data: reformatting for d3.js
//   var root = d3.stratify()
//     .id(function(d) { return d.name; })   // Name of the entity (column name is name in csv)
//     .parentId(function(d) { return d.Parent; })   // Name of the parent (column name is parent in csv)
//     (data);
//     root.sum(function(d) { return +d.value })   // Compute the numeric value for each entity

// data.forEach(function(d){
// console.log(d.name,d.Parent,d.value);
// });

  // Then d3.treemap computes the position of each element of the hierarchy
  d3.treemap()
    .size([width, height])
    .paddingTop(20)
    //paddingRight(7)
    .paddingInner(2)      // Padding between each rectangle
   // .paddingOuter(6)
   // .padding(20)
    (root)

  // prepare a color scale
  var color = d3.scaleOrdinal()
    .domain(["General", "Emergency", "SpecialCareUnit","Surgical","Emergency","Maternity","Intensive Care Unit"])
    .range([ "#402D54", "#D18975", "#8FD175","#fc9272",'#756bb1','#fec44f'])

  // And a opacity scale
  var opacity = d3.scaleLinear()
    .domain([10, 30])
    .range([.5,1])


  // Add tooltip  
  var tooltip = d3.select("body")
  .append("div")
  .style("position", "absolute")
  .style("font-family", "'Open Sans', sans-serif")
  .style("font-size", "16px")
  .style("z-index", "10")
 // .style("visibility", "hidden") ;

 var hover= d3.select("rect")
            .append("div")
            .attr("class", "hover");  

  // use this information to add rectangles:
  svg
    .selectAll("rect")
    .data(root.leaves())
     .enter()
    .append("rect")
      .attr('x', function (d) { return d.x0; })
      .attr('y', function (d) { return d.y0; })
      .attr('width', function (d) { return d.x1 - d.x0; })
      .attr('height', function (d) { return d.y1 - d.y0; })
      .style("stroke", "black")
      .style("fill", function(d){ return color(d.parent.data.name)} )
      .style("opacity", function(d){ return opacity(d.data.value)})
      .on("mouseover", d => {
        tooltip.style("visibility", "visible").style("color", "yellow").style("display", "inline-block").text("BedNum");
       
        
      })
      
      
      .on("mousemove", d => hover.style("fill","orange"))
      .on("mouseout", d =>{ 
        tooltip.style("visibility", "hidden");
       // d3.select(this.rect).attr("fill", "green") 
      })
      
     .on("mousemove", d => tooltip.style("top", (d3.event.pageY - 20) + "px").style("left", (d3.event.pageX + 10) + "px").text("BedNum"));
   


  // and to add the text labels
  svg
    .selectAll("text")
    .data(root.leaves())
    .enter()
    .append("text")
      .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
      .attr("y", function(d){ return d.y0+20})    // +20 to adjust position (lower)
      .attr("text",function(d){ return d.data.name })
      .attr("font-size", "10px")
      .attr("fill", "white")

  // and to add the inside labels
  svg
    .selectAll("titles")
    .data(root.descendants().filter(function(d){return d.depth==2}))
    .enter()
    .append("text")
      .attr("x", function(d){ return d.x0+5})    // +10 to adjust position (more right)
      .attr("y", function(d){ return d.y0+30})    // +20 to adjust position (lower)
      .text(function(d){ return d.data.name })
      .attr("font-size", "10px")
      .attr("fill", "white")

  // Add title for the 3 groups
  svg
    .selectAll("titles")
    .data(root.descendants().filter(function(d){return d.depth==1}))
    .enter()
    .append("text")
      .attr("x", function(d){ return d.x0})
      .attr("y", function(d){ return d.y0+10})
      .text(function(d){ return d.data.name + "\n, Bed capacity "+ d.data.value })
      .attr("font-size", "12px")
      .attr("fill", "black")

  // Add title for the 3 groups
  svg
    .append("text")
      .attr("x", 0)
      .attr("y", 5)    // +20 to adjust position (lower)
      .text("Six Hospital Units and 48 beds")
      .attr("font-size", "19px")
      .attr("fill",  "black" )

      // svg.selectAll("rect")
      //   .transition()
      //   .duration(1000)
      //   .on("hover", d => {
      //     tooltip.style("visibility", "visible").style("color", "orange").style("display", "inline-block").text(d.value);
         
          
      //   })

      //   var mouseover = function(d) {
      //     tooltip.style("opacity", 1)
      //   }

//})

}


render() {
  return (
    <div ref={this.myRef} ></div>
  )
}
};



export default TreemapChart;

