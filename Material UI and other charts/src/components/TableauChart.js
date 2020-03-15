import React, { Component } from 'react';  
import tableau from 'tableau-api';  
  
  
class TableauChart extends Component {  
  componentDidMount() {  
    this.initViz()  
  }  
  
  
  initViz() {  
    const vizUrl = 'https://public.tableau.com/views/Admissions_15842214651050/Admissions?:display_count=y&publish=yes&:origin=viz_share_link';  
    const vizContainer = this.vizContainer;  
    let viz = new window.tableau.Viz(vizContainer, vizUrl)  
  }  
  
  
  render() {  
    return (  
      <div ref={(div) => { this.vizContainer = div }}>  
      </div>  
    )  
  }  
}  
  
  
export default TableauChart;