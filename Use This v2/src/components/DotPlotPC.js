import React, { PureComponent } from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip,
  Legend,
} from 'recharts';
import * as d3 from 'd3';
import data from '../data/pdischarge_data.js';



//console.log(data);
        
    //   var ndata = d3.nest()                    //Aggregate data according to Admit Date
    //     .key(function (d) { return(d.Unit); })
    //     //.sortKeys(d3.ascending)
    //    // .key(function (d) { return d.PatientID; })
    //    // .rollup(function (leaves) { return leaves.length; })
    //     .entries(data);

    //   ndata.forEach(function (d) {
    //     //d.date = formatDate(parseTime(d.key));
    //     d.dunit = d.key;  
    //    // d.value = +d.values.length;
    //     console.log(d.dunit);
    //    // console.log(d.values[0]);
    //   });
    //   console.log(ndata);
    //  ndata.forEach(function(d){
    //  console.log(d.values[0]);
    //  }) ;


    const [ unit1N, unit1W, unitBP, unitSCU , unit1S, unit1E ] = data;

    const parseDomain = () => [
        0,
        Math.max(
            Math.max.apply(null, unit1E.map(entry => entry.DateTime)),
            Math.max.apply(null, unit1S.map(entry => entry.DateTime)),
            Math.max.apply(null, unit1W.map(entry => entry.DateTime)),
            Math.max.apply(null, unit1N.map(entry => entry.DateTime)),
            Math.max.apply(null, unitBP.map(entry => entry.DateTimee)),
            Math.max.apply(null, unitSCU.map(entry => entry.DateTime))
        ),
    ];
    
   // console.log(parseDomain);

   
        
    

    class Example extends PureComponent {

        renderTooltip = (props) => {
            const { active, payload } = props;
    
            if (active && payload && payload.length) {
                const data = payload[0] && payload[0].payload;
    
                return (
                    <div style={{
                        backgroundColor: '#fff', border: '1px solid #999', margin: 0, padding: 10,
                    }}
                    >
                        <p>{data.DateTime}</p>
                        <p>
                            <span>Discharge from: {data.BedNum}</span>
                            
                        </p>
                    </div>
                );
            }
    
            return null;
        }
    
        render() {

            const width=900;
            const height=80;
                        
            const domain = parseDomain();
          //const domain = [];
            const domainDate = d3.scaleTime();
            
            const range = [0, width];

           // console.log(domain);
    
            return (
                <div>
                    
                    <ScatterChart
                        width={900}
                        height={80}
                        margin={{
                            top: 20, right: 0, bottom: 0, left: 0,
                        }}
                        
                    >
                        <XAxis type="category" dataKey="DateTime"  name="DateTime"  interval={0} tick={{ fontSize:6 }}  tickLine={{ transform: 'translate(0, -6)' }} />
                        <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Unit 1N', position: 'insideRight' }} />
                        <ZAxis type="category" dataKey="BedNum" domain={domain} range={range} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                        <Scatter data={unit1N} fill="orange" shape="square"  />
                    </ScatterChart>    

                    <ScatterChart
                        width={900}
                        height={80}
                        margin={{
                            top: 20, right: 0, bottom: 0, left: 0,
                        }}
                    >
                        <XAxis type="category" dataKey="DateTime" name="DateTime" interval={0} tick={{ fontSize:6 }} tickLine={{ transform: 'translate(0, -6)' }} />
                        <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Unit 1W', position: 'insideRight' }} />
                        <ZAxis type="category" dataKey="BedNum" domain={domain} range={range} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                        <Scatter data={unit1W} fill="orange" shape="square"  />
                    </ScatterChart>
                  
    
    
                  
    
                   
                    <ScatterChart
                        width={900}
                        height={80}
                        margin={{
                            top: 20, right: 0, bottom: 0, left: 0,
                        }}
                    >
                        <XAxis type="category" dataKey="DateTime" name="DateTime" interval={0} tick={{ fontSize: 11 }} tickLine={{ transform: 'translate(0, -6)' }} />
                        <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Unit BP', position: 'insideRight' }} />
                        <ZAxis type="category" dataKey="BedNum" domain={domain} range={range} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                        <Scatter data={unitBP} fill="orange" shape="square"  />
                    </ScatterChart>
    
                    <ScatterChart
                        width={900}
                        height={80}
                        margin={{
                            top: 20, right: 0, bottom: 0, left: 0,
                        }}
                    >
                        <XAxis type="category" dataKey="DateTime" name="DateTime" interval={0} tick={{ fontSize: 11 }} tickLine={{ transform: 'translate(0, -6)' }} />
                        <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Unit SCU', position: 'insideRight' }} />
                        <ZAxis type="category" dataKey="BedNum" domain={domain} range={range} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                        <Scatter data={unitSCU} fill="orange" shape="square" />
                    </ScatterChart>
                    
                    <ScatterChart
                        width={900}
                        height={80}
                        margin={{
                            top: 20, right: 0, bottom: 0, left: 0,
                        }}
                    >
                        <XAxis type="category" dataKey="DateTime" name="DateTime" interval={0} tick={{ fontSize: 11 }} tickLine={{ transform: 'translate(0, -6)' }} />
                        <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Unit 1S', position: 'insideRight' }} />
                        <ZAxis type="category" dataKey="BedNum" domain={domain} range={range} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                        <Scatter data={unit1S} fill="orange" shape="square"  />
                    </ScatterChart>
                      
                    <ScatterChart
                        width={900}
                        height={80}
                        margin={{
                            top: 20, right: 0, bottom: 0, left: 0,
                        }}
                    >
                        <XAxis type="category" dataKey="DateTime" name="DateTime" interval={0} tick={{ fontSize: 11 }} tickLine={{ transform: 'translate(0, -6)' }} />
                        <YAxis type="number" dataKey="index" height={10} width={80} tick={false} tickLine={false} axisLine={false} label={{ value: 'Unit 1E', position: 'insideRight' }} />
                        <ZAxis type="category" dataKey="BedNum" domain={domain} range={range} />
                        <Tooltip cursor={{ strokeDasharray: '3 3' }} wrapperStyle={{ zIndex: 100 }} content={this.renderTooltip} />
                        <Scatter data={unit1E} fill="orange" shape="square"  />
                    </ScatterChart>

                    </div>



    );
  }
}

export default Example;
