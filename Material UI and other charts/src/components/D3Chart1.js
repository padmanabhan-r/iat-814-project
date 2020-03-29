import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import * as d3 from 'd3';
import data from '../data/csvjson_patients2';

class D3Chart1 extends Component {

    constructor(props) {
        super(props)
        this.myRef = React.createRef();
        this.state = {
            chartData: data
        }
    }

    componentDidMount() {
       // var svg= d3.select(this.myRef.current);      
        this.drawChart();
    }

    drawChart(){
        
        // const width;
        // const height;  

        var margin = {top: 20, right: 20, bottom: 160, left: 60},
        width = 600 - margin.left - margin.right,
        height = 500 - margin.top - margin.bottom;

        

          var parseTime = d3.timeParse("%Y-%m-%d");
          var bisectDate = d3.bisector(function (d) { return d.date; }).left;

          var x = d3.scaleTime().range([0, width]);
          var y = d3.scaleLinear().range([height, 0]);

          var line = d3.line()
            .x(function (d) { return x(d.date); })
            .y(function (d) { return y(d.value); });
         
        const g = d3.select(this.myRef.current)
                     .append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

        d3.json("csvjson_patients2.json", function (data) {
        console.log(data);

        var data = d3.nest()                    //Aggregate data according to Admit Date
          .key(function (d) { return d.AdmitDate; })
          .sortKeys(d3.ascending)
          .key(function (d) { return d.PatientID; })
          .rollup(function (leaves) { return leaves.length; })
          .entries(data);

            data.forEach(function (d) {
            d.date = parseTime(d.key);
            d.value = +d.values.length;
            console.log(d.date, d.value);
          });

             

      // Read data from JSON file
          x.domain(d3.extent(data, function (d) { return (d.date); }));
          //x.domain([data[0].date, data[data.length - 1].date]);
          y.domain([0, d3.max(data, function (d) { return d.value; }) * 1]);

          console.log(x.domain());
          console.log(y.domain());
          g.append("g")
            .attr("class", "axis axis--x")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(d3.timeDay.every(1)).tickFormat(d3.timeFormat('%b %d')));

          g.append("g")
            .attr("class", "axis axis--y")
            .call(d3.axisLeft(y))
            .append("text")
            .attr("class", "axis-title")
            .attr("transform", "rotate(-90)")
            .attr("y", 0 - margin.left)
            .attr("dy", "2em")
            .style("text-anchor", "middle")
            .attr("fill", "#5D6971y")
            .text("No.Patients");

          //Add Chart title
          g.append("text")
            .attr("class", "chart title")
            .attr("text-anchor", "middle")
            .attr("font-weight", "bold")
            .attr("font-size", "20px")
            .attr("font-color", "darkblue")
            .text("Total Patient Admissions per day")
            .attr("transform", "translate(350,0) ");

          g.append("path")
            .datum(data)
            .attr("class", "line")
            .attr("d", line);

          var focus = g.append("g")
            .attr("class", "focus")
            .style("display", "none");

          focus.append("line")
            .attr("class", "x-hover-line hover-line")
            .attr("y1", 0)
            .attr("y2", height);

          focus.append("line")
            .attr("class", "y-hover-line hover-line")
            .attr("x1", width)
            .attr("x2", width);

          focus.append("circle")
            .attr("r", 7.5);

          focus.append("text")
            .attr("x", 15)
            .attr("dy", ".31em");

          this.myRef.current.append("rect")
            .attr("transform", "translate(" + margin.left + "," + (margin.top - 10) + ")")
            .attr("class", "overlay")
            .attr("width", width)
            .attr("height", height)
            .on("mouseover", function () { focus.style("display", null); })
            .on("mouseout", function () { focus.style("display", "none"); })
            .on("mousemove", mousemove);

          function mousemove() {
            var x0 = x.invert(d3.mouse(this)[0]),
              i = bisectDate(data, x0, 1),
              d0 = data[i - 1],
              d1 = data[i],
              d = x0 - d0.date > d1.date - x0 ? d1 : d0;
            focus.attr("transform", "translate(" + x(d.date) + "," + y(d.value) + ")");
            focus.select("text").text(function () { return d.value; });
            focus.select(".x-hover-line").attr("y2", height - y(d.value));
            focus.select(".y-hover-line").attr("x2", width + width);
          }
    });


                



    }

    render() {
        return (
           <div ref={this.myRef}></div>
        )
    }
}

export default D3Chart1
