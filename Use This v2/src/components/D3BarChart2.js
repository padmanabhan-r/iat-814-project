
import React, { Component } from 'react';
import * as d3 from 'd3';
import data from '../data/csvjson_admit.js';

class D3BarChart2 extends Component {

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

    var margin = { top: 60, right: 20, bottom: 160, left: 60 },
      width = 600 - margin.left - margin.right,
      height = 500 - margin.top - margin.bottom;

      var parseTime = d3.timeParse("%Y-%m-%d");
var formatDate = d3.timeFormat("%b-%d");
var bisectDate = d3.bisector(function (d) { return d.date; }).left;

const colors = d3.scaleOrdinal(["#fec44f","#402D54","#c994c7","#756bb1","#D18975","#8FD175"]);
     
   console.log(data);
        
      var ndata = d3.nest()                    //Aggregate data according to Admit Date
        .key(function (d) { return(d.AdmitUnit); })
        //.sortKeys(d3.ascending)
        .key(function (d) { return d.PatientID; })
        .rollup(function (leaves) { return leaves.length; })
        .entries(data);

      ndata.forEach(function (d) {
        //d.date = formatDate(parseTime(d.key));
        d.date = d.key;  
        d.value = +d.values.length;
        console.log(d.date, d.value);
      });
      console.log(ndata);
    

      const aRef = d3.select(this.myRef.current).append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
        .append("g")
        .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")")
        .style("background-color", "grey");

      var x = d3.scaleBand()
        .range([margin.left, width - margin.right])
        .padding(0.1)

      var y = d3.scaleLinear().range([height, 0]);

      var xAxis = g => g
        //.attr("transform", `translate(0,${height - margin.bottom})`)
        .call(d3.axisBottom(x).tickSizeOuter(0));


      var yAxis = g => g
        .attr("transform", `translate(${margin.left},0)`)
        .call(d3.axisLeft(y))
        .call(g => g.select(".domain").remove());

      var parseTime = d3.timeParse("%Y-%m-%d");
      var formatDate = d3.timeFormat("%b-%d");
      var bisectDate = d3.bisector(function (d) { return d.date; }).left;


      x.domain(ndata.map(function (d) { return d.date; }));
      y.domain([0, d3.max(ndata, function (d) { return d.value;})+5]);

      console.log(x.domain);
      console.log(y.domain);

    aRef.append("g")
        .attr("class", "x axis")
        .attr("transform", "translate(0," + height + ")")
        .call(xAxis)
        .selectAll("text")
        .style("text-anchor", "end")
        .attr("dx", "-.8em")
        .attr("dy", "-.55em")
        .attr("transform", "translate(20, 20)");

      aRef.append("g")
        .attr("class", "y axis")
        .call(yAxis)
        .append("text")
        .attr("transform", "rotate(-90)")
        .attr("x", 2)
        .attr("y", 10)
        .attr("dy", ".71em")
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .text("Admissions");

      // Add a Label
      // y-axis label
      aRef.append("text")
        .attr("class", "y label")
        .attr("text-anchor", "end")
        .text("Total Admissions")
        .attr("transform", "translate(20, 20) rotate(-90)");

      //Add Chart title
      aRef.append("text")
        .attr("class", "chart title")
        .attr("text-anchor", "middle")
        .attr("font-weight", "bold")
        .attr("font-size", "16px")
        .attr("font-color", "darkblue")
        .text("Total Patient Admissions over the months")
        .attr("transform", "translate(220, -20) ");

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

      var barAni = d3.select("rect")
        .append("div")
        .attr("fill","orange");  

      aRef.selectAll("rect")
        .data(ndata)
        .enter().append("rect")
        .attr("classed","current")
         .attr("fill", function (d) {
          return colors(d.date);;
        })
        .attr("x", function (d) { return x(d.date); })
        .attr("width", x.bandwidth())
        .attr("y", function (d) { return y(d.value); })
        .attr("height", 0)
        .attr("height", function (d) { return height - y(0); })
        .on("mouseover", d => {
          tooltip.style("visibility", "visible").style("color", "orange").style("display", "inline-block").text(d.value);
         
          
        })
        
        
        .on("mousemove", d => hover.style("fill","orange"))
        .on("mouseout", d =>{ 
          tooltip.style("visibility", "hidden");
         // d3.select(this.rect).attr("fill", "green") 
        })
        
       .on("mousemove", d => tooltip.style("top", (d3.event.pageY - 10) + "px").style("left", (d3.event.pageX + 10) + "px").text(d.value));
     


        aRef.selectAll("rect")
        .transition()
        .duration(1000)
        .attr("y", function(d) { return y(d.value); })
        .attr("height", function(d) { return height - y(d.value); })
        .delay(function(d,i){console.log(i) ; return(i*100)})
       
      
   
  }


  render() {
    return (
      <div ref={this.myRef} ></div>
    )
  }
};



export default D3BarChart2;

